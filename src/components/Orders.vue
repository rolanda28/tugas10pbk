<template>
  <section>
    <h2>Riwayat Pesanan</h2>
    <ul v-if="orders.length">
      <li v-for="(order, index) in orders" :key="index">
        <strong>Pesanan {{ index + 1 }}</strong> - {{ new Date(order.date).toLocaleString() }}
        <ul>
          <li v-for="item in order.items" :key="item.name">
            {{ item.name }} x {{ item.quantity }} - Rp{{ item.price }}
          </li>
        </ul>
      </li>
    </ul>
    <p v-else>Belum ada pesanan.</p>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return { orders: [] }
  },
  mounted() {
    axios.get('http://localhost:3000/orders')
      .then(res => { this.orders = res.data })
      .catch(err => console.error(err))
  }
}
</script>

