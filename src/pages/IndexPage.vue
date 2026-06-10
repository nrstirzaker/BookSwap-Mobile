<template>
  <q-page class="bg-grey-1">
    <div class="q-pa-md q-gutter-sm"></div>

    <div class="q-pa-md row items-center justify-between">
      <q-avatar>
        <img src="https://cdn.quasar.dev/img/avatar.png" />
      </q-avatar>
      <q-btn round flat icon="menu" />
    </div>

    <SearchHeader v-model="searchQuery" />
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SearchHeader from 'components/SearchHeader.vue';

const searchQuery = ref('');
</script>
