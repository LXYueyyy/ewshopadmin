
<template>
  <router-view></router-view>

  <router-link to="/">Go to home</router-link>
  <router-link to="/login">Go to login</router-link>
</template>

<script setup lang="ts">
  // import {NButton} from 'naive-ui'
</script>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
