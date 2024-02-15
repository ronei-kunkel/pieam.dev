<script setup lang="ts">
import { PieamApi } from '@/apis/PieamApi';
import LogoutButton from '@/components/LogoutButton.vue';
import SideOffCanvasVue from '@/components/SideOffCanvas.vue';
import router from '@/router';
import { SessionVerificationService } from '@/services/SessionVerificationService';
import { ref } from 'vue';

const sessionVerification = new SessionVerificationService();
const pieamApi = new PieamApi();

if (!sessionVerification.validateSession()) {
  router.replace({ name: 'login' });
}

pieamApi.getUserInfo().then((apiResponse) => {

  if (apiResponse.status === 401) {
    router.replace({ name: 'login' });
  }

  user.value = apiResponse.data
}).catch(() => {
  router.replace({ name: 'login' });
})

const user = ref({
  id: 0,
  name: '',
  last_name: '',
  email: '',
  image_url: ''
});
</script>

<template>
  <div>
    <nav class="navbar" data-bs-theme="light">
      <div class="container-fluid">
        <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- <router-link class="navbar-brand" to="">
          Pieam.dev
        </router-link> -->

        <div class="btn-group dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown"
            aria-expanded="false" data-bs-reference="parent">
          <button class="btn">
            <img src="/favicon.ico" width="15">
          </button>
          <img class="user-image" :src="user.image_url" width="40">
          <ul class="dropdown-menu" data-bs-theme="light">
            <li><a class="dropdown-item disabled">Configuration</a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li>
              <LogoutButton class="dropdown-item" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <SideOffCanvasVue :user="user" />
  </div>
</template>

<style scoped>
.navbar{
  padding: .75rem 0 .75rem 0;
  box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.1);
}
.user-image {
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
.dropdown-toggle::after{
  border: 0;
}

.dropdown-menu {
  right: 10px;
  left: auto;
  box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.1);
  border: none;
}
button {
  border: none;
}
.btn {
  box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.1);
}
</style>
