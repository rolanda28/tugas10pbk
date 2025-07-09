<template>
  <section>
    <h2>Daftar Akun Baru</h2>
    <form @submit.prevent="register">
      <label>Nama:</label><br />
      <input v-model="name" type="text" /><br /><br />
      <label>Email:</label><br />
      <input v-model="email" type="email" /><br /><br />
      <label>Password:</label><br />
      <input v-model="password" type="password" /><br /><br />
      <button type="submit">Daftar</button>
    </form>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register() {
      axios.post('http://localhost:3000/users', {
        name: this.name,
        email: this.email,
        password: this.password
      }).then(() => {
        alert('Registrasi berhasil! Silakan login.')
        this.$router.push('/login')
      }).catch(err => {
        alert('Gagal mendaftar')
        console.error(err)
      })
    }
  }
}
</script>