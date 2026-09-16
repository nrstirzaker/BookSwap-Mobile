<template>
  <div class="cover-drop q-mb-md" @click="triggerFilePicker">
    <template v-if="!coverPreview">
      <q-icon name="add_a_photo" size="32px" color="primary" />
      <div class="text-body2 text-weight-medium q-mt-sm">Add a location photo</div>
      <div class="text-caption text-grey-6">Tap to upload a photo of the library or cabinet</div>
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
</template>

<script setup lang="ts">
import { useImageUpload } from '../composables/useImageUpload';

const { fileInput, coverPreview, triggerFilePicker, handleFileSelect, removeCover } =
  useImageUpload();
</script>

<style scoped>
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
</style>
