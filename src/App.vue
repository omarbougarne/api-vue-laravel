<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    

    <div class="wrapper">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <RouterLink class="navbar-brand" to="#">Navbar</RouterLink>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/about">About</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/bus">Bus</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  </header>

  <RouterView />
</template>
