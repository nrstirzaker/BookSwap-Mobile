<template>
  <div>
    <div v-if="label" class="text-caption text-weight-bold text-grey-9 q-mb-xs">
      {{ label }}
    </div>
    <q-input
      v-bind="$attrs"
      v-model="model"
      outlined
      dense
      no-error-icon
      class="custom-rounded-input"
    >
      <!-- Forward all slots (like #append) to inner q-input -->
      <template v-for="(_, slot) in $slots" #[slot]="scope">
        <slot :name="slot" v-bind="scope || {}" />
      </template>
    </q-input>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  modelValue: string;
  label?: string;
}>();

// This is not for the validation but for the v-model binding to work properly with the parent component.
// The parent component will pass down the modelValue prop and listen for the update:modelValue event to update its own state.
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const model = computed({
  get: () => props.modelValue,
  set: (val: string) => emit('update:modelValue', val),
});
</script>

<style scoped>
:deep(.custom-rounded-input .q-field__control) {
  border-radius: 8px !important;
}
</style>
