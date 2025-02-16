<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';

</script>

<template>
    <Header class="sticky top-0 z-50 bg-transparent"/>
    <RouterView />
</template>
