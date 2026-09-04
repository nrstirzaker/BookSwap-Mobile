<template>
  <div class="full-width column items-center">
    <!-- Section Title -->
    <div class="full-width text-subtitle1 text-bold text-grey-10 text-left q-mb-md">
      Create Account
    </div>

    <!-- Dynamic Form Fields -->
    <div class="full-width column q-gutter-y-md">
      <FormInput
        v-for="field in signUpFields"
        :key="field.key"
        v-model="formData[field.key]"
        :label="field.label"
        :placeholder="field.placeholder"
        :type="field.type"
      >
        <template v-if="field.hasTooltip" #append>
          <q-avatar color="primary" text-color="white" size="24px" class="cursor-pointer">
            <span class="text-weight-bold text-caption">?</span>
            <q-tooltip class="bg-grey-9">Your unique username on BookSwap</q-tooltip>
          </q-avatar>
        </template>
      </FormInput>
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
      <router-link :to="{ name: 'login' }" class="text-primary text-weight-bold no-decoration">
        Sign In
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import FormInput from 'components/FormInput.vue';
import { signUpFields } from '@constants';

const router = useRouter();
const agreeTerms = ref(false);

const formData = reactive<SignUpFormData>({
  fullName: '',
  email: '',
  handle: '',
  password: '',
  confirmPassword: '',
});

const handleSignUp = async (): Promise<void> => {
  await router.push({ name: 'home' });
};
</script>

<style scoped>
.no-decoration {
  text-decoration: none;
}
.custom-btn {
  border-radius: 8px;
}
</style>
