<template>
  <section class="relative text-white py-16">
    <!-- Background -->
    <div class="absolute inset-0 bg-background/50 z-0"></div>
    <div class="absolute inset-0 z-0">
      <img
          :src="tentangBg"
          alt="Background Hero Tentang"
          class="w-full h-full object-cover"
      />
    </div>

    <!-- Content -->
    <div class="container mx-auto px-4 text-center relative z-10">
      <span class="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm mb-4 backdrop-blur-sm">Mengenal Lebih Dekat</span>
      <h1 class="text-4xl font-bold mb-4">Tentang EcoTopia Sphere</h1>
      <p class="text-xl text-white mb-8">Membangun ekosistem digital untuk masa depan yang lebih hijau dan berkelanjutan</p>
    </div>
  </section>
</template>

<script setup>
import tentangBg from '../assets/tentang.jpg'
</script>