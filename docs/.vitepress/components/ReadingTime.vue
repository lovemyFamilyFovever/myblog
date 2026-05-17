<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const readingTime = ref('')

function calc() {
  const el = document.querySelector('.vp-doc')
  if (!el) {
    readingTime.value = ''
    return
  }
  const text = el.innerText || el.textContent || ''
  const cn = (text.match(/[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff]/g) || []).length
  const en = (text.match(/[a-zA-Z]+/g) || []).length
  const words = cn + en
  const minutes = Math.max(1, Math.round(words / 300))
  readingTime.value = `${minutes} 分钟`
}

onMounted(() => {
  calc()
  watch(() => route.path, () => setTimeout(calc, 0))
})
</script>

<template>
  <div v-if="readingTime" class="reading-time">
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 6v6l4 2"/>
    </svg>
    阅读时长约 {{ readingTime }}
  </div>
</template>

<style scoped>
.reading-time {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--vp-c-text-2);
  margin-bottom: 12px;
}
</style>
