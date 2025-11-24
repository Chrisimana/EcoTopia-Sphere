<template>
  <section class="bg-ghost-white py-16 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Filter Tags -->
      <div class="flex flex-wrap gap-4 justify-center mb-12">
        <button
            v-for="category in categories"
            :key="category"
            @click="setActiveCategory(category)"
            :class="[
            'px-6 py-2 rounded-full font-semibold transition duration-300',
            activeCategory === category
              ? 'bg-primary text-white'
              : 'bg-white text-background hover:bg-secondary'
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Tips Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
            v-for="tip in filteredTips"
            :key="tip.id"
            class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
        >
          <div class="flex justify-start mb-4">
            <img :src="tip.icon" :alt="tip.title" class="w-12 h-12">
          </div>
          <h3 class="text-xl font-bold text-background mb-3">{{ tip.title }}</h3>
          <p class="text-primary mb-4">{{ tip.description }}</p>
          <router-link
              :to="`/artikel/${tip.slug}`"
              class="text-primary font-semibold hover:text-background transition duration-300 inline-block"
          >
            Baca Selengkapnya →
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// Import icons
import icon14 from '../assets/icons/tips/hemat-energi-listrik.svg'
import icon15 from '../assets/icons/tips/manfaatkan-cahaya-alami.svg'
import icon16 from '../assets/icons/tips/gunakan-energi-terbarukan.svg'
import icon17 from '../assets/icons/tips/hemat-air.svg'
import icon18 from '../assets/icons/tips/tampung-air-hujan.svg'
import icon19 from '../assets/icons/tips/mesin-cuci-efisien.svg'
import icon20 from '../assets/icons/tips/pisahkan-sampah.svg'
import icon21 from '../assets/icons/tips/kurangi-penggunaan-plastik.svg'
import icon22 from '../assets/icons/tips/kompos-sampah-organik.svg'
import icon23 from '../assets/icons/tips/transportasi-ramah-lingkungan.svg'
import icon24 from '../assets/icons/tips/carpooling.svg'
import icon25 from '../assets/icons/tips/kendaraan-listrik .svg'

const activeCategory = ref('Semua')
const categories = ['Semua', 'Energi', 'Air', 'Sampah', 'Transportasi']

const tips = ref([
  {
    id: 1,
    title: 'Hemat Energi Listrik',
    description: 'Matikan lampu dan alat elektronik saat tidak digunakan.',
    category: 'Energi',
    icon: icon14,
    slug: 'hemat-energi-listrik'
  },
  {
    id: 2,
    title: 'Manfaatkan Cahaya Alami',
    description: 'Buka jendela di siang hari untuk hemat listrik dan segarkan udara',
    category: 'Energi',
    icon: icon15,
    slug: 'manfaat-cahaya-alami'
  },
  {
    id: 3,
    title: 'Gunakan Energi Terbarukan',
    description: 'Mulai dengan lampu tenaga surya atau panel kecil di rumah',
    category: 'Energi',
    icon: icon16,
    slug: 'gunakan-energi-terbarukan'
  },
  {
    id: 4,
    title: 'Hemat Air',
    description: 'Perbaiki keran bocor dan pakai shower timer untuk hemat air',
    category: 'Air',
    icon: icon17,
    slug: 'hemat-air'
  },
  {
    id: 5,
    title: 'Tampung Air Hujan',
    description: 'Tampung air hujan untuk kebutuhan taman dan kepentingan lain',
    category: 'Air',
    icon: icon18,
    slug: 'tampung-air-hujan'
  },
  {
    id: 6,
    title: 'Mesin Cuci Efisien',
    description: 'Cuci pakaian penuh dan gunakan mode hemat air',
    category: 'Air',
    icon: icon19,
    slug: 'mesin-cuci-efisien'
  },
  {
    id: 7,
    title: 'Pisahkan Sampah',
    description: 'Pisahkan sampah organik, anorganik, dan B3 untuk daur ulang',
    category: 'Sampah',
    icon: icon20,
    slug: 'pisahkan-sampah'
  },
  {
    id: 8,
    title: 'Kurangi Penggunaan Plastik',
    description: 'Gunakan tas kain dan wadah sendiri untuk mengurangi sampah plastik',
    category: 'Sampah',
    icon: icon21,
    slug: 'kurangi-penggunaan-plastik'
  },
  {
    id: 9,
    title: 'Kompos Sampah Organik',
    description: 'Ubah sampah dapur jadi kompos untuk pupuk alami',
    category: 'Sampah',
    icon: icon22,
    slug: 'kompos-sampah-organik'
  },
  {
    id: 10,
    title: 'Transportasi Ramah Lingkungan',
    description: 'Gunakan sepeda atau transportasi umum untuk menekan emisi karbon',
    category: 'Transportasi',
    icon: icon23,
    slug: 'transportasi-ramah-lingkungan'
  },
  {
    id: 11,
    title: 'Carpooling',
    description: 'Berbagi kendaraan untuk hemat biaya dan kurangi emisi',
    category: 'Transportasi',
    icon: icon24,
    slug: 'carpooling'
  },
  {
    id: 12,
    title: 'Kendaraan Listrik',
    description: 'Gunakan kendaraan listrik atau hybrid untuk kurangi polusi',
    category: 'Transportasi',
    icon: icon25,
    slug: 'kendaraan-listrik'
  }
])

const filteredTips = computed(() => {
  if (activeCategory.value === 'Semua') {
    return tips.value
  }
  return tips.value.filter(tip => tip.category === activeCategory.value)
})

const setActiveCategory = (category) => {
  activeCategory.value = category
}
</script>!