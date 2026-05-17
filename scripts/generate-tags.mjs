import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs'
import { join, resolve, extname } from 'node:path'

const docsDir = resolve(import.meta.dirname, '..', 'docs')
const distDir = resolve(import.meta.dirname, '..', 'docs', '.vitepress', 'dist')
const hostname = 'https://lovemyfamilyfovever.github.io'
const basePath = '/myblog'

const excludeDirs = new Set(['.vitepress', 'public', 'node_modules', 'imgs'])

function parseFrontmatter(content) {
  const match = content.match(/^---\s*\n([\s\S]*?)\n(?:---|\.\.\.)/)
  if (!match) return {}
  const fm = {}
  let currentKey = null
  let currentArray = null
  for (const line of match[1].split('\n')) {
    if (line.match(/^\s*-\s/)) {
      if (currentKey && Array.isArray(fm[currentKey])) {
        fm[currentKey].push(line.replace(/^\s*-\s*/, '').trim())
      }
    } else {
      const sep = line.indexOf(':')
      if (sep > 0) {
        currentKey = line.slice(0, sep).trim()
        let val = line.slice(sep + 1).trim()
        if (val.startsWith('[') && val.endsWith(']')) {
          fm[currentKey] = val.slice(1, -1).split(',').map(v => v.trim().replace(/['"]/g, '')).filter(Boolean)
        } else if (val === '' || val === '[]') {
          fm[currentKey] = []
        } else {
          if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1)
          if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1)
          fm[currentKey] = val
        }
      }
    }
  }
  return fm
}

function extractTitle(content) {
  const match = content.match(/^#\s+(.+)/m)
  return match ? match[1].replace(/<[^>]+>/g, '').trim() : ''
}

function walk(dir) {
  const entries = readdirSync(dir, { withFileTypes: true })
  let posts = []
  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (!excludeDirs.has(entry.name)) {
        posts = posts.concat(walk(fullPath))
      }
    } else if (entry.name.endsWith('.md') && entry.name !== 'index.md' && !entry.name.startsWith('.')) {
      const content = readFileSync(fullPath, 'utf-8')
      const fm = parseFrontmatter(content)
      const tags = fm.tags || []
      if (tags.length === 0) continue
      const title = fm.title || extractTitle(content)
      if (!title) continue
      const relative = fullPath.replace(docsDir, '').replace(/\\/g, '/').replace(/^\//, '')
      const url = `${hostname}${basePath}/${relative.replace(/\.md$/, '').replace(/\/index$/, '')}/`
      posts.push({ title, url, tags: Array.isArray(tags) ? tags : [tags] })
    }
  }
  return posts
}

const posts = walk(docsDir)

const tagMap = {}
for (const post of posts) {
  for (const tag of post.tags) {
    if (!tagMap[tag]) tagMap[tag] = []
    if (!tagMap[tag].some(a => a.url === post.url)) {
      tagMap[tag].push({ title: post.title, url: post.url })
    }
  }
}

const sorted = Object.fromEntries(
  Object.entries(tagMap).sort((a, b) => b[1].length - a[1].length)
)

writeFileSync(join(distDir, 'tags.json'), JSON.stringify(sorted, null, 2), 'utf-8')
console.log(`Tags generated: ${Object.keys(sorted).length} tags, ${posts.length} tagged articles`)
