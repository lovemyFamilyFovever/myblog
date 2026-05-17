<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const tagData = ref({})
const activeTag = ref('')

onMounted(() => {
  fetch('/myblog/tags.json')
    .then(r => r.json())
    .then(data => {
      tagData.value = data
      const hash = decodeURIComponent(window.location.hash.slice(1))
      if (hash && data[hash]) activeTag.value = hash
    })
})

const tags = computed(() => Object.entries(tagData.value).sort((a, b) => b[1].length - a[1].length))

const filteredArticles = computed(() => {
  if (!activeTag.value) return []
  return tagData.value[activeTag.value] || []
})

function selectTag(tag) {
  activeTag.value = tag
  window.location.hash = encodeURIComponent(tag)
}

function back() {
  activeTag.value = ''
  window.location.hash = ''
}
</script>

<template>
  <div class="tag-page">
    <h1>标签</h1>

    <template v-if="!activeTag">
      <p class="desc">共 {{ tags.length }} 个标签</p>
      <div class="tag-cloud">
        <span
          v-for="[tag, articles] in tags"
          :key="tag"
          class="cloud-tag"
          :style="{ fontSize: `${Math.max(13, Math.min(24, 13 + articles.length * 1.5))}px` }"
          @click="selectTag(tag)"
          role="button"
          :aria-label="`标签 ${tag}，${articles.length} 篇文章`"
          tabindex="0"
          @keydown.enter="selectTag(tag)"
        >
          {{ tag }} <small>({{ articles.length }})</small>
        </span>
      </div>
    </template>

    <template v-else>
      <div class="active-header">
        <button class="back-btn" @click="back">&larr; 所有标签</button>
        <h2>标签：{{ activeTag }}</h2>
      </div>
      <ul class="article-list">
        <li v-for="article in filteredArticles" :key="article.url">
          <a :href="article.url">{{ article.title }}</a>
        </li>
      </ul>
    </template>
  </div>
</template>

<style scoped>
.tag-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px 0;
}
.desc {
  color: var(--vp-c-text-2);
  margin-bottom: 24px;
}
.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}
.cloud-tag {
  display: inline-block;
  padding: 6px 16px;
  border-radius: 20px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}
.cloud-tag:hover {
  background: var(--vp-c-brand-1);
  color: #fff;
  border-color: var(--vp-c-brand-1);
}
.cloud-tag small {
  opacity: 0.6;
  font-size: 0.8em;
}
.active-header {
  margin-bottom: 24px;
}
.back-btn {
  background: none;
  border: none;
  color: var(--vp-c-brand-1);
  cursor: pointer;
  font-size: 14px;
  padding: 0;
  margin-bottom: 8px;
}
.back-btn:hover {
  text-decoration: underline;
}
.article-list {
  list-style: none;
  padding: 0;
}
.article-list li {
  padding: 8px 0;
  border-bottom: 1px solid var(--vp-c-divider);
}
.article-list a {
  color: var(--vp-c-text-1);
  text-decoration: none;
}
.article-list a:hover {
  color: var(--vp-c-brand-1);
}
</style>
