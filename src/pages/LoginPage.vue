<template>
  <div class="full-width column items-center">
    <div class="full-width column q-gutter-y-md">
      <FormInput
        v-for="field in loginFields"
        :key="field.key"
        v-model="formData[field.key]"
        :label="field.label"
        :placeholder="field.placeholder"
        :type="field.type"
      />
    </div>

    <q-btn
      label="Sign In"
      color="primary"
      class="full-width q-py-sm text-bold custom-btn q-mt-lg"
      unelevated
      @click="handleLogin"
    />

    <div class="column items-center q-gutter-y-sm q-mt-xl text-caption text-grey-7">
      <router-link to="/auth/forgot-password" class="text-primary text-weight-medium no-decoration">
        Forgot Password?
      </router-link>
      <div>
        Don't have an account?
        <router-link :to="{ name: 'signup' }" class="text-primary text-weight-bold no-decoration">
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
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import FormInput from 'components/FormInput.vue';

interface FieldConfig {
  key: keyof typeof formData;
  label: string;
  placeholder: string;
  type?: 'text' | 'email' | 'password';
}

const router = useRouter();

const formData = reactive({
  email: '',
  password: '',
});

const loginFields: FieldConfig[] = [
  { key: 'email', label: 'Email', placeholder: 'your.email@example.com', type: 'email' },
  { key: 'password', label: 'Password', placeholder: '••••••••', type: 'password' },
];

const handleLogin = async (): Promise<void> => {
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
