<template>
  <q-drawer
    v-model="drawerState"
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
        <q-btn round flat icon="close" @click="drawerState = false" />
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
</template>

<script setup lang="ts">
const drawerState = defineModel<boolean>({ default: false });

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
