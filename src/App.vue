<template>
  <div id="app">
    <header>
      <h1>Food Order App 🍔</h1>
      <nav>
        <router-link to="/" exact-active-class="active-link">Beranda</router-link>
        <router-link to="/restaurants" exact-active-class="active-link">Restoran</router-link>
        <router-link to="/cart" exact-active-class="active-link">Keranjang</router-link>
        <router-link to="/orders" exact-active-class="active-link">Pesanan</router-link>
        <router-link to="/profile" exact-active-class="active-link">Profil</router-link>
        <router-link to="/login" exact-active-class="active-link">Login</router-link>
        <router-link to="/register" exact-active-class="active-link">Register</router-link>
        <router-link to="/admin/restaurants" exact-active-class="active-link">Admin</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>
