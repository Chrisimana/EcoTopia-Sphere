<template>
  <section class="bg-ghost-white py-16 px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-6 text-background">Dampak Nyata dari Aksi Hijau Kita</h2>
      <p class="text-lg text-center mb-12 text-primary max-w-2xl mx-auto">
        Setiap tindakan kecil membawa perubahan besar. Lihat bagaimana kontribusi hijau kita berdampak pada kota yang lebih cerdas dan berkelanjutan.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <!-- Card 1 -->
        <div class="bg-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-secondary group cursor-pointer">
          <div class="flex justify-center mb-4">
            <img :src="energiIcon" alt="Energi Icon" class="w-12 h-12 transition-all duration-300 group-hover:scale-110">
          </div>
          <h3 class="text-lg font-bold text-background mb-2 leading-tight transition-colors duration-300 group-hover:text-primary">
            Penghematan<br>Energi Rumah<br>Tangga
          </h3>
          <p class="text-3xl font-bold text-primary mb-3 transition-all duration-300 group-hover:scale-110">{{ animatedValues[0] }}%</p>
          <p class="text-sm text-primary leading-tight transition-colors duration-300 group-hover:text-background">
            Pengurangan konsumsi<br>listrik melalui habits<br>hemat energi
          </p>
        </div>

        <!-- Card 2 -->
        <div class="bg-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-secondary group cursor-pointer">
          <div class="flex justify-center mb-4">
            <img :src="plastikIcon" alt="Plastik Icon" class="w-12 h-12 transition-all duration-300 group-hover:scale-110">
          </div>
          <h3 class="text-lg font-bold text-background mb-2 leading-tight transition-colors duration-300 group-hover:text-primary">
            Pengurangan<br>Sampah Plastik
          </h3>
          <p class="text-3xl font-bold text-primary mb-3 transition-all duration-300 group-hover:scale-110">{{ animatedValues[1] }}%</p>
          <p class="text-sm text-primary leading-tight transition-colors duration-300 group-hover:text-background">
            Pengurangan konsumsi<br>listrik melalui habits<br>hemat energi
          </p>
        </div>

        <!-- Card 3 -->
        <div class="bg-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-secondary group cursor-pointer">
          <div class="flex justify-center mb-4">
            <img :src="sepedaIcon" alt="Sepeda Icon" class="w-12 h-12 transition-all duration-300 group-hover:scale-110">
          </div>
          <h3 class="text-lg font-bold text-background mb-2 leading-tight transition-colors duration-300 group-hover:text-primary">
            Transportasi<br>Ramah<br>Lingkungan
          </h3>
          <p class="text-3xl font-bold text-primary mb-3 transition-all duration-300 group-hover:scale-110">{{ animatedValues[2] }}%</p>
          <p class="text-sm text-primary leading-tight transition-colors duration-300 group-hover:text-background">
            Pengurangan konsumsi<br>listrik melalui habits<br>hemat energi
          </p>
        </div>

        <!-- Card 4 -->
        <div class="bg-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-secondary group cursor-pointer">
          <div class="flex justify-center mb-4">
            <img :src="orangIcon" alt="Orang Icon" class="w-12 h-12 transition-all duration-300 group-hover:scale-110">
          </div>
          <h3 class="text-lg font-bold text-background mb-2 leading-tight transition-colors duration-300 group-hover:text-primary">
            Partisipasi<br>Masyarakat<br>Hijau
          </h3>
          <p class="text-3xl font-bold text-primary mb-3 transition-all duration-300 group-hover:scale-110">{{ animatedValues[3] }}%</p>
          <p class="text-sm text-primary leading-tight transition-colors duration-300 group-hover:text-background">
            Pengurangan konsumsi<br>listrik melalui habits<br>hemat energi
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import energiIcon from '../assets/icons/beranda/penghematan-energi-rumah-tangga.svg'
import plastikIcon from '../assets/icons/beranda/pengurangan-sampah-plastik.svg'
import sepedaIcon from '../assets/icons/beranda/transportasi-ramah-lingkungan.svg'
import orangIcon from '../assets/icons/beranda/partisipasi-masyarakat-hijau.svg'

const animatedValues = ref([0, 0, 0, 0])
const finalValues = [75, 70, 75, 80]

onMounted(() => {
  // animasi
  finalValues.forEach((finalValue, index) => {
    let current = 0
    const interval = setInterval(() => {
      if (current >= finalValue) {
        clearInterval(interval)
      } else {
        current++
        animatedValues.value[index] = current
      }
    }, 60)
  })
})
</script>