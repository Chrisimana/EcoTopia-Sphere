<template>
  <form @submit.prevent="handleSubmit" class="bg-white p-8 rounded-lg border border-gray-200 max-w-lg mx-auto shadow-sm">
    <div class="mb-6">
      <label for="name" class="block font-semibold mb-3 text-primary text-lg">Nama:</label>
      <input
          id="name"
          v-model="form.name"
          type="text"
          class="w-full p-4 rounded border border-gray-300 bg-white text-background focus:border-primary focus:outline-none placeholder-gray-400"
          placeholder="Masukkan nama kamu..."
          required
          aria-describedby="name-error"
      />
      <p v-if="errors.name" id="name-error" class="text-primary text-sm mt-2" aria-live="polite">{{ errors.name }}</p>
    </div>

    <div class="mb-8">
      <label for="action" class="block font-semibold mb-3 text-primary text-lg">Aksi:</label>
      <textarea
          id="action"
          v-model="form.action"
          class="w-full p-4 rounded border border-gray-300 bg-white text-background focus:border-primary focus:outline-none placeholder-gray-400"
          placeholder="Ceritakan aksi hijau yang kamu lakukan...."
          required
          aria-describedby="action-error"
          rows="5"
      ></textarea>
      <p v-if="errors.action" id="action-error" class="text-primary text-sm mt-2" aria-live="polite">{{ errors.action }}</p>
    </div>

    <button
        type="submit"
        :disabled="!isValid"
        class="w-full bg-primary text-white py-4 rounded-lg hover:bg-secondary transition disabled:opacity-50 font-bold text-lg"
    >
      Kirim Aksi Saya
    </button>
  </form>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const emit = defineEmits(['submit'])

const form = reactive({
  name: '',
  action: '',
  category: 'Energi',
})

const errors = ref({})

const isValid = computed(() => {
  return form.name.trim() && form.action.trim()
})

const validate = () => {
  errors.value = {}
  if (!form.name.trim()) errors.value.name = 'Nama wajib diisi.'
  if (!form.action.trim()) errors.value.action = 'Aksi wajib diisi.'
}

const handleSubmit = () => {
  validate()
  if (isValid.value) {
    emit('submit', { ...form })
  }
}
</script>