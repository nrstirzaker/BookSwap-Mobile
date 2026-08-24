<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center bg-white q-pa-md">
        <div class="full-width max-w-xs column items-center">
          <!-- Top Icon & Title -->
          <div class="column items-center q-mb-xl">
            <q-avatar size="68px" color="primary" text-color="white" class="q-mb-sm">
              <q-icon name="menu_book" size="36px" />
            </q-avatar>
            <div class="text-h6 text-bold text-primary">Book Swap</div>
          </div>

          <!-- Form Inputs -->
          <div class="full-width column q-gutter-y-md">
            <!-- Email -->
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

            <!-- Password -->
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

          <!-- Submit Button -->
          <q-btn
            label="Sign In"
            color="primary"
            class="full-width q-py-sm text-bold custom-btn q-mt-lg"
            unelevated
            @click="handleLogin"
          />

          <!-- Footer Links -->
          <div class="column items-center q-gutter-y-sm q-mt-xl text-caption text-grey-7">
            <router-link
              to="/forgot-password"
              class="text-primary text-weight-medium no-decoration"
            >
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

<style scoped>
.max-w-xs {
  max-width: 320px;
}

.no-decoration {
  text-decoration: none;
}

/* Rounded inputs matching the signup design */
:deep(.custom-rounded-input .q-field__control) {
  border-radius: 8px !important;
}

/* Rounded button matching signup edges */
.custom-btn {
  border-radius: 8px;
}
</style>
