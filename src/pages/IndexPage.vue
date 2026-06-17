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
import { SwapCard, SearchHeader } from '@components';
import { favourites } from '@constants';

const searchQuery = ref('');
</script>
