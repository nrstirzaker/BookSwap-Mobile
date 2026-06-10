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

    <div class="text-4xl mx-2 text-gray-800 my-4">Favourites and Recent</div>
    <div class="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-2 px-2">
      <SwapCard
        v-for="item in favourites"
        :key="item.title"
        :title="item.title"
        :image="item.img"
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SearchHeader from 'components/SearchHeader.vue';
import SwapCard from 'components/SwapCard.vue';

const searchQuery = ref('');

// Mock data as placeholder to test the component out for rendering
const favourites = [
  {
    title: 'San Francisco',
    img: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=400',
  },
  { title: 'Santa Monica', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400' },
  {
    title: 'London Library',
    img: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400',
  },
  {
    title: 'Cozy Corner',
    img: 'https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=400',
  },
  {
    title: 'Village Swap',
    img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400',
  },
  {
    title: 'Old Town Square',
    img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400',
  },
];
</script>
