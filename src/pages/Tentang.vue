<template>
  <div class="bg-white">
    <HeroSectionTentang />
    <VisiMisiSection />
    <MaknaNamaSection />
    <FilosofiLogoSection />
    <CtaSectionTentang />
  </div>
</template>

<script setup>
// Import komponen-komponen section untuk halaman Tentang
import HeroSectionTentang from '../components/tentang/HeroSectionTentang.vue'
import VisiMisiSection from '../components/tentang/VisiMisiSection.vue'
import MaknaNamaSection from '../components/tentang/MaknaNamaSection.vue'
import FilosofiLogoSection from '../components/tentang/FilosofiLogoSection.vue'
import CtaSectionTentang from '../components/tentang/CtaSectionTentang.vue'
</script>