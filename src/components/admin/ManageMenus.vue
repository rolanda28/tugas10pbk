<template>
  <div>
    <h2>Kelola Menu</h2>
    
    <!-- Contoh daftar menu (dummy) -->
    <ul>
      <li>Nasi Goreng - Rp20.000 <button>Edit</button> <button>Hapus</button></li>
      <li>Mie Ayam - Rp18.000 <button>Edit</button> <button>Hapus</button></li>
    </ul>

    <!-- Tambah menu baru -->
    <h3>Tambah Menu Baru</h3>
    <form @submit.prevent="addMenu">
      <input v-model="newMenu.name" placeholder="Nama Menu" required />
      <input v-model.number="newMenu.price" placeholder="Harga" type="number" required />
      <button type="submit">Tambah</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ManageMenus',
  data() {
    return {
      newMenu: {
        name: '',
        price: null
      }
    }
  },
  methods: {
    addMenu() {
      alert(`Menu baru ditambahkan: ${this.newMenu.name} - Rp${this.newMenu.price}`);
      // Reset input
      this.newMenu.name = '';
      this.newMenu.price = null;
    }
  }
}
</script>

<style scoped>
h2, h3 {
  color: #2c3e50;
  margin-bottom: 10px;
}

form {
  margin-top: 10px;
}

input {
  margin: 5px;
  padding: 5px;
}

button {
  margin-left: 5px;
}
</style>
