<template>
  <div class="flex-col bg-primary w-360px h-600px shadow-home-card">
    <div class="w-360px h-360px flex-center">
      <img
        src="/profile.jpeg"
        alt="profile-card"
        class="w-200px h-200px rounded-full object-cover"
      />
    </div>
    <div class="flex-grow flex-col items-center justify-between">
      <p class="text-2rem font-bold">Benson Wang</p>
      <p class="text-1rem font-bold">Full-Stack Engineer</p>
      <p></p>
    </div>
    <div class="h-60px bg-white w-full flex items-center justify-around px-32px text-32px">
      <div
        class="w-48px flex-center h-48px cursor-pointer hover:text-emphasis"
        v-for="(item, index) of socialMediaList"
        :key="index"
        @click="() => redirectNewWindow(item.redirectUrl)"
      >
        <i :class="item.iconClass" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { redirectNewWindow } from '@/utils/utils'
interface SocialMediaItem {
  iconClass: string
  redirectUrl: `https://${string}`
}
const socialMediaList: SocialMediaItem[] = [
  { iconClass: 'fa-brands fa-instagram', redirectUrl: 'https://www.instagram.com/benson0307' },
  { iconClass: 'fa-brands fa-github', redirectUrl: 'https://github.com/chi0307' },
  { iconClass: 'fa-brands fa-bitbucket', redirectUrl: 'https://bitbucket.org/junchi_0307' }
]
</script>
