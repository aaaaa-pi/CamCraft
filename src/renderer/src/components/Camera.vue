<template>
  <main
    class="w-screen h-screen flex"
    :class="{ 'rounded-full': config.round }"
    :style="`border: solid ${config.borderColor} ${config.borderWidth}`"
  >
    <video class="object-cover h-full" :class="{ 'rounded-full': config.round }"></video>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useConfigStore } from '@renderer/stores/useConfigStore'
const { config } = useConfigStore()

onMounted(() => {
  const constraints = {
    audio: false,
    video: { deviceId: config.deviceId, width: 1920, height: 1080 }
  } as MediaStreamConstraints

  const video = document.querySelector('video')!
  navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
    video.srcObject = stream
    video.play()
  })
})
</script>
