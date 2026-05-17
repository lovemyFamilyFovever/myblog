import { readdirSync, statSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const distDir = resolve(import.meta.dirname, '..', 'docs', '.vitepress', 'dist')
const hostname = 'https://lovemyfamilyfovever.github.io'
const basePath = '/myblog'

const pages = []
function walk(dir) {
  const entries = readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      walk(fullPath)
    } else if (entry.name.endsWith('.html') && entry.name !== '404.html') {
      const relative = fullPath.replace(distDir, '').replace(/\\/g, '/')
      const url = relative.replace(/\/index\.html$/, '/').replace(/\.html$/, '/')
      const stat = statSync(fullPath)
      pages.push({
        loc: `${hostname}${basePath}${url}`,
        lastmod: stat.mtime.toISOString().split('T')[0],
      })
    }
  }
}

walk(distDir)

const urls = pages.map(p => `  <url>
    <loc>${p.loc}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>daily</changefreq>
  </url>`).join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

writeFileSync(join(distDir, 'sitemap.xml'), xml, 'utf-8')
console.log(`Sitemap generated: ${pages.length} pages`)
