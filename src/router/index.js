import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Restaurants from '../components/Restaurants.vue'
import RestaurantDetail from '../components/RestaurantDetail.vue'
import Cart from '../components/Cart.vue'
import Orders from '../components/Orders.vue'
import Profile from '../components/Profile.vue'
import AdminDashboard from '../components/admin/AdminDashboard.vue'
import ManageRestaurants from '../components/admin/ManageRestaurants.vue'
import ManageMenus from '../components/admin/ManageMenus.vue'
import ManageOrders from '../components/admin/ManageOrders.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/restaurants', name: 'Restaurants', component: Restaurants },
  { path: '/restaurants/:id', name: 'RestaurantDetail', component: RestaurantDetail },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/orders', name: 'Orders', component: Orders },
  { path: '/profile', name: 'Profile', component: Profile },
  {
    path: '/admin',
    component: AdminDashboard,
    children: [
      { path: '', redirect: '/admin/restaurants' },
      { path: 'restaurants', name: 'ManageRestaurants', component: ManageRestaurants },
      { path: 'menus', name: 'ManageMenus', component: ManageMenus },
      { path: 'orders', name: 'ManageOrders', component: ManageOrders }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
