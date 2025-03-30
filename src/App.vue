<script setup lang="ts">

</script>

<template>
  <div>
    <nav style="font-size: x-large;">
      <router-link to="/">Main</router-link> |
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>

</template>

