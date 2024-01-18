<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="app">
    <div id="nav">
      <RouterLink to="/">Home</RouterLink> | <RouterLink to="/about">Abount</RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<style scoped></style>
