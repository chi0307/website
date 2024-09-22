<template>
  <div class="w-100vw relative bg-white h-100vh">
    <header
      class="z-100 top-0 left-0 sticky w-full bg-white px-64px flex items-center justify-between"
      :style="{
        height: headerHeight
      }"
    >
      <p class="text-2rem font-bold">Website</p>
      <div class="flex-center gap-16px">
        <p
          v-for="(item, index) of pageList"
          :key="index"
          class="cursor-pointer"
          @click="$router.push(item.route)"
          :class="{
            'text-emphasis': checkIsCurrentPage(item.route)
          }"
        >
          {{ item.title }}
        </p>
      </div>
    </header>
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
import { Route } from './router/route'
import { useRoute } from 'vue-router'

const route = useRoute()

const headerHeight = '80px'

interface PageItem {
  title: string
  route: Route
}
const pageList: PageItem[] = [
  {
    title: 'About Me',
    route: Route.home
  },
  {
    title: 'Resume',
    route: Route.resume
  },
  {
    title: 'Projects',
    route: Route.projects
  }
]

function checkIsCurrentPage(r: Route): boolean {
  return route.path.includes(r)
}
</script>
<style>
.flex-col {
  @apply flex;
}
</style>
