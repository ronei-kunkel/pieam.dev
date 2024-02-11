<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
import { PieamApi } from '@/apis/PieamApi';

const loading = ref(false);

const pieamApi = new PieamApi();

const logout = async () => {
  if (loading.value) {
    return;
  }

  loading.value = true;

  try {
    const apiResponse = await pieamApi.logout();
    console.log(apiResponse);
    if (apiResponse.status === 200) {
      router.replace({ name: 'login' });
    }
  } catch (error) {
    loading.value = false;
  }
};
</script>

<template>
  <button :class="loading ? 'leaving' : 'logout'" @click="logout" :disabled="loading">
    {{ loading ? 'Leaving' : 'Logout' }}
  </button>
</template>

<style scoped>
button.leaving {
  cursor: progress;
}

button.logout {
  cursor: pointer;
}
</style>
