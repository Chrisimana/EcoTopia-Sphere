<template>
  <div id="app">
    <!-- Navbar hanya muncul di halaman tertentu -->
    <Navbar v-if="showNavbar" />

    <router-view />

    <!-- Footer hanya muncul di halaman tertentu -->
    <Footer v-if="showFooter" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const route = useRoute()

// Sembunyikan navbar dan footer di halaman artikel
const showNavbar = computed(() => !route.path.includes('/artikel/'))
const showFooter = computed(() => !route.path.includes('/artikel/'))
</script>