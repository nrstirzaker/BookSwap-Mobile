<template>
  <div class="profile-container q-pa-md max-width-mobile mx-auto bg-slate-50 min-h-screen">
    <!-- Top Navigation Bar -->
    <div class="row items-center justify-between q-mb-md">
      <q-btn
        flat
        round
        dense
        icon="arrow_back"
        color="slate-800"
        aria-label="Go Back"
        @click="handleGoBack"
      />
      <div class="text-subtitle1 text-weight-bold text-slate-900">Profile</div>
      <!-- Spacer element to balance title centering -->
      <div style="width: 36px"></div>
    </div>

    <!-- User Profile Header Section -->
    <div class="column items-center q-mb-xl text-center">
      <div class="relative-position q-mb-sm">
        <q-avatar size="96px" class="avatar-shadow">
          <img src="https://cdn.quasar.dev/img/avatar2.jpg" alt="User avatar" />
        </q-avatar>
        <q-btn
          round
          size="sm"
          color="primary"
          icon="edit"
          class="absolute-bottom-right edit-btn"
          aria-label="Edit Profile Picture"
          unelevated
        />
      </div>

      <div class="text-h6 text-weight-bold text-slate-900 leading-tight q-mt-xs">
        {{ formData.name || 'User Profile' }}
      </div>
      <div class="text-caption text-weight-medium text-slate-500 q-mt-xs">
        {{ formData.handle ? `@${formData.handle.replace(/^@/, '')}` : '@handle' }}
      </div>
    </div>

    <!-- Personal Details Section -->
    <div class="q-mb-lg">
      <div class="text-overline text-weight-bold text-slate-500 q-mb-xs px-1">Personal Details</div>
      <q-card flat class="rounded-xl bg-white border-slate-100 shadow-sm">
        <q-card-section class="q-gutter-y-sm">
          <FormInput
            v-for="field in profileFields"
            :key="field.key"
            v-model="formData[field.key]"
            :label="field.label"
            :placeholder="field.placeholder"
            :type="field.type"
          />
        </q-card-section>
      </q-card>
    </div>

    <!-- Recent Destinations Carousel (Max 2 cards) -->
    <div class="q-mb-xl">
      <div class="row items-center justify-between q-mb-sm px-1">
        <div class="text-subtitle2 text-weight-bold text-slate-900">Recent Destinations</div>
        <q-btn
          flat
          dense
          no-caps
          color="primary"
          label="See All"
          class="text-weight-bold"
          size="sm"
          @click="showAllDestinations"
        />
      </div>

      <!-- Horizontal Scroll Track -->
      <div class="destinations-track scroll-hide">
        <div v-for="dest in visibleDestinations" :key="dest.id" class="destination-item">
          <q-card flat class="destination-card bg-white border-slate-100 overflow-hidden shadow-xs">
            <q-img :src="dest.imageUrl" :ratio="4 / 3" class="destination-img">
              <div class="absolute-full bg-gradient-overlay flex items-end q-pa-sm">
                <div class="text-caption text-weight-bold text-white line-clamp-1">
                  {{ dest.title }}
                </div>
              </div>
            </q-img>
            <q-card-section class="q-pa-xs bg-white">
              <div class="text-caption text-slate-400 font-size-11">{{ dest.visited }}</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <!-- Quick Navigation Settings -->
    <div class="q-mb-xl">
      <div class="text-overline text-weight-bold text-slate-500 q-mb-xs px-1">Preferences</div>
      <q-card flat class="rounded-xl bg-white border-slate-100 overflow-hidden shadow-sm">
        <q-list separator class="separator-slate">
          <q-item
            v-for="item in profileSettings"
            :key="item.label"
            clickable
            v-ripple
            class="q-py-md px-md"
          >
            <q-item-section avatar min-width="32px">
              <q-icon :name="item.icon" color="primary" size="20px" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-body2 text-weight-medium text-slate-800">
                {{ item.label }}
              </q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="chevron_right" color="slate-400" size="18px" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>

    <!-- Account Actions -->
    <div class="q-pt-xs q-pb-md">
      <q-btn
        label="Log Out"
        color="negative"
        flat
        class="full-width q-py-sm text-weight-bold rounded-lg logout-btn"
        icon="logout"
        @click="handleLogout"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { FormInput } from '@components';

interface FieldConfig {
  key: keyof typeof formData;
  label: string;
  placeholder: string;
  type?: 'text' | 'email' | 'password';
}

const router = useRouter();

const formData = reactive({
  name: 'Kristin Hennessy',
  handle: 'kristin_h',
});

const profileFields: FieldConfig[] = [
  { key: 'name', label: 'Name', placeholder: 'Your Name', type: 'text' },
  { key: 'handle', label: 'Handle', placeholder: '@username', type: 'text' },
];

const profileSettings = [
  { label: 'Personal Information', icon: 'person' },
  { label: 'Notifications', icon: 'notifications' },
  { label: 'Wishlist', icon: 'favorite_border' },
  { label: 'Saved Locations', icon: 'place' },
];

const recentDestinations = ref([
  {
    id: 1,
    title: 'McWay Falls',
    imageUrl: 'https://cdn.quasar.dev/img/parallax2.jpg',
    visited: 'Visited 2 weeks ago',
  },
  {
    id: 2,
    title: 'Garrapata Beach',
    imageUrl: 'https://cdn.quasar.dev/img/mountains.jpg',
    visited: 'Visited 1 month ago',
  },
  {
    id: 3,
    title: 'Julia Pfeiffer',
    imageUrl: 'https://cdn.quasar.dev/img/material.png',
    visited: 'Visited 2 months ago',
  },
  {
    id: 4,
    title: 'Big Sur Coast',
    imageUrl: 'https://cdn.quasar.dev/img/parallax1.jpg',
    visited: 'Visited 4 months ago',
  },
]);

// Display maximum 2 visible cards on the standard view
const visibleDestinations = computed(() => recentDestinations.value.slice(0, 2));

const handleGoBack = (): void => {
  if (window.history.length > 1) {
    router.back();
  } else {
    void router.push({ name: 'home' });
  }
};

const showAllDestinations = (): void => {
  void router.push({ name: 'destinations' });
};

const handleLogout = async (): Promise<void> => {
  await router.push({ name: 'login' });
};
</script>

<style scoped>
.max-width-mobile {
  max-width: 440px;
}

/* Color System Aliases */
.bg-slate-50 {
  background-color: #f8fafc;
}
.text-slate-900 {
  color: #0f172a;
}
.text-slate-800 {
  color: #1e293b;
}
.text-slate-500 {
  color: #64748b;
}
.text-slate-400 {
  color: #94a3b8;
}
.border-slate-100 {
  border: 1px solid #f1f5f9;
}

/* Border Radius Utilities */
.rounded-xl {
  border-radius: 16px;
}
.rounded-lg {
  border-radius: 12px;
}

/* Elevation & Shadows */
.avatar-shadow {
  box-shadow:
    0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1);
}
.shadow-xs {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.shadow-sm {
  box-shadow:
    0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px -1px rgba(0, 0, 0, 0.1);
}

/* Avatar Edit Overlay */
.edit-btn {
  border: 2px solid #ffffff;
}

/* Horizontal Scroll Track */
.destinations-track {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 4px 4px 12px 4px;
}

.destination-item {
  flex: 0 0 calc(50% - 6px);
  scroll-snap-align: start;
}

.destination-card {
  border-radius: 12px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.destination-card:active {
  transform: scale(0.98);
}

.bg-gradient-overlay {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.75) 100%);
}

.font-size-11 {
  font-size: 11px;
}

.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.logout-btn {
  background: #fef2f2;
  transition: background-color 0.2s ease;
}

.logout-btn:hover {
  background: #fee2e2;
}

/* Scrollbar Hiding */
.scroll-hide::-webkit-scrollbar {
  display: none;
}
.scroll-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
