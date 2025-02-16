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
  <NavigationMenu :class="navigationMenuTriggerStyle()" class="rounded-md dark:text-white">
    <NavigationMenuList class="gap-6">

      <NavigationMenuItem>
        <NavigationMenuLink>
          <RouterLink class="py-2 px-4 rounded-md" to="/#about" replace>About</RouterLink>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink>
          <RouterLink class="py-2 px-4 rounded-md" to="/#about" replace>About</RouterLink>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink>
          <RouterLink class="py-2 px-4 rounded-md" to="/#about" replace>About</RouterLink>
        </NavigationMenuLink>
      </NavigationMenuItem>

    </NavigationMenuList>
  </NavigationMenu>
</template>

