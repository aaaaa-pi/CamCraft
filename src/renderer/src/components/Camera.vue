<template>
  <main class="w-screen h-screen flex">
    <video class="object-cover h-full"></video>
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
