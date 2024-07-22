<template>
  <main class="w-screen h-screen flex">
    <video class="object-cover"></video>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const constraints = {
    audio: false,
    video: true
  }

  const video = document.querySelector('video')!
  navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
    video.srcObject = stream
    video.play()
  })
})
</script>
