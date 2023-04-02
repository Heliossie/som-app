<script setup lang="ts">
import StatsContainer from '@/components/StatsContainer.vue';
</script>

<template>
   <StatsContainer /> 
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
}
</style>