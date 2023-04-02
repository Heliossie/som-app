<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'


import { ref, watchEffect } from 'vue'

const isDarkMode = ref(false)

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
}

const themeClass = ref('light-mode')

watchEffect(() => {
  if (isDarkMode.value) {
    document.body.classList.add('dark-mode')
    document.body.classList.remove('light-mode')
    themeClass.value = 'dark-mode'
  } else {
    document.body.classList.add('light-mode')
    document.body.classList.remove('dark-mode')
    themeClass.value = 'light-mode'
  }
})

</script>

<template>
  <div :class="[themeClass]">
    <header>

      <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

      <div class="wrapper">
        <!-- <HelloWorld msg="You did it!" /> -->

        <nav>
          <RouterLink to="/">Home</RouterLink>
          <Router-link to="/child">Enfants</Router-link>
          <Router-link to="/stats">Statistiques</Router-link>
          <RouterLink to="/about">About</RouterLink>
        </nav>

      </div>
      <div class="theme-toggle" @click="toggleTheme">
      <button class="butMoon" v-if="isDarkMode">🌜</button>
      <button class="butSun" v-else>🌞</button>
    </div>
    </header>

    <RouterView />
  </div>
</template>

<style>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

/* Mode sombre */
body.dark-mode {
  background-color: #1a1a1a !important;
  color: #f1f1f1 !important;
}

/* Mode clair */
body.light-mode {
  background-color: #f1f1f1 !important;
  color: #1a1a1a !important;
}


.theme-toggle {
  cursor: pointer;
  font-size: 24px;
}

.theme-toggle button {
  transition: transform 0.3s ease-in-out;
}

.theme-toggle button.batMoon {
  color: #f1c40f;
}

.theme-toggle button.batSun {
  color: #f39c12;
}

.dark-mode .theme-toggle button.batMoon {
  transform: rotate(-90deg);
}

.light-mode .theme-toggle button.batSun {
  transform: rotate(90deg);
}
</style>
