<template>
  <q-layout
    view="lHh lpr lFf"
    class="min-h-screen bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')]"
  >
    <MainHeader @toggle-menu="toggleLeftDrawer" />

    <NavigationDrawer v-model="leftDrawerOpen" />

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Mobile Bottom Navigation Bar -->
    <q-footer class="bg-white text-grey-8 lt-sm border-t border-gray-100">
      <q-tabs v-model="activeTab" no-caps active-color="primary" indicator-color="transparent">
        <q-route-tab name="home" to="/" icon="home" label="Home" exact />
        <q-route-tab name="new" to="/add" icon="add" label="New" />
        <q-route-tab name="saved" to="/saved" icon="bookmark_border" label="Saved" />
        <q-route-tab name="profile" to="/profile" icon="person_outline" label="Profile" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MainHeader, NavigationDrawer } from '@components';

const leftDrawerOpen = ref(false);
const activeTab = ref('home');

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
