<template>
  <div
      v-if="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
  >
    <div class="bg-white text-black p-8 rounded-lg max-w-md w-full mx-4" ref="modalRef">
      <h2 id="modal-title" class="text-xl font-bold mb-4">{{ data.title || 'Detail' }}</h2>
      <p><strong>Deskripsi:</strong> {{ data.description }}</p>
      <p v-if="data.detail"><strong>Detail:</strong> {{ data.detail }}</p>
      <p><strong>Kategori:</strong> {{ data.category }}</p>
      <button @click="close" class="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-secondary">Tutup</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  isOpen: Boolean,
  data: Object,
})

const emit = defineEmits(['close'])

const modalRef = ref(null)

const close = () => {
  emit('close')
}

const handleKeydown = (e) => {
  if (e.key === 'Escape') close()
}

const trapFocus = (e) => {
  if (e.key === 'Tab') {
    const focusable = modalRef.value.querySelectorAll('button, input, textarea')
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.shiftKey) {
      if (document.activeElement === first) {
        last.focus()
        e.preventDefault()
      }
    } else {
      if (document.activeElement === last) {
        first.focus()
        e.preventDefault()
      }
    }
  }
}

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    document.addEventListener('keydown', handleKeydown)
    modalRef.value.addEventListener('keydown', trapFocus)
    modalRef.value.querySelector('button').focus()
  } else {
    document.removeEventListener('keydown', handleKeydown)
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>