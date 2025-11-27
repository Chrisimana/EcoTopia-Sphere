<template>
  <section class="relative text-white min-h-screen flex items-center">

    <!-- Background -->
    <div class="absolute inset-0 bg-background/70 z-0"></div>
    <div class="absolute inset-0 z-0">
      <img
          :src="berandaBg"
          alt="Background Hero Beranda"
          class="w-full h-full object-cover"
      />
    </div>

    <!-- Content -->
    <div class="container mx-auto px-4 text-center relative z-10">
      <span class="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm mb-4 backdrop-blur-sm">Platform Digital untuk Kehidupan Berkelanjutan</span>
      <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg max-w-4xl mx-auto">
        Circle of Green Life for a Smarter Future
      </h1>
      <p class="text-lg md:text-xl mb-12 leading-relaxed font-medium drop-shadow-lg max-w-4xl mx-auto">
        EcoTopia Sphere dirancang untuk meningkatkan kesadaran masyarakat terhadap gaya hidup ramah lingkungan di era kota cerdas (Smart City). Menggambarkan bagaimana kehidupan manusia, alam, dan teknologi dapat membentuk lingkaran hijau berkelanjutan dimana setiap individu berperan dalam menjaga keseimbangan bumi.
      </p>

      <!-- Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <router-link
            to="/tentang"
            class="bg-accent text-background px-6 py-3 rounded-full hover:bg-white transition duration-300 font-semibold text-base shadow-lg min-w-[180px] text-center"
        >
          Pelajari Lebih Lanjut
        </router-link>
        <router-link
            to="/inovasi-cerdas"
            class="bg-accent text-background px-6 py-3 rounded-full hover:bg-white transition duration-300 font-semibold text-base shadow-lg min-w-[180px] text-center"
        >
          Lihat Inovasi Cerdas
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import berandaBg from '../../assets/beranda.jpg'
</script>