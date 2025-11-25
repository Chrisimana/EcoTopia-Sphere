<template>
  <div class="bg-white">
    <HeroSectionSmartAction />
    <ShareActionSection @submit="handleSubmit" />
    <SharedActionsSection :actions="actions" />
    <CtaSectionSmartAction />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import HeroSectionSmartAction from '../components/smart-action/Hero-Section-Smart-Action.vue'
import ShareActionSection from '../components/smart-action/Share-Action-Section.vue'
import SharedActionsSection from '../components/smart-action/Shared-Actions-Section.vue'
import CtaSectionSmartAction from '../components/smart-action/Cta-Section-Smart-Action.vue'

const actions = ref([])

// Load data dari localStorage saat komponen dimuat
onMounted(() => {
  const savedActions = localStorage.getItem('smartActions')
  if (savedActions) {
    actions.value = JSON.parse(savedActions)
  }
})

const handleSubmit = (data) => {
  const newAction = {
    ...data,
    id: Date.now(),
    timestamp: new Date().toISOString()
  }

  // Tambahkan ke array actions (auto update tanpa reload)
  actions.value.unshift(newAction)

  // Simpan ke localStorage
  localStorage.setItem('smartActions', JSON.stringify(actions.value))
}

// FITUR HAPUS RAHASIA UNTUK DEVELOPER
onMounted(() => {
  let dCount = 0
  let timeoutId = null

  const handleKeydown = (e) => {
    if (e.key === 'd' || e.key === 'D') {
      dCount++

      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(() => {
        dCount = 0
      }, 1000)

      if (dCount === 3) {
        localStorage.removeItem('smartActions')
        actions.value = []
        alert('🗑️ Semua data aksi berhasil dihapus!')
        dCount = 0
        if (timeoutId) {
          clearTimeout(timeoutId)
        }
      }
    }
  }

  window.addEventListener('keydown', handleKeydown)

  return () => {
    window.removeEventListener('keydown', handleKeydown)
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
  }
})
</script>