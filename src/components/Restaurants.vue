<template>
  <section>
    <h2>Daftar Restoran</h2>

    <div v-if="loading">Memuat data restoran...</div>
    <div v-else-if="error">Gagal memuat restoran: {{ error }}</div>

    <ul v-else>
      <li v-for="resto in restaurants" :key="resto.id">
        <h3>{{ resto.name }}</h3>
        <p><strong>Lokasi:</strong> {{ resto.location }}</p>
        <p><strong>Deskripsi:</strong> {{ resto.description }}</p>
        <router-link :to="`/restaurants/${resto.id}`">Lihat Menu</router-link>
        <hr />
      </li>
    </ul>
  </section>
</template>

<script>
import { onMounted, ref } from 'vue'
import api from '../api/axios' // axios instance dengan baseURL

export default {
  setup() {
    const restaurants = ref([])
    const loading = ref(true)
    const error = ref(null)

    const fetchRestaurants = async () => {
      try {
        const res = await api.get('/restaurants')
        restaurants.value = res.data
      } catch (err) {
        error.value = err.message
      } finally {
        loading.value = false
      }
    }

    onMounted(fetchRestaurants)

    return { restaurants, loading, error }
  }
}
</script>
