<template>
  <section class="bg-white py-16 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Edukasi Card -->
        <div class="text-center p-8 bg-ghost-white rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-secondary group cursor-pointer">
          <div class="flex justify-center mb-4">
            <img :src="edukasiIcon" alt="Edukasi Icon" class="w-16 h-16 transition-all duration-300 group-hover:scale-110">
          </div>
          <h2 class="text-2xl font-bold mb-4 text-background transition-colors duration-300 group-hover:text-primary">Edukasi</h2>
          <p class="text-lg text-primary leading-relaxed transition-colors duration-300 group-hover:text-background">
            Pelajari cara hidup berkelanjutan dan<br>ramah lingkungan
          </p>
        </div>

        <!-- Aksi Card -->
        <div class="text-center p-8 bg-ghost-white rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-secondary group cursor-pointer">
          <div class="flex justify-center mb-4">
            <img :src="aksiIcon" alt="Aksi Icon" class="w-16 h-16 transition-all duration-300 group-hover:scale-110">
          </div>
          <h2 class="text-2xl font-bold mb-4 text-background transition-colors duration-300 group-hover:text-primary">Aksi</h2>
          <p class="text-lg text-primary leading-relaxed transition-colors duration-300 group-hover:text-background">
            Terapkan tips praktis dalam<br>kehidupan sehari-hari
          </p>
        </div>

        <!-- Inovasi Card -->
        <div class="text-center p-8 bg-ghost-white rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-secondary group cursor-pointer">
          <div class="flex justify-center mb-4">
            <img :src="inovasiIcon" alt="Inovasi Icon" class="w-16 h-16 transition-all duration-300 group-hover:scale-110">
          </div>
          <h2 class="text-2xl font-bold mb-4 text-background transition-colors duration-300 group-hover:text-primary">Inovasi</h2>
          <p class="text-lg text-primary leading-relaxed transition-colors duration-300 group-hover:text-background">
            Bergabung dengan gerakan<br>kota cerdas yang hijau
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import edukasiIcon from '../../assets/icons/beranda/edukasi.svg'
import aksiIcon from '../../assets/icons/beranda/aksi.svg'
import inovasiIcon from '../../assets/icons/beranda/inovasi.svg'
</script>