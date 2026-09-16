<template>
  <q-page class="new-swap-page">
    <!-- Header -->
    <div class="header-bar q-pa-md row items-center justify-between">
      <q-btn flat round dense icon="arrow_back" @click="$router.back()" />
      <div class="text-subtitle1 text-weight-medium">New Book Swap Location</div>
      <div style="width: 40px"></div>
    </div>

    <q-form ref="formRef" @submit.prevent="submitBookSwap" class="q-px-md q-pb-xl">
      <div class="text-caption text-grey-7 q-mb-xs">Location Photo</div>

      <!-- Image Upload Component -->
      <LocationImageUploader />

      <!-- Location Identity -->
      <q-input
        v-model="form.nameOfPlace"
        outlined
        rounded
        label="Name of Establishment"
        hint="e.g., Elm Street Little Free Library"
        class="q-mb-md"
        :rules="[(val: string) => !!val || 'Location name is required']"
      >
        <template #prepend><q-icon name="storefront" /></template>
      </q-input>

      <!-- Physical Address -->
      <q-input
        v-model="form.address"
        outlined
        rounded
        label="Street Address / General Area"
        hint="e.g., Corner of 5th Ave and Maple St"
        class="q-mb-md"
        :rules="[(val: string) => !!val || 'Address is required']"
      >
        <template #prepend><q-icon name="place" /></template>
      </q-input>

      <!-- What3Words & Email (Either/Or Validation) -->
      <div class="row q-col-gutter-sm q-mb-md">
        <div class="col-12 col-sm-6">
          <q-input
            v-model="form.what3Words"
            outlined
            rounded
            label="What3Words"
            hint="e.g., ///filled.count.soap"
            prefix="///"
            @update:model-value="validateLocationFields"
            :rules="[
              validateEitherLocation,
              (val: string) =>
                !val ||
                /^[a-zA-Z]+\.[a-zA-Z]+\.[a-zA-Z]+$/.test(val.replace('///', '')) ||
                'Format must be word.word.word',
            ]"
          >
            <template #prepend><q-icon name="grid_3x3" /></template>
          </q-input>
        </div>

        <div class="col-12 col-sm-6">
          <q-input
            v-model="form.email"
            outlined
            rounded
            type="email"
            label="Email Address"
            hint="e.g., contact@location.com"
            @update:model-value="validateLocationFields"
            :rules="[
              validateEitherLocation,
              (val: string) =>
                !val || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || 'Enter a valid email address',
            ]"
          >
            <template #prepend><q-icon name="email" /></template>
          </q-input>
        </div>
      </div>

      <!-- Access & Structure Details -->
      <div class="row q-col-gutter-sm q-mb-md">
        <div class="col-12 col-sm-6">
          <q-select
            v-model="form.locationType"
            outlined
            rounded
            options-dense
            label="Location Type"
            :options="LOCATION_TYPE_OPTIONS"
            emit-value
            map-options
            :rules="[(val: string) => !!val || 'Select type']"
          >
            <template #prepend><q-icon name="category" /></template>
          </q-select>
        </div>

        <div class="col-12 col-sm-6">
          <q-select
            v-model="form.openHoursType"
            outlined
            rounded
            options-dense
            label="Open Hours"
            :options="OPEN_HOURS_OPTIONS"
            emit-value
            map-options
            :rules="[(val: string) => !!val || 'Select open hours']"
          >
            <template #prepend><q-icon name="schedule" /></template>
          </q-select>
        </div>
      </div>

      <!-- Features & Accessibility Component -->
      <AccessibilityFeatures v-model="form.accessibility" />

      <!-- Description & Access Notes -->
      <q-input
        v-model="form.description"
        type="textarea"
        outlined
        rounded
        autogrow
        label="Directions & Access Notes"
        hint="Specify exact spot, landmark cues, or parking details"
        class="q-mb-lg"
      >
        <template #prepend><q-icon name="notes" /></template>
      </q-input>

      <!-- Submit Button -->
      <q-btn
        type="submit"
        color="primary"
        rounded
        unelevated
        no-caps
        label="Post Book Swap"
        class="full-width submit-btn"
        :loading="submitting"
      />
    </q-form>

    <!-- Success Toast Banner -->
    <q-banner v-if="showSuccess" class="success-banner q-ma-md" rounded>
      <template #avatar><q-icon name="check_circle" color="positive" /></template>
      Your book swap location has been posted successfully.
    </q-banner>
  </q-page>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import type { QForm } from 'quasar';
import { AccessibilityFeatures, LocationImageUploader } from '@components';
import { LOCATION_TYPE_OPTIONS, OPEN_HOURS_OPTIONS } from '@constants';

const router = useRouter();
const formRef = ref<QForm | null>(null);
const submitting = ref(false);
const showSuccess = ref(false);

const form = reactive({
  nameOfPlace: '',
  what3Words: '',
  email: '',
  address: '',
  locationType: 'outdoor_box',
  openHoursType: '24_7',
  accessibility: {
    isWeatherproof: true,
    wheelchairAccessible: false,
    automaticDoors: false,
  },
  description: '',
});

// Custom validation rule: At least one field must be filled
function validateEitherLocation(): boolean | string {
  const hasWhat3Words = !!form.what3Words.trim();
  const hasEmail = !!form.email.trim();

  if (!hasWhat3Words && !hasEmail) {
    return 'Provide either a What3Words or an Email address';
  }
  return true;
}

// Trigger re-validation on both inputs when either changes
function validateLocationFields() {
  if (formRef.value) {
    void formRef.value.validate();
  }
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function submitBookSwap() {
  try {
    submitting.value = true;

    // 1. Simulate API network request
    await sleep(700);

    submitting.value = false;
    showSuccess.value = true;

    // 2. Pause to allow user to read success message
    await sleep(1200);

    // 3. Navigate after delay completes
    await router.push('/app');
  } catch (error) {
    // Gracefully handle errors or failed navigation
    submitting.value = false;
    console.error('Submission failed:', error);
  }
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

.submit-btn {
  padding: 12px 0;
  font-weight: 600;
}

.success-banner {
  background: #eaf7f1;
  color: #1d6d4d;
}
</style>
