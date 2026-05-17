<script setup>
import { useData } from 'vitepress'

const { frontmatter } = useData()

function goToTag(tag) {
  window.location.href = `/myblog/tags/#${encodeURIComponent(tag)}`
}
</script>

<template>
  <div v-if="frontmatter.tags && frontmatter.tags.length" class="tag-list">
    <span
      v-for="tag in frontmatter.tags"
      :key="tag"
      class="tag"
      role="button"
      :aria-label="`查看标签 ${tag} 的所有文章`"
      tabindex="0"
      @click="goToTag(tag)"
      @keydown.enter="goToTag(tag)"
    >
      #{{ tag }}
    </span>
  </div>
</template>

<style scoped>
.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}
.tag {
  display: inline-block;
  font-size: 12px;
  padding: 2px 10px;
  border-radius: 12px;
  background: var(--vp-c-brand-1);
  color: #fff;
  cursor: pointer;
  transition: opacity 0.2s;
}
.tag:hover {
  opacity: 0.8;
}
</style>
