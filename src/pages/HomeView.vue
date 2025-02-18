<script setup lang="ts">
import SongChart from '@/components/SongChart.vue';
</script>

<template>

    <div class="flex flex-col items-center pt-20 px-[20%]">
        <h1 class="text-6xl font-extrabold">My Top Songs</h1>
        <SongChart class="mt-20" filter="" />

    </div>
</template>