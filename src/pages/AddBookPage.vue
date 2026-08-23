<template>
  <q-page class="new-swap-page">
    <!-- Header -->
    <div class="header-bar q-pa-md row items-center justify-between">
      <q-btn flat round dense icon="arrow_back" @click="$router.back()" />
      <div class="text-subtitle1 text-weight-medium">New Book Swap Location</div>
      <div style="width: 40px"></div>
    </div>

    <q-form @submit.prevent="submitBookSwap" class="q-px-md q-pb-xl">
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

      <!-- What3Words -->
      <q-input
        v-model="form.what3Words"
        outlined
        rounded
        label="What3Words Address"
        hint="e.g., ///filled.count.soap"
        prefix="///"
        class="q-mb-md"
        :rules="[
          (val: string) => !!val || 'What3Words location is required',
          (val: string) =>
            /^[a-zA-Z]+\.[a-zA-Z]+\.[a-zA-Z]+$/.test(val.replace('///', '')) ||
            'Format must be word.word.word',
        ]"
      >
        <template #prepend><q-icon name="grid_3x3" /></template>
      </q-input>

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
import { AccessibilityFeatures, LocationImageUploader } from '@components';

const LOCATION_TYPE_OPTIONS = [
  { label: 'Outdoor Cabinet / Box', value: 'outdoor_box' },
  { label: 'Community Center / Library', value: 'community_center' },
  { label: 'Cafe / Business Host', value: 'cafe' },
  { label: 'Public Bench / Shelf', value: 'public_shelf' },
  { label: 'Other', value: 'other' },
];

const OPEN_HOURS_OPTIONS = [
  { label: '24/7 Public Access', value: '24_7' },
  { label: 'Business / Daylight Hours Only', value: 'daylight' },
  { label: 'Restricted / Keycard Required', value: 'restricted' },
];

const router = useRouter();
const submitting = ref(false);
const showSuccess = ref(false);

const form = reactive({
  nameOfPlace: '',
  what3Words: '',
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

.submit-btn {
  padding: 12px 0;
  font-weight: 600;
}

.success-banner {
  background: #eaf7f1;
  color: #1d6d4d;
}
</style>
