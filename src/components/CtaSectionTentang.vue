<template>
  <section class="bg-ghost-white py-16">
    <div class="container mx-auto px-4 text-center">
      <img :src="tentangIcon" alt="Tentang Icon" class="w-20 h-20 mx-auto mb-6">
      <h2 class="text-3xl font-bold mb-6 text-background">Mari Memulai Perjalanan Hijau</h2>
      <p class="text-xl text-primary max-w-3xl mx-auto">
        Setiap langkah kecil yang kita ambil hari ini akan membentuk masa depan yang lebih berkelanjutan untuk generasi mendatang
      </p>
    </div>
  </section>
</template>

<script setup>
import tentangIcon from '../assets/icons/12.svg'
</script>