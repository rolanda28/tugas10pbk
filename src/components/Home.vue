<template>
  <section class="home">
    <h2>Selamat Datang di <span class="highlight">Food Order App!</span> 🍽️</h2>
    <p>Pesan makanan favoritmu dengan mudah dan cepat dari restoran terbaik di sekitarmu.</p>

    <router-link to="/restaurants" class="btn">Lihat Restoran</router-link>
  </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}

.highlight {
  color: #28a745;
}

.btn {
  display: inline-block;
  margin-top: 20px;
  background-color: #28a745;
  color: white;
  padding: 12px 24px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 8px;
  transition: background-color 0.2s ease;
}

.btn:hover {
  background-color: #218838;
}
</style>
