<template>
  <section class="bg-ghost-white py-8 md:py-16 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="flex justify-between items-center mb-8 md:mb-12 px-3 md:px-0">
        <h2 class="text-2xl md:text-3xl font-bold text-primary">Aksi yang Dibagikan</h2>

        <!-- Navigation Arrows - tampil di SEMUA device -->
        <div v-if="actions.length > visibleCards" class="flex space-x-2">
          <button
              @click="prevSlide"
              class="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
              :disabled="currentIndex === 0"
          >
            <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
              @click="nextSlide"
              class="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
              :disabled="currentIndex >= maxIndex"
          >
            <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div class="relative overflow-hidden">
        <!-- Slider Container -->
        <div
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }"
        >
          <div
              v-for="action in actions"
              :key="action.id"
              class="bg-white rounded-lg border border-light-silver shadow-sm flex-shrink-0 p-4 md:p-6 mx-2 md:mx-3"
              :style="{ width: `calc(${100 / visibleCards}% - ${isMobile ? '16px' : isTablet ? '20px' : '24px'})` }"
          >
            <!-- Header dengan nama -->
            <div class="mb-3 md:mb-4">
              <h3 class="font-bold text-background text-base md:text-lg">{{ action.name || 'Anonim' }}</h3>
            </div>

            <!-- Konten aksi -->
            <p class="text-gray-700 mb-3 md:mb-4 leading-relaxed text-sm md:text-base line-clamp-3">{{ action.action }}</p>

            <!-- Kategori -->
            <span class="inline-block bg-accent text-background px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium">
              {{ action.category }}
            </span>
          </div>
        </div>
      </div>

      <div v-if="actions.length === 0" class="text-center text-gray-500 py-8 md:py-12">
        <p class="text-base md:text-lg">Belum ada aksi yang dibagikan</p>
        <p class="text-xs md:text-sm text-gray-400 mt-2">Jadilah yang pertama membagikan aksi hijau Anda!</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  actions: {
    type: Array,
    default: () => []
  }
})

const currentIndex = ref(0)
const isMobile = ref(false)
const isTablet = ref(false)

const visibleCards = computed(() => {
  if (isMobile.value) return 1
  if (isTablet.value) return 2
  return 3
})

const totalSlides = computed(() => {
  return Math.max(1, Math.ceil(props.actions.length / visibleCards.value))
})

const maxIndex = computed(() => {
  return Math.max(0, Math.ceil(props.actions.length / visibleCards.value) - 1)
})

const nextSlide = () => {
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value++
  }
}

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const checkScreenSize = () => {
  const width = window.innerWidth
  isMobile.value = width < 768
  isTablet.value = width >= 768 && width < 1024
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>