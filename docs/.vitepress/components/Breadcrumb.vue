<script setup>
import { useRoute } from 'vitepress'
import { computed } from 'vue'

const route = useRoute()

const breadcrumbs = computed(() => {
  const path = route.path
  if (path === '/' || path === '/index.html') return []

  const parts = path.replace(/^\/myblog\/?/, '').replace(/\.html$/, '').split('/').filter(Boolean)
  if (parts.length === 0) return []

  const items = [{ text: '首页', link: '/myblog/' }]
  let currentPath = '/myblog/'

  for (let i = 0; i < parts.length; i++) {
    currentPath += parts[i] + '/'
    const text = parts[i]
      .replace(/-/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase())

    if (i === parts.length - 1) {
      items.push({ text, link: null })
    } else {
      items.push({ text, link: currentPath.replace(/\/$/, '') + '.html' })
    }
  }

  return items
})
</script>

<template>
  <nav v-if="breadcrumbs.length > 1" class="breadcrumb">
    <span v-for="(item, index) in breadcrumbs" :key="index">
      <a v-if="item.link" :href="item.link" class="breadcrumb-link">{{ item.text }}</a>
      <span v-else class="breadcrumb-current">{{ item.text }}</span>
      <span v-if="index < breadcrumbs.length - 1" class="breadcrumb-sep">/</span>
    </span>
  </nav>
</template>

<style scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  font-size: 13px;
  margin-bottom: 12px;
  color: var(--vp-c-text-2);
}
.breadcrumb-link {
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.2s;
}
.breadcrumb-link:hover {
  color: var(--vp-c-brand-1);
}
.breadcrumb-current {
  color: var(--vp-c-text-1);
  font-weight: 500;
}
.breadcrumb-sep {
  color: var(--vp-c-text-3);
  margin: 0 2px;
}
</style>