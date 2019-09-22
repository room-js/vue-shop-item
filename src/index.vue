<template>
  <slider-mobile
    :items="itemsMobile"
    :showArrows="showArrows"
    v-if="isMobile()"
  />
  <slider-desktop
    v-else
    :items="itemsDesktop"
    :showPreview="showPreview"
    :previewPosition="previewPosition"
  />
</template>

<script lang="ts" src="./index.ts"></script>