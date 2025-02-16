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
          <RouterLink class="py-2 px-4 rounded-md" to="/wrap" replace>My Wrap</RouterLink>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink>
          <RouterLink class="bg-green-600 py-2 px-4 rounded-md" to="/login" replace>Login</RouterLink>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink>
          <RouterLink class="bg-green-600 py-2 px-4 rounded-md" to="/register" replace>Sign Up</RouterLink>
        </NavigationMenuLink>
      </NavigationMenuItem>

    </NavigationMenuList>
  </NavigationMenu>
</template>

