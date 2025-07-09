<template>
  <section class="profile">
    <h2>Profil Pengguna</h2>

    <div v-if="user">
      <p><strong>Nama:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>

      <button @click="logout">Logout</button>
    </div>
    <div v-else>
      <p>Silakan login terlebih dahulu untuk melihat profil.</p>
      <router-link to="/login">Login</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      // Simulasi data user, bisa diganti dengan real login
      user: {
        name: 'John Doe',
        email: 'john@example.com'
      }
    }
  },
  methods: {
    logout() {
      alert('Kamu telah logout!');
      this.user = null;
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.profile {
  max-width: 400px;
  margin: 30px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

button {
  background-color: #dc3545;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
}

button:hover {
  background-color: #c82333;
}
</style>
