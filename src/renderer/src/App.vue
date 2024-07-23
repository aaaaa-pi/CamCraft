<template>
  <Suspense>
    <main class="relative group">
      <section>
        <SettingIcon
          v-if="page == 'camera'"
          theme="outline"
          size="24"
          class="absolute left-1/2 -translate-x-1/2 mt-3 text-white opacity-80 cursor-pointer z-10"
          @click="page = 'setting'"
        />
        <CameraFive
          v-if="page == 'setting'"
          theme="outline"
          size="24"
          class="absolute left-1/2 -translate-x-1/2 mt-3 text-white opacity-80 cursor-pointer z-10"
          @click="page = 'camera'"
        />
      </section>
      <section>
        <Camera v-if="page === 'camera'" />
        <Setting v-else />
      </section>
    </main>
  </Suspense>
</template>

<script setup lang="ts">
import { Setting as SettingIcon, CameraFive } from '@icon-park/vue-next'
import { ref } from 'vue'
import Camera from '@renderer/components/Camera.vue'
import Setting from '@renderer/components/Setting.vue'
const page = ref('setting')
</script>

<style lang="scss" scoped></style>
