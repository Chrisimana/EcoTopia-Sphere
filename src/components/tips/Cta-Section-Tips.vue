<template>
  <section class="bg-white py-16">
    <div class="container mx-auto px-4 text-center">
      <img :src="tipsIcon" alt="Tips Icon" class="w-20 h-20 mx-auto mb-6">
      <h2 class="text-3xl font-bold mb-6 text-background">Mulai Perubahan Hari Ini</h2>
      <p class="text-xl text-primary max-w-3xl mx-auto">Setiap tips yang Anda praktikkan adalah kontribusi nyata untuk masa depan yang lebih hijau. Mulai dengan satu tips, dan rasakan perbedaannya!</p>
    </div>
  </section>
</template>

<script setup>
import tipsIcon from '../../assets/icons/tips/mulai-perubahan-hari-ini.svg'
</script>