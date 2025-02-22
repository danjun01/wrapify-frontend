<script setup lang="ts">
import SongChart from '@/components/SongChart.vue';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

</script>

<template>

    <div v-if="authStore.isAuthenticated" class="flex flex-col items-center pt-20 px-[20%]">
        <h1 class="text-6xl font-extrabold">My Top Songs</h1>
        <SongChart class="mt-20" filter="" />

    </div>
    <div v-else class="flex flex-col items-center pt-20 px-[20%]">
        Else
    </div>
</template>