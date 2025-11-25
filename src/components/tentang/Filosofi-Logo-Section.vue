<template>
  <section class="bg-white py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 text-background">Filosofi Logo</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div
            v-for="(item, index) in filosofiList"
            :key="index"
            class="bg-ghost-white p-6 rounded-lg border border-light-silver hover:shadow-lg hover:border-primary transition-all duration-300 transform hover:-translate-y-1"
        >
          <h3 class="text-lg font-bold mb-3 text-primary">{{ item.title }}</h3>
          <p class="text-primary text-sm leading-relaxed">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const filosofiList = [
  {
    title: 'Lingkaran Putih',
    description: 'Digunakan sebagai bentuk yang sempurna yang mengelilingi, melambangkan "Sphere", dunia dan keseimbangan global. Ini juga menjadi simbol dari Circle of Green Life.'
  },
  {
    title: 'Daun',
    description: 'Daun yang terletak di tengah logo, melambangkan simbol kehidupan, pertumbuhan, dan kesadaran lingkungan.'
  },
  {
    title: 'Lengkungan Putih',
    description: 'Garis putih yang mengelilingi dari bagian bawah daun, melambangkan hubungan antara manusia dan bumi, menandakan bahwa solusi langkah kecil yang diinisiasi akan berkembang bersama.'
  },
  {
    title: 'Warna Hijau',
    description: 'Dalam logo melambangkan aspek Pertumbuhan, Kesadaran, dan Pembaharuan Lingkungan.'
  },
  {
    title: 'Warna Putih',
    description: 'Adalah warna utama yang digunakan pada lingkaran dan detail logo, warna ini merupakan simbol komunitas, keseimbangan, dan transparansi yang diterapkan dalam inovasi hijau.'
  }
]
</script>