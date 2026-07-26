<template>
  <q-page class="bg-grey-2">
    <div class="relative-position">
      <!-- Image -->
      <q-img
        src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop"
        class="hero-image"
        alt="ICARO Lounge Interior"
      >
        <template #loading>
          <q-spinner-dots color="white" />
        </template>
      </q-img>

      <div class="content-card q-pa-lg bg-white rounded-borders">
        <div>
          <h1 class="text-h4 text-bold q-ma-none text-grey-10">{{ $route.params.id }}</h1>
          <div class="row items-center q-mt-xs">
            <q-icon name="place" color="grey-7" size="18px" />
            <p class="text-subtitle1 text-grey-7 q-ma-none q-ml-xs">
              43 cosham, portsmouth PO3 4EQ
            </p>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.content-card {
  position: relative;
  margin-top: -40px;
  z-index: 2;
  border-radius: 24px 24px 0 0;
  min-height: calc(100vh - 260px);
}
</style>
