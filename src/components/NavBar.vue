<script setup lang="ts">
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
  <NavigationMenu :class="navigationMenuTriggerStyle()" class="flex items-center rounded-none justify-center min-w-full text-zinc-900 border-y-1 border-zinc-600 bg">
    <NavigationMenuList class="gap-6">

      <NavigationMenuItem>
        <NavigationMenuLink>
          <RouterLink class="py-2 px-4 rounded-md" to="/my-wraps" replace>My Wraps</RouterLink>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink>
          <RouterLink class="py-2 px-4 rounded-md" to="/top-artists" replace>Top Artists</RouterLink>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink>
          <RouterLink class="py-2 px-4 rounded-md" to="/friends" replace>Friends</RouterLink>
        </NavigationMenuLink>
      </NavigationMenuItem>

    </NavigationMenuList>
  </NavigationMenu>
</template>

