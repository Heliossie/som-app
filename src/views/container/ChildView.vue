<script setup lang="ts">
import ChildContainer from '../../components/ChildContainer.vue';
</script>

<template>
<ChildContainer />
</template>


<style>
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