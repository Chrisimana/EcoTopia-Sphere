<template>
  <section class="bg-white py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-4 text-primary">Bagikan Aksi Hijau Kamu!</h2>
      <p class="text-center text-primary mb-8 max-w-2xl mx-auto">
        Ceritakan aksi kecil yang kamu lakukan hari ini dan jadilah inspirasi bagi warga lain
      </p>

      <ActionForm @submit="$emit('submit', $event)" />
    </div>
  </section>
</template>

<script setup>
import ActionForm from './Action-Form.vue'

defineEmits(['submit'])
</script>