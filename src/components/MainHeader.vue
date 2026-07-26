<template>
  <q-header flat class="absolute-top bg-transparent text-white z-top q-pt-safe">
    <div class="q-pa-md row items-center justify-between">
      <q-btn
        round
        flat
        dense
        icon="menu"
        color="white"
        class="bg-black-30"
        @click="emit('toggle-menu')"
      />

      <q-avatar size="40px" class="cursor-pointer shadow-2">
        <img :src="avatarUrl" alt="User Profile" />

        <q-menu auto-close class="rounded-borders">
          <q-list style="min-width: 140px">
            <q-item clickable v-close-popup to="/profile">
              <q-item-section avatar min-width="0">
                <q-icon name="person" size="xs" />
              </q-item-section>
              <q-item-section>My Profile</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section avatar min-width="0">
                <q-icon name="logout" color="negative" size="xs" />
              </q-item-section>
              <q-item-section class="text-negative text-weight-medium">Logout</q-item-section>
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

<style scoped>
/* Subtle dark background tint behind floating icons for improved contrast over any image */
.bg-black-30 {
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(4px);
}
</style>
