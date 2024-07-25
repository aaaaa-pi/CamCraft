<template>
  <Suspense>
    <main class="relative group" @contextmenu="quit">
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
        <InnerShadowTopLeft
          v-if="config.page == 'camera'"
          theme="outline"
          size="24"
          class="absolute left-1/2 -translate-x-1/2 mt-3 bottom-3 text-white opacity-80 cursor-pointer z-10"
          @click="config.round = !config.round"
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
import { Setting as SettingIcon, CameraFive, InnerShadowTopLeft } from '@icon-park/vue-next'
import Camera from '@renderer/components/Camera.vue'
import Setting from '@renderer/components/Setting.vue'
import { useConfigStore } from '@renderer/stores/useConfigStore'
import useDrag from '@renderer/composables/useDrag'
const { config } = useConfigStore()
//拖拽窗口
const { drag } = useDrag()
drag.run()

const quit = () => window.api.quit()
</script>

<style lang="scss" scoped></style>
