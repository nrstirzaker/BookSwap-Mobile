<template>
  <q-header flat class="bg-transparent text-gray-800">
    <div class="q-pa-md row items-center justify-between text-black">
      <q-btn round flat icon="menu" @click="emit('toggle-menu')" />

      <q-avatar class="cursor-pointer">
        <img :src="avatarUrl" alt="User Profile" />

        <q-menu auto-close>
          <q-list class="min-w-30">
            <q-item clickable to="/profile">
              <q-item-section>My Profile</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section class="text-negative">Logout</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-avatar>
    </div>
  </q-header>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'toggle-menu'): void;
}>();

const avatarUrl = 'https://cdn.quasar.dev/img/avatar.png';
</script>
