<template>
  <q-layout
    view="lHh Lpr lFf"
    class="min-h-screen bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')]"
  >
    <q-header flat class="bg-transparent text-gray-800">
      <div class="q-pa-md row items-center justify-between text-black">
        <q-btn round flat icon="menu" @click="toggleLeftDrawer" />

        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
      </div>
    </q-header>

    <NavigationDrawer v-model="leftDrawerOpen" />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavigationDrawer from 'components/NavigationDrawer.vue';

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
