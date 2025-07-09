<template>
  <div>
    <h2>Kelola Pesanan</h2>

    <table>
      <thead>
        <tr>
          <th>ID Pesanan</th>
          <th>Nama Pelanggan</th>
          <th>Menu</th>
          <th>Status</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>{{ order.id }}</td>
          <td>{{ order.customer }}</td>
          <td>{{ order.items.join(', ') }}</td>
          <td>{{ order.status }}</td>
          <td>
            <select v-model="order.status" @change="updateStatus(order.id, order.status)">
              <option>Diproses</option>
              <option>Dikirim</option>
              <option>Selesai</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ManageOrders',
  data() {
    return {
      orders: [
        {
          id: 'ORD001',
          customer: 'Jonathan',
          items: ['Nasi Goreng', 'Teh Manis'],
          status: 'Diproses'
        },
        {
          id: 'ORD002',
          customer: 'Sarah',
          items: ['Mie Ayam'],
          status: 'Dikirim'
        }
      ]
    }
  },
  methods: {
    updateStatus(id, newStatus) {
      alert(`Status pesanan ${id} diperbarui menjadi: ${newStatus}`);
      // Di sini kamu bisa tambahkan API call ke backend
    }
  }
}
</script>

<style scoped>
h2 {
  margin-bottom: 15px;
  color: #2c3e50;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th, td {
  padding: 10px;
  border: 1px solid #ccc;
}

select {
  padding: 5px;
}
</style>
