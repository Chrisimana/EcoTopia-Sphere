<template>
  <section class="relative text-white py-16">

    <!-- Background -->
    <div class="absolute inset-0 bg-background/50 z-0"></div>
    <div class="absolute inset-0 z-0">
      <img
          :src="smartActionBg"
          alt="Background Hero"
          class="w-full h-full object-cover"
      />
    </div>

    <!-- Content -->
    <div class="container mx-auto px-4 text-center relative z-10">
      <span class="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm mb-4 backdrop-blur-sm">Aksi Digital Interaktif</span>
      <h1 class="text-4xl font-bold mb-4">Aksi Nyata Menuju Kota Cerdas</h1>
      <p class="text-xl text-white mb-8">Setiap langkah kecil berkontribusi untuk masa depan yang Hijau</p>
    </div>
  </section>
</template>

<script setup>
import smartActionBg from '../assets/smartaction.jpg'
</script>