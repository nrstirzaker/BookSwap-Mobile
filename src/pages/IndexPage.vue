<template>
  <q-page class="">
    <SearchHeader v-model="searchQuery" />

    <div class="text-4xl mx-2 text-gray-800 my-4">Favourites and Recent</div>

    <div class="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-2 px-2">
      <router-link
        v-for="item in favourites"
        :key="item.title"
        :to="`/swap/${item.title.toLowerCase().replace(/\s+/g, '-')}`"
        class="no-underline"
      >
        <SwapCard :title="item.title" :image="item.img" />
      </router-link>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SearchHeader from 'components/SearchHeader.vue';
import SwapCard from 'components/SwapCard.vue';

const searchQuery = ref('');

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
