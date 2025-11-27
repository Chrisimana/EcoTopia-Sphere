<template>
  <form @submit.prevent="handleSubmit" class="bg-white p-6 rounded-lg border border-gray-200 max-w-lg mx-auto shadow-sm">
    <div class="mb-4">
      <label for="name" class="block font-semibold mb-2 text-primary">Nama:</label>
      <input
          id="name"
          v-model="form.name"
          type="text"
          class="w-full px-3 py-2 rounded border border-gray-300 bg-white text-background focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-200 placeholder-gray-400 text-sm"
          placeholder="Masukkan nama kamu..."
          required
      />
    </div>

    <div class="mb-4">
      <label class="block font-semibold mb-2 text-primary">Kategori:</label>

      <!-- Custom Dropdown -->
      <div class="relative">
        <button
            type="button"
            @click="isDropdownOpen = !isDropdownOpen"
            class="w-full px-3 py-2 rounded border border-gray-300 bg-white text-background focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-200 text-left flex justify-between items-center text-sm"
        >
          <span>{{ getCategoryLabel(form.category) }}</span>
          <svg
              class="w-4 h-4 text-primary transition-transform duration-200"
              :class="{ 'rotate-180': isDropdownOpen }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>

        <!-- Dropdown Menu -->
        <div
            v-if="isDropdownOpen"
            class="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-48 overflow-auto"
        >
          <button
              v-for="option in categoryOptions"
              :key="option.value"
              type="button"
              @click="selectCategory(option.value)"
              class="w-full px-3 py-2 text-sm text-left hover:bg-primary hover:text-white transition-colors duration-150 first:rounded-t last:rounded-b"
              :class="{
              'bg-primary text-white': form.category === option.value,
              'bg-white text-background': form.category !== option.value
            }"
          >
            {{ option.label }}
          </button>
        </div>
      </div>
    </div>

    <div class="mb-6">
      <label for="action" class="block font-semibold mb-2 text-primary">Aksi:</label>
      <textarea
          id="action"
          v-model="form.action"
          class="w-full px-3 py-2 rounded border border-gray-300 bg-white text-background focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-200 placeholder-gray-400 resize-none text-sm"
          placeholder="Ceritakan aksi hijau yang kamu lakukan...."
          required
          rows="4"
      ></textarea>
    </div>

    <!-- Status Message -->
    <div v-if="submitStatus" class="mb-3 p-2 rounded text-center border border-gray-200 transition-all duration-200 text-sm" :class="submitStatusClass">
      {{ submitStatus }}
    </div>

    <button
        type="submit"
        :disabled="isSubmitting"
        class="w-full bg-primary text-white py-2 rounded hover:bg-secondary transition-colors duration-200 disabled:opacity-50 font-semibold text-sm shadow hover:shadow-md"
    >
      {{ isSubmitting ? 'Mengirim...' : 'Kirim Aksi Saya' }}
    </button>
  </form>

  <!-- Success Popup -->
  <div v-if="showSuccessPopup" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-4 text-center">
      <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <h3 class="text-lg font-bold text-gray-900 mb-2">Aksi Berhasil Dikirim!</h3>
      <p class="text-gray-600 mb-4">Terima kasih telah berbagi aksi hijau Anda.</p>
      <button
          @click="showSuccessPopup = false"
          class="w-full bg-primary text-white py-2 rounded hover:bg-secondary transition-colors"
      >
        Tutup
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['submit'])

const form = reactive({
  name: '',
  action: '',
  category: 'Energi',
})

const isDropdownOpen = ref(false)
const isSubmitting = ref(false)
const submitStatus = ref('')
const submitStatusClass = ref('')
const showSuccessPopup = ref(false)

const categoryOptions = [
  { value: 'Energi', label: 'Hemat Energi' },
  { value: 'Air', label: 'Hemat Air' },
  { value: 'Sampah', label: 'Kelola Sampah' },
  { value: 'Transportasi', label: 'Transportasi Ramah' },
  { value: 'Lainnya', label: 'Lainnya' }
]

const isValid = computed(() => {
  return form.name.trim() && form.action.trim()
})

const getCategoryLabel = (value) => {
  const option = categoryOptions.find(opt => opt.value === value)
  return option ? option.label : 'Pilih Kategori'
}

const selectCategory = (value) => {
  form.category = value
  isDropdownOpen.value = false
}

const handleSubmit = async () => {
  if (!isValid.value || isSubmitting.value) return

  isSubmitting.value = true
  submitStatus.value = 'Mengirim aksi...'
  submitStatusClass.value = 'bg-accent text-background'

  await new Promise(resolve => setTimeout(resolve, 1000))

  try {
    // Kirim data ke parent component
    emit('submit', { ...form })

    // Tampilkan popup sukses
    showSuccessPopup.value = true

    // Reset form
    form.name = ''
    form.action = ''
    form.category = 'Energi'

    // Reset status message
    submitStatus.value = ''

  } catch (error) {
    submitStatus.value = '❌ Gagal mengirim aksi'
    submitStatusClass.value = 'bg-red-500 text-white'
  } finally {
    isSubmitting.value = false
  }
}

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('.relative')) {
    isDropdownOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>