import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore(
  'config',
  () => {
    const config = ref({
      deviceId: '',
      page: 'camera',
      borderWidth: '10px',
      borderColor: 'red',
      round: false
    })

    const updateConfig = () => {}

    return { config, updateConfig }
  },
  {
    persist: true
  }
)
