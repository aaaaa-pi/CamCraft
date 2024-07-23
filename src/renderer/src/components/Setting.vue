<template>
  <main class="bg-[#2c3e50] w-screen h-screen p-5 flex flex-col gap-5 py-10">
    <h2 class="text-gray-50 text-center text-sm opacity-70">参数设置</h2>
    <el-select v-model="deviceId" placeholder="选择摄像头" clearable filterable>
      <el-option
        v-for="item in cameras"
        :key="item.deviceId"
        :label="item.label"
        :value="item.deviceId"
        size="large"
      >
      </el-option>
    </el-select>
    <el-button @click="onSubmit">保存</el-button>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const devices = await navigator.mediaDevices.enumerateDevices()
const cameras = devices.filter((d) => d.kind.includes('video'))
const deviceId = ref('')
const onSubmit = () => {}
</script>

<style scoped></style>
