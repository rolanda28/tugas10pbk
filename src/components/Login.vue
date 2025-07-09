<template>
  <section>
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <label>Email:</label><br />
      <input v-model="email" type="email" /><br /><br />
      <label>Password:</label><br />
      <input v-model="password" type="password" /><br /><br />
      <button type="submit">Masuk</button>
    </form>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      axios.get('http://localhost:3000/users', {
        params: { email: this.email, password: this.password }
      }).then(res => {
        if (res.data.length > 0) {
          localStorage.setItem('user', JSON.stringify(res.data[0]))
          this.$router.push('/')
        } else {
          alert('Email atau password salah!')
        }
      }).catch(err => console.error(err))
    }
  }
}
</script>
