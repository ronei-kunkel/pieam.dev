<script setup lang="ts">
import LogoutButtonVue from '@/components/LogoutButton.vue';
</script>

<template>
  <div>
    <nav class="navbar bg-primary" data-bs-theme="dark">
      <div class="container-fluid">
        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample">
          <span class="navbar-toggler-icon primary"></span>
        </button>
        <router-link class="navbar-brand" to="">
          Pieam.dev
        </router-link>
        <div class="d-flex" id="navbarColor01">
          <form class="d-flex">
            <input class="form-control me-sm-2" type="search" placeholder="Search">
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">

        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Pieam.dev</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link active" to="">
              Home
            </router-link>
          </li>
        </ul>
        <hr>
        <LogoutButtonVue />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
