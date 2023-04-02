<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>


<style scoped>

/* Mode sombre */
body.dark-mode {
  background-color: #1a1a1a;
  color: #f1f1f1;
}

/* Mode clair */
body.light-mode {
  background-color: #f1f1f1;
  color: #1a1a1a;
}</style>