<script setup lang="ts">
import { pieamApiService } from '@/services/pieamApiService';
import { googleClientService } from '@/services/googleClientService';
import { onMounted } from 'vue';

const pieamApi = new pieamApiService();
const googleClient = new googleClientService();

const clientId = googleClient.getClientId();
const loginUri = pieamApi.getLoginRoute();

onMounted(() => {
  const script = document.createElement("script");
  script.src = pieamApi.getGsiClientRoute();
  script.async = true;
  document.head.appendChild(script);
});

const span = 'Pieam.dev';
const p = 'You stay logged for next 10 days';
</script>

<template>
  <section class="vh-100">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="card">
            <div class="row g-0">
              <div class="img col-md-6 col-lg-6 d-none d-md-block">
                <img src="@/assets/images/maximalfocus-HakTxidk36I-unsplash.jpg"
                  alt="Foto de <a href='https://unsplash.com/pt-br/@maximalfocus?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Maximalfocus</a> na <a href='https://unsplash.com/pt-br/fotografias/ilustracao-da-luz-preta-e-vermelha-HakTxidk36I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Unsplash</a>"
                  class="img-fluid"
                />
              </div>
              <div class="form col-md-6 col-lg-6 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">
                  <div class="d-flex flex-column align-items-center mb-3 pb-1">
                    <span class="h1 fw-bold mb-3">{{ span }}</span>
                    <div id="g_id_onload"
                      :data-client_id="clientId"
                      :data-login_uri="loginUri"
                      data-auto_prompt="false">
                    </div>
                    <div class="g_id_signin" data-type="standard" data-size="large" data-theme="filled_black"
                      data-text="continue_with" data-shape="rectangular" data-logo_alignment="left">
                    </div>
                    <p class="text-secondary mt-1">{{ p }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card {
  border: 1px solid lightgray;
  border-radius: 1rem;
}
.img-fluid {
  border-radius: 1rem 0 0 1rem;
}
.form {
  border-radius: 0 1rem 1rem 0;
}
</style>
