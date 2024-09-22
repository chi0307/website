<template>
  <div class="w-100vw relative bg-white h-100vh">
    <header
      class="z-100 top-0 left-0 sticky w-full bg-white"
      :style="{
        height: headerHeight
      }"
    ></header>
    <RouterView
      class="w-full"
      :style="{
        height: `calc(100% - ${headerHeight})`
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

const headerHeight = '80px'
</script>
<style>
.flex-col {
  @apply flex;
}
</style>
