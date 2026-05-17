import { readdirSync, statSync, readFileSync, writeFileSync } from 'node:fs'
import { join, resolve, extname } from 'node:path'

const docsDir = resolve(import.meta.dirname, '..', 'docs')
const distDir = resolve(import.meta.dirname, '..', 'docs', '.vitepress', 'dist')
const hostname = 'https://lovemyfamilyfovever.github.io'
const basePath = '/myblog'

const excludeDirs = new Set(['.vitepress', 'public', 'node_modules'])
const excludeFiles = new Set(['index.md', 'markdown-examples.md'])

function extractFrontmatter(content) {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---/)
  if (!match) return {}
  const fm = {}
  for (const line of match[1].split('\n')) {
    const sep = line.indexOf(':')
    if (sep > 0) {
      const key = line.slice(0, sep).trim()
      let val = line.slice(sep + 1).trim()
      if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1)
      if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1)
      fm[key] = val
    }
  }
  return fm
}

function extractTitle(content) {
  const match = content.match(/^#\s+(.+)/m)
  return match ? match[1] : ''
}

function walk(dir, depth = 0) {
  if (depth > 5) return []
  const entries = readdirSync(dir, { withFileTypes: true })
  let posts = []
  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (!excludeDirs.has(entry.name)) {
        posts = posts.concat(walk(fullPath, depth + 1))
      }
    } else if (entry.name.endsWith('.md') && !excludeFiles.has(entry.name) && !entry.name.startsWith('.')) {
      const relative = fullPath.replace(docsDir, '').replace(/\\/g, '/').replace(/^\//, '')
      const content = readFileSync(fullPath, 'utf-8')
      const fm = extractFrontmatter(content)
      const title = fm.title || extractTitle(content)
      if (!title) continue
      const stat = statSync(fullPath)
      const url = `${hostname}${basePath}/${relative.replace(/\.md$/, '').replace(/\/index$/, '')}/`
      posts.push({
        title,
        url,
        date: fm.date || stat.mtime.toISOString().split('T')[0],
        description: fm.description || fm.desc || fm.details || '',
      })
    }
  }
  return posts
}

const posts = walk(docsDir)
posts.sort((a, b) => (a.date > b.date ? -1 : 1))

const items = posts.map(p => `  <entry>
    <title>${escapeXml(p.title)}</title>
    <link href="${p.url}"/>
    <id>${p.url}</id>
    <updated>${p.date}T00:00:00Z</updated>
    <published>${p.date}T00:00:00Z</published>
    ${p.description ? `<summary type="html">${escapeXml(p.description)}</summary>` : ''}
  </entry>`).join('\n')

const atom = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>晨钟暮鼓 - 个人技术博客</title>
  <subtitle>学习之旅，记录生活的点滴</subtitle>
  <link href="${hostname}${basePath}/"/>
  <link rel="self" href="${hostname}${basePath}/feed.xml"/>
  <updated>${posts[0]?.date || ''}T00:00:00Z</updated>
  <author>
    <name>lxc</name>
  </author>
  <id>${hostname}${basePath}/</id>
${items}
</feed>`

writeFileSync(join(distDir, 'feed.xml'), atom, 'utf-8')
console.log(`RSS feed generated: ${posts.length} entries`)

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}
