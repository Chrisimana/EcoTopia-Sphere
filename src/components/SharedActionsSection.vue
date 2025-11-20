<template>
  <section class="bg-ghost-white py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 text-primary">Aksi yang Dibagikan</h2>
      <div v-if="actions.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
            v-for="action in actions"
            :key="action.id"
            class="bg-ghost-white text-background p-6 rounded-lg border border-light-silver"
        >
          <h3 class="text-xl font-bold mb-2 text-primary">{{ action.name }}</h3>
          <p class="text-gray-700 mb-3">{{ action.action }}</p>
          <span class="inline-block bg-accent text-background px-3 py-1 rounded-full text-sm font-medium">
            {{ action.category }}
          </span>
        </div>
      </div>
      <div v-else class="text-center text-gray-500">
        <p>Belum ada aksi yang dibagikan. Jadilah yang pertama!</p>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  actions: {
    type: Array,
    default: () => []
  }
})
</script>