<template>
  <section class="bg-white py-16 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
            v-for="card in cv"
            :key="card.id"
            class="bg-white text-background p-6 rounded-lg shadow-md border border-light-silver hover:shadow-lg hover:border-primary transition-all duration-300 transform hover:-translate-y-1"
        >
          <!-- Icon -->
          <img :src="card.icon" :alt="card.title" class="w-12 h-12 text-primary mb-4">
          <h3 class="font-bold text-xl text-background mb-3">{{ card.title }}</h3>
          <p class="text-primary">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

const cv = [
  {
    id: 1,
    title: 'Bekerja Sama',
  },
  {
    id: 2,
    title: 'Komunikasi Efektif',
  },
  {
    id: 3,
    title: 'Kepempinan',
  },
]
</script>