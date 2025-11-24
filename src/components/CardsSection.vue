<template>
  <section class="bg-white py-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
            v-for="card in inovasi"
            :key="card.id"
            class="bg-white text-background p-6 rounded-lg shadow-md border border-light-silver hover:shadow-lg hover:border-primary transition-all duration-300 transform hover:-translate-y-1"
        >
          <!-- Icon -->
          <img :src="card.icon" :alt="card.title" class="w-12 h-12 text-primary mb-4">
          <h3 class="font-bold text-lg mb-2">{{ card.title }}</h3>
          <p class="text-sm text-gray-600">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Import semua SVG icons
import icon1 from '../assets/icons/inovasi-cerdas/pertanian-vertikal-cerdas.svg'
import icon2 from '../assets/icons/inovasi-cerdas/sampah-jadi-energi.svg'
import icon3 from '../assets/icons/inovasi-cerdas/penerangan-jalan-surya .svg'
import icon4 from '../assets/icons/inovasi-cerdas/manajemen-air-pintar.svg'
import icon5 from '../assets/icons/inovasi-cerdas/bangunan-hijau-otomatis.svg'
import icon6 from '../assets/icons/inovasi-cerdas/aplikasi-mobilitas-terpadu.svg'
import icon7 from '../assets/icons/inovasi-cerdas/taman-kota-digital.svg'
import icon8 from '../assets/icons/inovasi-cerdas/pusat-daur-ulang-otomatis .svg'
import icon9 from '../assets/icons/inovasi-cerdas/pemantauan-emisi-kendaraan.svg'
import icon10 from '../assets/icons/inovasi-cerdas/energi-terbarukan-terintegrasi.svg'

const inovasi = [
  {
    id: 1,
    title: 'Pertanian Vertikal Cerdas',
    description: 'Sistem pertanian vertikal berbasis IoT yang mengatur kelembapan, pencahayaan, dan nutrisi secara otomatis untuk menghemat lahan dan air',
    icon: icon1,
  },
  {
    id: 2,
    title: 'Sampah Jadi Energi',
    description: 'Pengolahan limbah kota menggunakan teknologi waste-to-energy untuk menghasilkan listrik dari sampah organik',
    icon: icon2,
  },
  {
    id: 3,
    title: 'Penerangan Jalan Surya',
    description: 'Lampu jalan tenaga surya dengan sensor gerak dan sistem pemantauan otomatis untuk efisiensi energi',
    icon: icon3,
  },
  {
    id: 4,
    title: 'Manajemen Air Pintar',
    description: 'Penggunaan sensor untuk mendeteksi kebocoran air, memantau kualitas, dan mengatur distribusi air bersih',
    icon: icon4,
  },
  {
    id: 5,
    title: 'Bangunan Hijau Otomatis',
    description: 'Gedung dilengkapi sistem otomatisasi cerdas untuk mengatur suhu, ventilasi, dan pencahayaan berdasarkan aktivitas penghuni',
    icon: icon5,
  },
  {
    id: 6,
    title: 'Aplikasi Mobilitas Terpadu',
    description: 'Platform digital yang menghubungkan transportasi umum, sepeda listrik, dan kendaraan berbagi dalam satu sistem pemesanan dan pembayaran',
    icon: icon6,
  },
  {
    id: 7,
    title: 'Taman Kota Digital',
    description: 'Area hijau dengan sensor lingkungan, pengairan otomatis, serta papan informasi digital edukatif tentang keanekaragaman hayati',
    icon: icon7,
  },
  {
    id: 8,
    title: 'Pusat Daur Ulang Otomatis',
    description: 'Mesin pintar yang menerima dan memilah sampah plastik, logam, dan kaca secara otomatis dengan imbalan poin digital',
    icon: icon8,
  },
  {
    id: 9,
    title: 'Pemantauan Emisi Kendaraan',
    description: 'Kamera dan sensor yang mendeteksi emisi kendaraan di jalan raya, lalu memberi peringatan atau insentif untuk kendaraan ramah lingkungan',
    icon: icon9,
  },
  {
    id: 10,
    title: 'Energi Terbarukan Terintegrasi',
    description: 'Panel surya dan turbin angin kecil di area publik yang disambungkan ke smart grid untuk menyuplai energi bersih kota',
    icon: icon10,
  },
]
</script>