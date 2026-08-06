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

      <div class="cover-drop q-mb-md" @click="triggerFilePicker">
        <template v-if="!coverPreview">
          <q-icon name="add_photo_alternate" size="32px" color="primary" />
          <div class="text-body2 text-weight-medium q-mt-sm">Add a cover photo</div>
          <div class="text-caption text-grey-6">Tap to browse an image</div>
        </template>

        <template v-else>
          <img :src="coverPreview" class="cover-preview" alt="Book cover preview" />
          <q-btn
            round
            dense
            color="white"
            text-color="grey-9"
            icon="close"
            class="remove-cover-btn"
            @click.stop="removeCover"
          />
        </template>

        <input
          ref="fileInput"
          type="file"
          accept="image/png, image/jpeg, image/webp"
          class="hidden-input"
          @change="handleFileSelect"
        />
      </div>

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
const fileInput = ref<HTMLInputElement | null>(null);
const coverPreview = ref<string | null>(null);
const coverFile = ref<File | null>(null);
const submitting = ref(false);
const showSuccess = ref(false);

const form = reactive({
  name: '',
  what3Words: '',
  address: '',
  description: '',
});

function triggerFilePicker() {
  fileInput.value?.click();
}

function handleFileSelect(e: Event) {
  const target = e.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) setCover(file);
}

function setCover(file: File) {
  if (coverPreview.value) {
    URL.revokeObjectURL(coverPreview.value);
  }
  coverFile.value = file;
  coverPreview.value = URL.createObjectURL(file);
}

function removeCover() {
  if (coverPreview.value) {
    URL.revokeObjectURL(coverPreview.value);
  }
  coverFile.value = null;
  coverPreview.value = null;
  if (fileInput.value) {
    fileInput.value.value = '';
  }
}

async function submitBookSwap() {
  submitting.value = true;

  await new Promise((resolve) => setTimeout(resolve, 700));

  submitting.value = false;
  showSuccess.value = true;
  setTimeout(() => router.push('/'), 1200);
}
</script>

<style scoped>
.new-swap-page {
  background: #f7f7f5;
  padding-bottom: 70px;
}

.header-bar {
  background: #ffffff;
  border-bottom: 1px solid #eee;
}

.cover-drop {
  position: relative;
  border: 2px dashed #c7d5f0;
  border-radius: 16px;
  background: #f2f6fd;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  cursor: pointer;
  transition:
    background 0.15s ease,
    border-color 0.15s ease;
}

.cover-preview {
  width: 100%;
  max-height: 220px;
  object-fit: cover;
  border-radius: 12px;
}

.remove-cover-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
}

.hidden-input {
  display: none;
}

.availability-row {
  background: #ffffff;
  border-radius: 14px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06);
}

.submit-btn {
  padding: 12px 0;
  font-weight: 600;
}

.success-banner {
  background: #eaf7f1;
  color: #1d6d4d;
}

.bottom-nav {
  border-top: 1px solid #eee;
}
</style>
