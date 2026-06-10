<template>
  <div class="px-4 pb-4">
    <h5 class="mt-0 mb-1 font-bold text-lg">Hi Alex,</h5>
    <p class="text-gray-600">Find Book Swaps near you</p>

    <q-input
      v-model="model"
      outlined
      rounded
      bg-color="white"
      placeholder="Name of Town, postcode..."
      dense
    >
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
    </q-input>
  </div>
</template>

<script setup lang="ts">
const model = defineModel<string>();
</script>
