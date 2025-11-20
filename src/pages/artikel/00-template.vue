<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-background text-white py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">.</h1>
          <p class="text-xl text-ghost-white">.</p>
        </div>
      </div>
    </header>

    <!-- Content -->
    <main class="container mx-auto px-4 py-12">
      <article class="max-w-6xl mx-auto">
        <!-- Pembuka -->
        <div class="prose prose-lg max-w-none mb-12">
          <p class="text-background leading-relaxed text-lg text-justify">

          </p>
        </div>

        <!-- Sections -->
        <div class="space-y-12">
          <section>
            <h2 class="text-3xl font-bold text-background mb-6">.</h2>
            <div class="prose prose-lg max-w-none text-gray-700">
              <p class="text-lg leading-relaxed text-justify">

              </p>
            </div>
          </section>

        </div>

          <!-- Kesimpulan -->
          <div class="bg-secondary p-8 rounded-lg mt-16">
            <h3 class="text-2xl font-bold text-background mb-4">Kesimpulan</h3>
            <p class="text-background text-lg leading-relaxed text-justify">

            </p>
          </div>
      </article>
    </main>

    <!-- Action Buttons -->
    <div class="border-t border-gray-200 mt-16 py-12">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto flex flex-col sm:flex-row gap-6 justify-center items-center">
          <router-link
              to="/tips"
              class="bg-primary text-white px-8 py-4 rounded-full hover:bg-background transition duration-300 font-semibold text-lg flex items-center"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Kembali ke Halaman Tips
          </router-link>
          <button
              @click="shareArticle"
              class="bg-accent text-background px-8 py-4 rounded-full hover:bg-secondary transition duration-300 font-semibold text-lg flex items-center"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
            </svg>
            Bagikan Artikel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const shareArticle = () => {
  if (navigator.share) {
    navigator.share({
      title: 'Hemat Energi Listrik - EcoTopia Sphere',
      text: 'Pelajari strategi hemat energi listrik untuk lingkungan yang berkelanjutan',
      url: window.location.href
    })
  } else {
    // Fallback untuk browser yang tidak support Web Share API
    navigator.clipboard.writeText(window.location.href)
    alert('Link artikel telah disalin ke clipboard!')
  }
}
</script>