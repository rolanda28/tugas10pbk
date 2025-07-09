import { defineStore } from 'pinia'
import api from '../api/axios'

export const useRestaurantStore = defineStore('restaurant', {
  state: () => ({
    list: [],
    loading: false,
    error: ''
  }),
  actions: {
    async fetchAll() {
      this.loading = true
      try {
        const res = await api.get('/restaurants')
        this.list = res.data
      } catch (err) {
        this.error = 'Gagal memuat restoran: ' + err.message
      } finally {
        this.loading = false
      }
    },
    async addRestaurant(data) {
      await api.post('/restaurants', data)
      await this.fetchAll()
    },
    async deleteRestaurant(id) {
      await api.delete(`/restaurants/${id}`)
      await this.fetchAll()
    }
  }
})
