<template>
  <header class="bg-background text-white shadow-md">
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
      <router-link to="/" class="flex items-center">
        <!-- Logo -->
        <img src="../assets/icons/navbar/logo.jpg" height="40" width="40" class="h-8 w-8 md:h-10 md:w-10"/>

        <!-- Tulisan EcoTopia Sphere -->
        <span class="text-xl md:text-2xl font-bold ml-2 md:ml-3">EcoTopia Sphere</span>
      </router-link>

      <!-- Menu Desktop -->
      <div class="hidden md:flex items-center space-x-4 lg:space-x-6">
        <router-link
            v-for="route in routes"
            :key="route.name"
            :to="route.path"
            :class="[
            'transition font-medium',
            $route.name === route.name ? 'text-accent' : 'text-white hover:text-accent'
          ]"
        >
          {{ route.displayName }}
        </router-link>
      </div>

      <!-- Tombol Menu -->
      <button
          @click="toggleMenu"
          class="md:hidden focus:outline-none text-white p-2"
          aria-label="Toggle menu"
      >
        <!-- Icon Sederhana -->
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </nav>

    <!-- Menu Mobile -->
    <div v-if="isMenuOpen" class="md:hidden bg-background px-4 py-2">
      <router-link
          v-for="route in routes"
          :key="route.name"
          :to="route.path"
          @click="closeMenu"
          :class="[
          'block py-2 transition font-medium',
          $route.name === route.name ? 'text-accent' : 'text-white hover:text-accent'
        ]"
      >
        {{ route.displayName }}
      </router-link>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)
const routes = [
  { name: 'Beranda', path: '/', displayName: 'Beranda' },
  { name: 'Tentang', path: '/tentang', displayName: 'Tentang' },
  { name: 'Tips', path: '/tips', displayName: 'Tips' },
  { name: 'InovasiCerdas', path: '/inovasi-cerdas', displayName: 'Inovasi Cerdas' },
  { name: 'SmartAction', path: '/smart-action', displayName: 'Smart Action' },
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>