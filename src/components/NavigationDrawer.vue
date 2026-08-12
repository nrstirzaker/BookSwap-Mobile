<template>
  <q-drawer
    v-model="drawerState"
    side="left"
    :width="240"
    bordered
    overlay
    behavior="mobile"
    class="bg-grey-1"
  >
    <q-scroll-area class="fit">
      <div class="q-pa-md border-b border-gray-200 text-right">
        <div class="text-subtitle1 text-weight-bold text-grey-8 jus">Menu</div>
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
import { menuList } from '@constants';

const drawerState = defineModel<boolean>({ default: false });
</script>
