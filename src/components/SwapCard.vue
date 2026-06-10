<template>
  <div class="relative cursor-pointer overflow-hidden rounded-2xl">
    <q-img :src="image" :alt="title" :ratio="1.5" class="bg-gray-200" />

    <div class="absolute bottom-0 left-0 w-full p-3 bg-linear-to-t from-black/70 to-transparent">
      <div class="text-white font-semibold text-sm truncate">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  image: string;
}>();
</script>
