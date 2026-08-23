<template>
  <q-page class="">
    <SearchHeader v-model="searchQuery" />

    <div class="text-4xl mx-2 text-gray-800 my-4">Favourites and Recent</div>

    <div class="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-2 px-2">
      <router-link
        v-for="item in filteredFavourites"
        :key="item.title"
        :to="`/bookswap/${item.title.toLowerCase().replace(/\s+/g, '-')}`"
        class="no-underline"
      >
        <SwapCard :title="item.title" :image="item.img" />
      </router-link>
    </div>

    <div v-if="filteredFavourites.length === 0" class="mx-2 my-4 text-gray-500 text-lg">
      No items found matching "{{ searchQuery }}"
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { SwapCard, SearchHeader } from '@components';
import { favourites } from '@constants';

interface FavouriteItem {
  title: string;
  img: string;
}

const searchQuery = ref('');

const filteredFavourites = computed<FavouriteItem[]>(() => {
  const query = searchQuery.value.trim().toLowerCase();

  if (!query) return favourites;

  return favourites.filter((item: FavouriteItem) => {
    const matchesTitle = item.title.toLowerCase().includes(query);

    return matchesTitle;
  });
});
</script>
