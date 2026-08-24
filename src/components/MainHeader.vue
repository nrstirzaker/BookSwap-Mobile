<template>
  <q-header
    flat
    class="bg-transparent text-white z-top q-pt-safe pointer-events-none"
    :class="{ 'absolute-top': $q.screen.xs }"
  >
    <div class="q-pa-md row items-center justify-between full-width">
      <!-- Hamburger Menu for tablet screen sizes -->
      <q-btn
        round
        flat
        dense
        icon="menu"
        color="white"
        class="bg-black-30 gt-xs q-mr-md pointer-events-auto"
        @click="emit('toggle-menu')"
      />

      <div class="lt-sm"></div>

      <!-- Profile Avatar -->
      <q-avatar size="40px" class="cursor-pointer shadow-2 pointer-events-auto">
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

            <q-item clickable v-close-popup @click="handleLogout">
              <q-item-section avatar min-width="0">
                <q-icon name="logout" color="negative" size="xs" />
              </q-item-section>
              <q-item-section class="text-negative text-weight-medium"> Logout </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-avatar>
    </div>
  </q-header>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';

const $q = useQuasar();
const router = useRouter();

const emit = defineEmits<{
  (e: 'toggle-menu'): void;
}>();

const avatarUrl = 'https://cdn.quasar.dev/img/avatar.png';

const handleLogout = async (): Promise<void> => {
  await router.push({ name: 'login' });
};
</script>

<style scoped>
.bg-black-30 {
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(4px);
}

.pointer-events-none {
  pointer-events: none;
}

.pointer-events-auto {
  pointer-events: auto;
}
</style>
