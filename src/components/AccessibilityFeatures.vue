<template>
  <div class="q-mb-md q-pa-sm rounded-borders bg-white feature-box">
    <div class="text-caption text-grey-8 q-mb-xs text-weight-bold">Features & Conditions</div>
    <div class="row q-col-gutter-xs">
      <div class="col-12 col-sm-4">
        <q-checkbox v-model="accessibility.isWeatherproof" label="Weatherproof / Covered" dense />
      </div>
      <div class="col-12 col-sm-4">
        <q-checkbox
          v-model="accessibility.wheelchairAccessible"
          label="Wheelchair Accessible"
          dense
        />
      </div>
      <div class="col-12 col-sm-4">
        <q-checkbox v-model="accessibility.automaticDoors" label="Automatic Doors" dense />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface AccessibilityState {
  isWeatherproof: boolean;
  wheelchairAccessible: boolean;
  automaticDoors: boolean;
}

const accessibility = defineModel<AccessibilityState>({ required: true });
</script>

<style scoped>
.feature-box {
  border: 1px solid #e2e8f0;
  border-radius: 12px;
}
</style>
