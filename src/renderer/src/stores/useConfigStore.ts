import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore('config', () => {
  const config = ref({
    deviceId: '',
    page: 'camera'
  })

  const updateConfig = () => {}

  return { config, updateConfig }
})
