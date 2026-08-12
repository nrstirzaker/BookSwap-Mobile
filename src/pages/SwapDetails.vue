<template>
  <q-page class="bg-grey-2 page-container flex flex-center">
    <div class="full-width max-content-width">
      <div class="row q-col-gutter-gt-xs-lg">
        <!-- Image -->
        <div class="col-12 col-sm-6 col-md-7">
          <div class="hero-wrapper relative-position full-width overflow-hidden">
            <q-img
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop"
              class="hero-img fit"
              fit="cover"
              position="center center"
            >
              <template #loading>
                <q-spinner-dots color="white" size="2em" />
              </template>
            </q-img>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-md-5 content-col">
          <!-- Card Sheet wrapper ACTIVE ONLY ON MOBILE (xs) -->
          <div class="details-panel bg-white q-pa-md q-pa-sm-none">
            <!-- Title & Location -->
            <div class="q-mb-md">
              <div class="text-weight-bolder text-grey-10 fluid-title">
                {{ $route.params.id || 'San Francisco' }}
              </div>

              <div class="row items-center q-mt-xs text-grey-8">
                <q-icon name="place" class="q-mr-xs text-primary fluid-icon" />
                <a
                  :href="googleMapsUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-grey-8 text-weight-medium location-link hover-underline fluid-address"
                >
                  {{ locationAddress }}
                </a>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="column q-gutter-y-xs q-gutter-y-sm-sm">
              <q-btn
                rounded
                unelevated
                color="primary"
                class="full-width text-weight-bold fluid-btn"
                label="Check into Location"
                no-caps
              />

              <q-btn
                rounded
                outline
                color="primary"
                class="full-width text-weight-bold fluid-btn"
                label="Update Location"
                no-caps
              />

              <q-btn
                rounded
                flat
                color="primary"
                class="full-width fluid-btn"
                icon="directions"
                label="Get Directions"
                no-caps
                :href="googleMapsUrl"
                target="_blank"
              />
            </div>

            <q-separator class="q-my-md q-my-sm-lg" />

            <!-- About Section -->
            <div class="q-mb-md">
              <div class="text-weight-bold text-grey-9 q-mb-xs fluid-subtitle">
                About this location
              </div>
              <p class="text-grey-7 line-height-relaxed q-mb-none fluid-body">
                Welcome to ICARO Lounge. Check in to record your visit, update your location if
                needed, or get directions directly from your current location.
              </p>
            </div>

            <!-- Opening Times Section -->
            <div class="q-mb-md">
              <div class="text-weight-bold text-grey-9 q-mb-xs fluid-subtitle">Opening Times</div>
              <div class="row items-center text-grey-8 fluid-body">
                <q-icon name="schedule" class="q-mr-xs text-primary fluid-icon" />
                <span>Open daily: 8:00 AM - 5:00 PM</span>
              </div>
            </div>

            <!-- Photos Section -->
            <div>
              <div class="text-weight-bold text-grey-9 q-mb-xs fluid-subtitle">Photos</div>
              <div class="row q-col-gutter-xs">
                <div v-for="(photo, index) in photos" :key="index" class="col-4">
                  <q-img :src="photo" :ratio="1" class="photo-thumb rounded-borders" fit="cover">
                    <template #loading>
                      <q-spinner-dots color="white" size="1.5em" />
                    </template>
                  </q-img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const locationAddress = '43 Cosham, Portsmouth PO3 4EQ';

const googleMapsUrl = computed(() => {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationAddress)}`;
});

const photos = [
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?q=80&w=400&auto=format&fit=crop',
];
</script>

<style scoped>
.page-container {
  min-height: 100vh;
}

.max-content-width {
  max-width: 1140px;
}

/* =======================================
   Fluid Typography, Buttons & Icons
   ======================================= */

.fluid-title {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  line-height: 1.2;
}

.fluid-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
}

.fluid-body,
.fluid-address {
  font-size: clamp(0.875rem, 1.5vw, 1rem);
}

.fluid-icon {
  font-size: clamp(1.125rem, 2vw, 1.5rem);
}

.fluid-btn {
  font-size: clamp(0.875rem, 1.2vw, 1.125rem) !important;
  padding: clamp(8px, 1.5vw, 14px) clamp(16px, 2vw, 24px) !important;
}

.fluid-btn :deep(.q-icon) {
  font-size: clamp(1.125rem, 1.8vw, 1.5rem);
}

.photo-thumb {
  border-radius: 12px;
}

/* Mobile Layout (xs: < 600px) */
@media (max-width: 599.99px) {
  .hero-wrapper {
    height: 240px;
  }

  .content-col {
    margin-top: -24px;
    z-index: 2;
  }

  .details-panel {
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.08);
    min-height: calc(100vh - 216px);
  }
}

/* Tablet & Desktop Layout (gt-xs: >= 600px) */

@media (min-width: 600px) {
  .page-container {
    padding: 24px;
  }

  .hero-wrapper {
    height: 100%;
    min-height: 400px;
    border-radius: 16px;
  }

  .details-panel {
    background: transparent !important;
    border-radius: 0;
    box-shadow: none;
  }
}

@media (min-width: 1024px) {
  .page-container {
    padding: 40px;
  }

  .hero-wrapper {
    min-height: 480px;
  }
}

.line-height-relaxed {
  line-height: 1.6;
}

.location-link {
  text-decoration: none;
}

.hover-underline:hover {
  text-decoration: underline;
}
</style>
