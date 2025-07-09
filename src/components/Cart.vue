<template>
  <section>
    <h2>Keranjang Belanja</h2>
    <ul v-if="cart.items.length">
      <li v-for="(item, i) in cart.items" :key="i">
        {{ item.name }} - Rp{{ item.price }} x {{ item.quantity }}
        <button @click="cart.removeItem(i)">Hapus</button>
      </li>
    </ul>
    <p v-else>Keranjang kosong.</p>
    <p>Total: Rp{{ cart.totalPrice }}</p>
    <button v-if="cart.items.length" @click="checkout">Checkout</button>
  </section>
</template>

<script setup>
import { useCartStore } from '../stores/cart'
import axios from 'axios'
const cart = useCartStore()

function checkout() {
  axios.post('http://localhost:3000/orders', {
    items: cart.items,
    date: new Date().toISOString()
  }).then(() => {
    alert('Pesanan berhasil dibuat!')
    cart.clearCart()
  }).catch(err => {
    alert('Gagal checkout')
    console.error(err)
  })
}
</script>