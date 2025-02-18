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
</script>

<template>
  <div class="flex items-center justify-between w-full bg-zinc-900 text-white py-5 pl-20 pr-6">
    <div>
      <RouterLink to="/" replace>
        <h1 class="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">Wrapify</h1>
      </RouterLink>
    </div>
    <div class="flex items-center justify-start gap-10">
      <NavigationMenu :class="navigationMenuTriggerStyle()" class="text-white">
        <NavigationMenuList class="gap-6">

          <NavigationMenuItem>
            <NavigationMenuLink>
              <RouterLink class="py-2 px-4 hover:underline" to="/login" replace>Login</RouterLink>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink>
              <RouterLink class="py-2 px-4 hover:underline" to="/register" replace>Sign Up</RouterLink>
            </NavigationMenuLink>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </div>
</template>