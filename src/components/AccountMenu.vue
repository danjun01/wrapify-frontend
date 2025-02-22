<script setup lang='ts'>
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

const handleLogout = () => {
  authStore.logout();
}

const pfp = authStore.profile_image_url as string;
console.log("pfp url:", pfp)
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger class="flex gap-3">
          <Avatar>
            <AvatarImage :src="pfp" alt="@pfp" />
            <AvatarFallback>Account</AvatarFallback>
          </Avatar>
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul>
            <li>
              <NavigationMenuLink >
                <a>
                  <div>Account</div>
                </a>
              </NavigationMenuLink>
            </li>

            <li>
              <NavigationMenuLink>
                <div @click="handleLogout">Logout</div>
              </NavigationMenuLink>
            </li>

          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>