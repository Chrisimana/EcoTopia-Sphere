<template>
  <div
      v-if="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
  >
    <div class="bg-white text-background p-8 rounded-lg max-w-md w-full mx-4" ref="modalRef">
      <h2 id="modal-title" class="text-2xl font-bold mb-6 text-primary text-center">Aksi Berhasil Dibagikan! 🎉</h2>

      <div class="space-y-4 mb-6">
        <div>
          <p class="font-semibold text-primary mb-1">Nama:</p>
          <p class="text-background">{{ data.name || 'Anonim' }}</p>
        </div>

        <div>
          <p class="font-semibold text-primary mb-1">Aksi Hijau:</p>
          <p class="text-background">{{ data.action }}</p>
        </div>

        <div>
          <p class="font-semibold text-primary mb-1">Kategori:</p>
          <span class="inline-block bg-accent text-background px-3 py-1 rounded-full text-sm font-medium">
            {{ data.category }}
          </span>
        </div>
      </div>

      <button
          @click="close"
          class="w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary transition font-bold"
      >
        Tutup
      </button>
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