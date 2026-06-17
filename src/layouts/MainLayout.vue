<template>
  <q-layout
    view="lHh Lpr lFf"
    class="min-h-screen bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')]"
  >
    <MainHeader @toggle-menu="toggleLeftDrawer" />

    <NavigationDrawer v-model="leftDrawerOpen" />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MainHeader from 'components/MainHeader.vue';
import NavigationDrawer from 'components/NavigationDrawer.vue';

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
