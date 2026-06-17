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

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      :width="220"
      bordered
      overlay
      behavior="mobile"
      class="bg-grey-1"
    >
      <q-scroll-area class="fit">
        <div class="q-pa-md row items-center justify-between border-b border-gray-200">
          <div class="text-subtitle1 font-bold text-gray-700">Menu</div>
          <q-btn round flat icon="close" @click="toggleLeftDrawer" />
        </div>

        <q-list padding>
          <template v-for="(item, index) in menuList" :key="index">
            <q-item clickable v-ripple :to="item.to">
              <q-item-section avatar>
                <q-icon :name="item.icon" />
              </q-item-section>
              <q-item-section>
                {{ item.label }}
              </q-item-section>
            </q-item>

            <q-separator v-if="item.separator" :key="'sep-' + index" class="q-my-sm" />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

interface MenuItem {
  icon: string;
  label: string;
  to: string;
  separator: boolean;
}

const menuList: MenuItem[] = [
  {
    icon: 'home',
    label: 'Home',
    to: '/',
    separator: false,
  },
  {
    icon: 'person',
    label: 'Profile',
    to: '/profile',
    separator: false,
  },
  {
    icon: 'settings',
    label: 'Settings',
    to: '/settings',
    separator: false,
  },
];
</script>
