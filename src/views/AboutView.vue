<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

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
