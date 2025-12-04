<template>
  <div class="bg-white">
    <HeroSectionBeranda />
    <EdukasiAksiInovasiSection />
    <DampakNyataSection />
    <CtaSectionBeranda />
  </div>
</template>

<script setup>
// Import komponen-komponen section untuk halaman Beranda
import HeroSectionBeranda from '../components/beranda/HeroSectionBeranda.vue'
import EdukasiAksiInovasiSection from '../components/beranda/EdukasiAksiInovasiSection.vue'
import DampakNyataSection from '../components/beranda/DampakNyataSection.vue'
import CtaSectionBeranda from '../components/beranda/CtaSectionBeranda.vue'
</script>