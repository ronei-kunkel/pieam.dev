<script setup lang="ts">
import { ref } from 'vue';
import { PieamApi } from '@/apis/PieamApi';
import { GoogleClientService } from '@/services/GoogleClientService';
import { onMounted } from 'vue';
import router from '@/router';

const pieamApi = new PieamApi();
const googleClient = new GoogleClientService();
const clientId = googleClient.getClientId();

const googleLoginBtn = ref(null);
const maintenance = ref(false);

interface CredentialResponse {
  credential: string;
}

const handleCredentialResponse = async (credentialResponse: CredentialResponse) => {
  const loginResponse = await pieamApi.login(credentialResponse.credential);
  console.log(loginResponse);

  if (loginResponse.status === 200) {
    router.replace({ name: 'home' });
  }
}

onMounted(() => {

  // @see /index.html
  const googleScript = document.getElementById('googleScript') as HTMLScriptElement;

  // @ts-ignore
  const GoogleClient: any = window.google;

  if (!GoogleClient) {
    maintenance.value = true;
  }

  if (GoogleClient) {
    GoogleClient.accounts.id.initialize({
      client_id: clientId,
      callback: handleCredentialResponse,
      ux_mode: 'popup',
      cancel_on_tap_outside: false
    });

    GoogleClient.accounts.id.renderButton(
      googleLoginBtn.value, {
      text: 'continue_with',
      size: 'large',
      width: '250',
      theme: 'filled_black',
      logo_alignment: 'left'
    });
  }

  googleScript.onerror = () => {
    maintenance.value = true;
  }
  googleScript.onabort = () => {
    maintenance.value = true;
  }

});

const h1 = 'Pieam.dev';
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
                <img src="/images/maximalfocus-HakTxidk36I-unsplash.jpg"
                  alt="Foto de <a href='https://unsplash.com/pt-br/@maximalfocus?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Maximalfocus</a> na <a href='https://unsplash.com/pt-br/fotografias/ilustracao-da-luz-preta-e-vermelha-HakTxidk36I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Unsplash</a>"
                  class="img-fluid mt-1" loading="lazy" />
              </div>
              <div class="form col-md-6 col-lg-6 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">
                  <div class="d-flex flex-column align-items-center mb-3 pb-1">
                    <h1 class="h1 fw-bold mb-3">{{ h1 }}</h1>

                    <div :hidden="maintenance" ref="googleLoginBtn"></div>

                    <p :hidden="!maintenance">Disabled For Maintenance</p>

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
  overflow-y: visible;
}

.img-fluid {
  border-radius: 1rem;
  transform: rotate(8deg);
  margin-bottom: -1rem;
}

.form {
  border-radius: 0 1rem 1rem 0;
}
</style>
