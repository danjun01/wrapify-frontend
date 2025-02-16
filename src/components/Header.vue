<script setup lang="ts">
import NavBar from './NavBar.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="flex items-center justify-between w-full dark:text-white py-10">
    <div>
      <RouterLink to="/" replace>
        <h1 class="font-bold text-green-800">Wrapify</h1>
      </RouterLink>
    </div>
    <div class="flex items-center justify-start gap-10">
      <NavBar />
    </div>
  </div>
</template>