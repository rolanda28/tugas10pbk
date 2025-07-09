<template>
  <section>
    <h2>Kelola Restoran</h2>

    <!-- Form Tambah Restoran -->
    <form @submit.prevent="handleAdd">
      <input v-model="name" placeholder="Nama restoran" required />
      <input v-model="location" placeholder="Lokasi" required />
      <input v-model="description" placeholder="Deskripsi" required />
      <button type="submit">Tambah Restoran</button>
    </form>

    <hr />

    <!-- Daftar Restoran -->
    <ul>
      <li v-for="resto in store.list" :key="resto.id">
        <strong>{{ resto.name }}</strong> ({{ resto.location }})<br />
        <em>{{ resto.description }}</em><br />
        <button @click="store.deleteRestaurant(resto.id)">Hapus</button>
        <hr />
      </li>
    </ul>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRestaurantStore } from '../../stores/restaurant'

export default {
  setup() {
    const store = useRestaurantStore()
    const name = ref('')
    const location = ref('')
    const description = ref('')

    const handleAdd = async () => {
      const newData = {
        name: name.value,
        location: location.value,
        description: description.value,
        menu: [] // default menu kosong
      }
      await store.addRestaurant(newData)

      // Reset input
      name.value = ''
      location.value = ''
      description.value = ''
    }

    onMounted(() => {
      store.fetchAll()
    })

    return {
      store,
      name,
      location,
      description,
      handleAdd
    }
  }
}
</script>
