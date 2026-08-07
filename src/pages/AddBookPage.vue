<template>
  <q-page class="new-swap-page">
    <!-- Header -->
    <div class="header-bar q-pa-md row items-center justify-between">
      <q-btn flat round dense icon="arrow_back" @click="$router.back()" />
      <div class="text-subtitle1 text-weight-medium">New Book Swap Location</div>
      <div style="width: 40px"></div>
    </div>

    <q-form @submit.prevent="submitBookSwap" class="q-px-md q-pb-xl">
      <!-- Bookswap Location Image Upload -->
      <div class="text-caption text-grey-7 q-mb-xs">Location Photo</div>

      <div class="cover-drop q-mb-md" @click="triggerFilePicker">
        <template v-if="!coverPreview">
          <q-icon name="add_a_photo" size="32px" color="primary" />
          <div class="text-body2 text-weight-medium q-mt-sm">Add a location photo</div>
          <div class="text-caption text-grey-6">
            Tap to upload a photo of the library or cabinet
          </div>
        </template>

        <template v-else>
          <img :src="coverPreview" class="cover-preview" alt="Book swap location preview" />
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

      <!-- Location Identity -->
      <q-input
        v-model="form.nameOfPlace"
        outlined
        rounded
        label="Name of Place / Library"
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
            :options="locationTypeOptions"
            emit-value
            map-options
            :rules="[(val: string) => !!val || 'Select type']"
          >
            <template #prepend><q-icon name="category" /></template>
          </q-select>
        </div>

        <div class="col-12 col-sm-6">
          <q-select
            v-model="form.accessType"
            outlined
            rounded
            options-dense
            label="Access Hours"
            :options="accessTypeOptions"
            emit-value
            map-options
            :rules="[(val: string) => !!val || 'Select access hours']"
          >
            <template #prepend><q-icon name="schedule" /></template>
          </q-select>
        </div>
      </div>

      <!-- Features & Accessibility -->
      <div class="q-mb-md q-pa-sm rounded-borders bg-white feature-box">
        <div class="text-caption text-grey-8 q-mb-xs text-weight-bold">Features & Conditions</div>
        <div class="row q-col-gutter-xs">
          <div class="col-6">
            <q-checkbox v-model="form.isWeatherproof" label="Weatherproof / Covered" dense />
          </div>
          <div class="col-6">
            <q-checkbox v-model="form.wheelchairAccessible" label="Wheelchair Accessible" dense />
          </div>
        </div>
      </div>

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

      <!-- Submit -->
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

const router = useRouter();
const fileInput = ref<HTMLInputElement | null>(null);
const coverPreview = ref<string | null>(null);
const coverFile = ref<File | null>(null);
const submitting = ref(false);
const showSuccess = ref(false);

const locationTypeOptions = [
  { label: 'Outdoor Cabinet / Box', value: 'outdoor_box' },
  { label: 'Community Center / Library', value: 'community_center' },
  { label: 'Cafe / Business Host', value: 'cafe' },
  { label: 'Public Bench / Shelf', value: 'public_shelf' },
  { label: 'Other', value: 'other' },
];

const accessTypeOptions = [
  { label: '24/7 Public Access', value: '24_7' },
  { label: 'Business / Daylight Hours Only', value: 'daylight' },
  { label: 'Restricted / Keycard Required', value: 'restricted' },
];

const form = reactive({
  nameOfPlace: '',
  what3Words: '',
  address: '',
  locationType: 'outdoor_box',
  accessType: '24_7',
  isWeatherproof: true,
  wheelchairAccessible: false,
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

.feature-box {
  border: 1px solid #e2e8f0;
  border-radius: 12px;
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
