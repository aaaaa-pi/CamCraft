<template>
  <Suspense>
    <main class="relative group">
      <section>
        <SettingIcon
          v-if="config.page == 'camera'"
          theme="outline"
          size="24"
          class="absolute left-1/2 -translate-x-1/2 mt-3 text-white opacity-80 cursor-pointer z-10"
          @click="config.page = 'setting'"
        />
        <CameraFive
          v-if="config.page == 'setting'"
          theme="outline"
          size="24"
          class="absolute left-1/2 -translate-x-1/2 mt-3 text-white opacity-80 cursor-pointer z-10"
          @click="config.page = 'camera'"
        />
      </section>
      <section>
        <Camera v-if="config.page === 'camera'" />
        <Setting v-else />
      </section>
    </main>
  </Suspense>
</template>

<script setup lang="ts">
import { Setting as SettingIcon, CameraFive } from '@icon-park/vue-next'
import Camera from '@renderer/components/Camera.vue'
import Setting from '@renderer/components/Setting.vue'
import { useConfigStore } from '@renderer/stores/useConfigStore'
const { config } = useConfigStore()
</script>

<style lang="scss" scoped></style>
