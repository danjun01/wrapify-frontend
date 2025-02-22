<script setup lang="ts">
import { RouterLink } from 'vue-router';
import OAuthButton from './OAuthButton.vue';
import { useAuthStore } from '@/stores/auth';
import AccountMenu from './AccountMenu.vue';

const authStore = useAuthStore();

</script>

<template>
  <div class="flex items-center justify-between w-full bg-zinc-900 text-white py-5 pl-20 pr-6">
      <RouterLink to="/" replace>
        <h1 class="font-bold text-3xl">Wrapify</h1>
      </RouterLink>

      <OAuthButton v-if="!authStore.isAuthenticated" />
      <AccountMenu v-else />
  </div>
</template>