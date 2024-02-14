<script setup lang="ts">
import { PieamApi } from '@/apis/PieamApi';
import LogoutButton from '@/components/LogoutButton.vue';
import SideOffCanvasVue from '@/components/SideOffCanvas.vue';
import router from '@/router';
import { SessionVerificationService } from '@/services/SessionVerificationService';
import { onBeforeMount, ref } from 'vue';

const sessionVerification = new SessionVerificationService();
const pieamApi = new PieamApi();

const user = ref({
  id: 0,
  name: '',
  last_name: '',
  email: '',
  image_url: ''
});

onBeforeMount(() => {
  console.log('verificando sessão antes de montar home');

  if (!sessionVerification.validateSession()) {
    router.replace({ name: 'login' });
  }

  if(sessionVerification.validateSession()) {
    pieamApi.getUserInfo().then((apiResponse) => {
  
      user.value = apiResponse.data
      if (apiResponse.status === 401) {
        router.replace({ name: 'login' });
      }
    }).catch(() => {
      router.replace({ name: 'login' });
    })
  }
});

</script>

<template>
  <div>
    <nav class="navbar bg-primary" data-bs-theme="dark">
      <div class="container-fluid">
        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample">
          <span class="navbar-toggler-icon primary"></span>
        </button>
        <!-- <router-link class="navbar-brand" to="">
          Pieam.dev
        </router-link> -->

        <div class="btn-group">
          <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown"
            aria-expanded="false" data-bs-reference="parent">
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <img class="user-image" :src="user.image_url" width="40">
          <ul class="dropdown-menu">
            <li><a class="dropdown-item disabled">Configuration</a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li> <LogoutButton class="dropdown-item" /> </li>
          </ul>
        </div>
      </div>
    </nav>
    <SideOffCanvasVue :user="user" />
  </div>
</template>

<style scoped>
.user-image {
  border-radius: 0 5px 5px 0;
}
.dropdown-menu {
  margin-left: -6.5rem;
}
</style>
