<template>
  <q-page class="new-swap-page">
    <!-- Header -->
    <div class="header-bar q-pa-md row items-center justify-between">
      <q-btn flat round dense icon="arrow_back" @click="$router.back()" />
      <div class="text-subtitle1 text-weight-medium">New Book Swap</div>
      <div style="width: 40px"></div>
    </div>

    <q-form @submit.prevent="submitBookSwap" class="q-px-md q-pb-xl">
      <!-- Bookswap Location Image Upload -->
      <div class="text-caption text-grey-7 q-mb-xs">Bookswap Location Image</div>

      <!-- Submit -->
      <q-btn
        type="submit"
        color="primary"
        rounded
        unelevated
        no-caps
        label="Post book swap"
        class="full-width submit-btn"
        :loading="submitting"
      />
    </q-form>

    <!-- Success toast-style banner -->
    <q-banner v-if="showSuccess" class="success-banner q-ma-md" rounded>
      <template #avatar><q-icon name="check_circle" color="positive" /></template>
      Your book swap has been posted.
    </q-banner>
  </q-page>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const submitting = ref(false);
const showSuccess = ref(false);

const form = reactive({
  name: '',
  what3Words: '',
  address: '',
  description: '',
});

async function submitBookSwap() {
  submitting.value = true;

  await new Promise((resolve) => setTimeout(resolve, 700)); // demo delay

  submitting.value = false;
  showSuccess.value = true;
  setTimeout(() => router.push('/'), 1200);
}
</script>

<style scoped>
.new-swap-page {
  background: #f7f7f5;
}

.header-bar {
  background: #ffffff;
  border-bottom: 1px solid #eee;
}
</style>
