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
  <span :class="loading ? 'leaving' : 'logout'" @click="logout" :disabled="loading">
    {{ loading ? 'Leaving' : 'Logout' }}
  </span>
</template>

<style scoped>
span {
  padding: .5rem;
  border-radius: 5px;
}

span:hover {
  background-color: gray;
}

span.leaving {
  cursor: progress;
}

span.logout {
  cursor: pointer;
}
</style>
