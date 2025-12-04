<template>
  <div class="bg-white">
    <HeroSectionSmartAction />
    <ShareActionSection @submit="handleSubmit" />
    <SharedActionsSection :actions="actions" />
    <CtaSectionSmartAction />
  </div>
</template>

<script setup>
// Import komponen-komponen section untuk halaman Smart Action
import { ref, onMounted } from 'vue'
import HeroSectionSmartAction from '../components/smart-action/HeroSectionSmartAction.vue'
import ShareActionSection from '../components/smart-action/ShareActionSection.vue'
import SharedActionsSection from '../components/smart-action/SharedActionsSection.vue'
import CtaSectionSmartAction from '../components/smart-action/CtaSectionSmartAction.vue'

// State untuk menyimpan daftar aksi
const actions = ref([])

// Load data dari localStorage saat komponen dimuat
onMounted(() => {
  const savedActions = localStorage.getItem('smartActions')
  if (savedActions) {
    actions.value = JSON.parse(savedActions)
  }
})

// Handler untuk menambah aksi baru
const handleSubmit = (data) => {
  const newAction = {
    ...data,
    id: Date.now(), // ID unik berdasarkan timestamp
    timestamp: new Date().toISOString() // Waktu submit
  }

  // Tambahkan ke array actions
  actions.value.unshift(newAction)

  // Simpan ke localStorage
  localStorage.setItem('smartActions', JSON.stringify(actions.value))
}

// Fitur Hapus Untuk Developer
onMounted(() => {
  let dCount = 0 // Counter untuk tombol 'd'
  let timeoutId = null // Timeout reset counter

  const handleKeydown = (e) => {
    if (e.key === 'd' || e.key === 'D') {
      dCount++

      // Reset counter setelah 1 detik tidak ada input
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(() => {
        dCount = 0
      }, 1000)

      // Jika 'd' ditekan 3x dalam 1 detik
      if (dCount === 3) {

        // Hapus semua data dari localStorage dan state
        localStorage.removeItem('smartActions')
        actions.value = []
        alert('🗑️ Semua data aksi berhasil dihapus!')

        // Reset counter dan cleanup
        dCount = 0
        if (timeoutId) {
          clearTimeout(timeoutId)
        }
      }
    }
  }

  // Tambah event listener untuk keyboard
  window.addEventListener('keydown', handleKeydown)

  // Cleanup event listener saat komponen di-unmount
  return () => {
    window.removeEventListener('keydown', handleKeydown)
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
  }
})
</script>