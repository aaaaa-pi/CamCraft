import { defineStore } from 'pinia'
import { ref } from 'vue'

export const windowSize = defineStore('windowSize', () => {
  const size = ref({
    width: 0,
    height: 0
  })

  return { size }
})
