<template>
  <main class="relative flex-center">
    <div class="h-full absolute top-0 left-0 w-35% bg-deep-primary"></div>
    <div class="h-600px z-1 w-720px flex">
      <ProfileCard class="flex-1" />
      <div class="flex-1 h-full flex-col px-36px py-60px">
        <div class="flex-grow"></div>
        <div class="h-40px w-full flex items-center justify-around">
          <div class="profile-button" @click="$router.push(Route.resume)">Resume</div>
          <div class="profile-button" @click="$router.push(Route.projects)">Projects</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import ProfileCard from '@/components/ProfileCard.vue'
import { Route } from '@/router/route'
</script>
<style scoped>
.profile-button {
  @apply w-120px rounded-full h-40px flex-center cursor-pointer border-1px hover:bg-emphasis hover:text-white hover:border-0;
}
</style>
