<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import NavBar from './components/NavBar.vue';

</script>

<template>
    <Header />
    <NavBar />
    <RouterView />
</template>
