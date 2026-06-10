<template>
  <q-page
    class="bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')]"
  >
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
