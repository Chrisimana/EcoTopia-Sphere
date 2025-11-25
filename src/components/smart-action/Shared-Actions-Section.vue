<template>
  <section class="bg-ghost-white py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 text-primary">Aksi yang Dibagikan</h2>

      <div class="relative overflow-hidden">
        <div v-if="actions.length">
          <!-- Slider Container -->
          <div
              class="flex transition-transform duration-700 ease-in-out"
              :style="{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }"
          >
            <div
                v-for="action in actions"
                :key="action.id"
                class="bg-white text-background p-6 rounded-lg border border-light-silver shadow-sm flex-shrink-0"
                :style="{ width: `${100 / visibleCards}%` }"
            >
              <h3 class="text-xl font-bold mb-2 text-primary">{{ action.name || 'Anonim' }}</h3>
              <p class="text-gray-700 mb-3 line-clamp-3">{{ action.action }}</p>
              <span class="inline-block bg-accent text-background px-3 py-1 rounded-full text-sm font-medium">
                {{ action.category }}
              </span>
            </div>
          </div>

          <!-- Navigation Dots -->
          <div v-if="totalSlides > 1" class="flex justify-center mt-6 space-x-2">
            <button
                v-for="index in totalSlides"
                :key="index"
                @click="goToSlide(index - 1)"
                class="w-3 h-3 rounded-full transition-all duration-300"
                :class="currentIndex === (index - 1) ? 'bg-primary' : 'bg-light-silver'"
                :aria-label="`Go to slide ${index}`"
            />
          </div>
        </div>

        <div v-else class="text-center text-gray-500">
          <p>Belum ada aksi yang dibagikan. Jadilah yang pertama!</p>
        </div>
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

const visibleCards = 3 // Tampilkan 3 card sekaligus
const currentIndex = ref(0)
let slideInterval

// Hitung total slides berdasarkan jumlah actions dan visible cards
const totalSlides = computed(() => {
  return Math.max(1, Math.ceil(props.actions.length / visibleCards))
})

const startAutoSlide = () => {
  if (totalSlides.value > 1) {
    slideInterval = setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % totalSlides.value
    }, 4000) // Ganti slide setiap 4 detik
  }
}

const stopAutoSlide = () => {
  if (slideInterval) {
    clearInterval(slideInterval)
  }
}

const goToSlide = (index) => {
  stopAutoSlide()
  currentIndex.value = index
  startAutoSlide()
}

onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  stopAutoSlide()
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