<template>
  <div class="profile-container">
    <div class="profile-content">

      <div class="text-section">
        <h1>Christian Imanuel Admojo</h1>
        <p>NIM: 11241022</p>
        <p>Prodi: Informatika</p>
        <p>Kampus: Institut Teknologi Kalimantan</p>
      </div>

      <div class="image-section">
        <img src="@/assets/beranda.jpg" alt="Foto">
      </div>
    </div>
  </div>

  <div class="min-h-screen bg-white">
    <main class="container mx-auto px-4 py-12">
      <div class="space-y-12">
        <section>
          <div class="prose prose-lg max-w-none text-primary">
            <p class="text-lg leading-relaxed text-justify">
              Saya Christian Imanuel Admojo, seorang mahasiswa informatika di Institut Teknologi Kalimantan
            </p>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<style scoped>
.profile-container {
  width: 100%;
}

.profile-content {
  display: flex;
  align-items: center;
  gap: 40px;
}

.text-section {
  flex: 1;
}

.image-section {
  flex-shrink: 0;
}

.image-section img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}

/* Responsive */
@media (max-width: 768px) {
  .profile-content {
    flex-direction: column;
    text-align: center;
  }
}
</style>
<script setup lang="ts">
</script>