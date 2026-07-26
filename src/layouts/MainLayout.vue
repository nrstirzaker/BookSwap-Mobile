<template>
  <q-layout
    view="lHh lpr lFf"
    class="min-h-screen bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')]"
  >
    <MainHeader @toggle-menu="toggleLeftDrawer" />

    <NavigationDrawer v-model="leftDrawerOpen" />

    <!-- Remove Quasar's calculated header offset -->
    <q-page-container style="padding-top: 0 !important">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MainHeader, NavigationDrawer } from '@components';

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
