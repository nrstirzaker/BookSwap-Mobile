<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center bg-white q-pa-md">
        <div class="full-width max-w-xs column items-center">
          <!-- Top Icon & Title -->
          <div class="column items-center q-mb-lg">
            <q-avatar size="68px" color="primary" text-color="white" class="q-mb-sm">
              <q-icon name="menu_book" size="36px" />
            </q-avatar>
            <div class="text-h6 text-bold text-primary">Book Swap</div>
          </div>

          <!-- Section Heading -->
          <div class="full-width text-subtitle1 text-bold text-grey-10 text-left q-mb-md">
            Create Account
          </div>

          <!-- Form Fields -->
          <div class="full-width column q-gutter-y-md">
            <!-- Full Name -->
            <div>
              <div class="text-caption text-weight-bold text-grey-9 q-mb-xs">Full Name</div>
              <q-input
                v-model="fullName"
                placeholder="Enter your full name"
                outlined
                dense
                no-error-icon
                class="custom-rounded-input"
              />
            </div>

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

            <!-- Handle with Tooltip/Help Icon -->
            <div>
              <div class="text-caption text-weight-bold text-grey-9 q-mb-xs">Handle</div>
              <div class="row items-center no-wrap q-gutter-x-sm">
                <q-input
                  v-model="handle"
                  placeholder="RockMainEasy"
                  outlined
                  dense
                  no-error-icon
                  class="col custom-rounded-input"
                />
                <q-avatar color="primary" text-color="white" size="36px" class="cursor-pointer">
                  <span class="text-weight-bold text-caption">?</span>
                  <q-tooltip class="bg-grey-9"> Your unique username on BookSwap </q-tooltip>
                </q-avatar>
              </div>
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

            <!-- Confirm Password -->
            <div>
              <div class="text-caption text-weight-bold text-grey-9 q-mb-xs">Confirm Password</div>
              <q-input
                v-model="confirmPassword"
                placeholder="••••••••"
                type="password"
                outlined
                dense
                no-error-icon
                class="custom-rounded-input"
              />
            </div>
          </div>

          <!-- Terms Checkbox -->
          <div class="full-width row items-center no-wrap q-mt-lg q-mb-md">
            <q-checkbox v-model="agreeTerms" dense size="xs" color="primary" />
            <span class="text-caption text-grey-8 q-ml-xs">
              I agree to the
              <router-link to="/terms" class="text-primary text-weight-medium no-decoration">
                Terms & Conditions
              </router-link>
            </span>
          </div>

          <!-- Submit Button -->
          <q-btn
            label="Sign Up"
            color="primary"
            class="full-width q-py-sm text-bold custom-btn"
            unelevated
            @click="handleSignUp"
          />

          <!-- Footer Link -->
          <div class="text-caption text-grey-8 q-mt-md">
            Already have an account?
            <router-link to="/login" class="text-primary text-weight-bold no-decoration">
              Sign In
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

const fullName = ref('');
const email = ref('');
const handle = ref('');
const password = ref('');
const confirmPassword = ref('');
const agreeTerms = ref(false);

const handleSignUp = async (): Promise<void> => {
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

/* Rounded inputs matching the image border-radius */
:deep(.custom-rounded-input .q-field__control) {
  border-radius: 8px !important;
}

/* Rounded button matching image edges */
.custom-btn {
  border-radius: 8px;
}
</style>
