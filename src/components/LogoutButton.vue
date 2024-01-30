<script setup lang="ts">
import { ref } from 'vue';
import { pieamApiService } from '@/services/pieamApiService';

const loading = ref(false);

const apiService = new pieamApiService();

const fazerRequisicao = async () => {
  if (loading.value) {
    return;
  }

  loading.value = true;

  try {
    const apiResponse = await apiService.revokeAccess();
    console.log(apiResponse.data);
  } catch (error) {
    console.error('Erro na requisição:', error);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <button @click="fazerRequisicao" :disabled="loading">
    {{ loading ? '...' : 'Faça logout' }}
  </button>
</template>

<style scoped>
</style>
