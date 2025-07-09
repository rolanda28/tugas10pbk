import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({ items: [] }),
  getters: {
    totalPrice: state => state.items.reduce((t, i) => t + i.price * i.quantity, 0)
  },
  actions: {
    addItem(item) {
      const exist = this.items.find(i => i.name === item.name)
      if (exist) exist.quantity++
      else this.items.push({ ...item, quantity: 1 })
    },
    removeItem(index) {
      this.items.splice(index, 1)
    },
    clearCart() {
      this.items = []
    }
  }
})
