<template>
  <section class="bg-ghost-white py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12 text-background">Makna Nama</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
              v-for="(item, index) in maknaList"
              :key="index"
              class="bg-white p-8 rounded-lg border border-light-silver hover:shadow-xl hover:border-primary transition-all duration-500 transform hover:-translate-y-2"
          >
            <h3 class="text-3xl font-bold text-center mb-6 text-primary">{{ item.title }}</h3>
            <p class="text-lg text-primary leading-relaxed text-justify">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const maknaList = [
  {
    title: 'Eco',
    description: 'Kata Eco menunjukkan komitmen kami terhadap ekologi dan lingkungan hidup. Ini mewakilkan fokus pada keberlanjutan, kesadaran lingkungan, dan upaya kolektif untuk melestarikan sumber daya alam.'
  },
  {
    title: 'Topia',
    description: 'Berasal dari bahasa Yunani (Utopia), Topia merepresentasikan sebuah tempat atau kondisi ideal. Ini adalah harapan untuk mewujudkan sebuah gaya hidup yang terhubung antara manusia dengan alam mencapai titik harmonis yang sempurna.'
  },
  {
    title: 'Sphere',
    description: 'Sphere melambangkan seluruh lingkup kehidupan yang utuh. Kata ini menandakan bahwa solusi keberlanjutan harus diterapkan secara menyeluruh, menciptakan ekosistem global yang mendukung masa depan kota yang cerdas.'
  },
  {
    title: 'Circle of Green Life for a Smarter Future',
    description: 'Melambangkan hubungan tak terputus antara manusia, teknologi, dan alam dalam satu lingkaran kehidupan hijau yang terus berkembang menuju masa depan yang lebih baik.'
  }
]
</script>