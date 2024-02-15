<script setup lang="ts">

defineProps({
  user: Object
});

</script>

<template>
  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
      <img src="/favicon.ico">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">Pieam.dev</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">
            Home
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.offcanvas {
  border-radius: 0px 15px 15px 0;
  overflow: hidden;
}
.offcanvas-header {
  box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.1);
}
.offcanvas-body {
  padding-right: 0;
  padding-left: 0;
}
.nav-link {
  padding-left: 2rem;
}
.nav-link:hover {
  box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.1);
}
</style>
