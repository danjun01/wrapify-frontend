<script setup lang="ts">
import { RouterLink } from 'vue-router';
import {
  NavigationMenu,
  // NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  // NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import OAuthButton from './OAuthButton.vue';
import { onBeforeMount, ref, watch } from 'vue';
</script>

<template>
  <div class="flex items-center justify-between w-full bg-zinc-900 text-white py-5 pl-20 pr-6">
      <RouterLink to="/" replace>
        <h1 class="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">Wrapify</h1>
      </RouterLink>

      <OAuthButton />

  </div>
</template>