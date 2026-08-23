<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center bg-grey-2 q-pa-md">
        <q-card class="full-width max-w-sm q-pa-md flat bordered">
          <q-card-section class="text-center">
            <div class="text-h5 text-bold text-primary">BookSwap</div>
            <div class="text-subtitle2 text-grey-7">Sign in to continue</div>
          </q-card-section>

          <q-card-section class="q-gutter-md">
            <q-input v-model="email" label="Email" type="email" outlined dense />
            <q-input v-model="password" label="Password" type="password" outlined dense />
          </q-card-section>

          <q-card-actions class="q-px-md">
            <q-btn
              label="Login"
              color="primary"
              class="full-width"
              unelevated
              @click="handleLogin"
            />
          </q-card-actions>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');

const handleLogin = async (): Promise<void> => {
  await router.push({ name: 'home' });
};
</script>
