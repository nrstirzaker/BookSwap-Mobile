<template>
  <div class="full-width column items-center">
    <div class="full-width column q-gutter-y-md">
      <div>
        <div class="text-caption text-weight-bold text-grey-9 q-mb-xs">Email</div>
        <q-input
          v-model="email"
          placeholder="your.email@example.com"
          type="email"
          outlined
          dense
          no-error-icon
          class="custom-rounded-input"
        />
      </div>

      <div>
        <div class="text-caption text-weight-bold text-grey-9 q-mb-xs">Password</div>
        <q-input
          v-model="password"
          placeholder="••••••••"
          type="password"
          outlined
          dense
          no-error-icon
          class="custom-rounded-input"
        />
      </div>
    </div>

    <q-btn
      label="Sign In"
      color="primary"
      class="full-width q-py-sm text-bold custom-btn q-mt-lg"
      unelevated
      @click="handleLogin"
    />

    <div class="column items-center q-gutter-y-sm q-mt-xl text-caption text-grey-7">
      <router-link to="/forgot-password" class="text-primary text-weight-medium no-decoration">
        Forgot Password?
      </router-link>
      <div>
        Don't have an account?
        <router-link to="/signup" class="text-primary text-weight-bold no-decoration">
          Sign Up
        </router-link>
      </div>
      <router-link to="/" class="text-grey-6 no-decoration q-mt-xs">
        Go to Landing Page
      </router-link>
    </div>
  </div>
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

<style scoped>
.no-decoration {
  text-decoration: none;
}
:deep(.custom-rounded-input .q-field__control) {
  border-radius: 8px !important;
}
.custom-btn {
  border-radius: 8px;
}
</style>