<template>
  <section class="restaurant-detail">
    <h2>{{ restaurant.name }}</h2>
    <p>{{ restaurant.description }}</p>

    <h3>Menu:</h3>
    <ul>
      <li v-for="(item, index) in restaurant.menu" :key="index">
        {{ item.name }} - Rp{{ item.price }}
        <button @click="addToCart(item)">Add to Cart</button>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from 'axios'
import { useCartStore } from '../stores/cart'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'

export default {
  setup() {
    const route = useRoute()
    const cart = useCartStore()
    const restaurant = ref({ menu: [] })

    onMounted(() => {
      axios.get(`http://localhost:3000/restaurants/${route.params.id}`)
        .then(res => restaurant.value = res.data)
        .catch(err => console.error(err))
    })

    function addToCart(item) {
      cart.addItem(item)
      alert(`${item.name} ditambahkan ke keranjang.`)
    }

    return { restaurant, addToCart }
  }
}
</script>

<style scoped>
.restaurant-detail {
  max-width: 600px;
  margin: 30px auto;
}
button {
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
