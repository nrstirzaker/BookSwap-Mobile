<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center bg-white q-pa-md">
        <div class="full-width max-w-xs column items-center">
          <!-- Top Icon & Title -->
          <div class="column items-center q-mb-lg">
            <q-avatar size="68px" color="primary" text-color="white" class="q-mb-sm">
              <q-icon name="menu_book" size="36px" />
            </q-avatar>
            <div class="text-h6 text-bold text-primary">Book Swap</div>
          </div>

          <!-- Router view renders LoginPage / SignUpPage automatically -->
          <router-view />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
// we wil have the api call here to check if the user is logged in or not and redirect accordingly
</script>

<style scoped>
.max-w-xs {
  max-width: 320px;
}
</style>
