<template>
  <slider-mobile
    :items="items"
    :showArrows="showArrows"
    v-if="isMobile()"
  />
  <slider-desktop
    v-else
    :items="items"
    :showPreview="showPreview"
    :previewPosition="previewPosition"
  />
</template>

<script lang="ts" src="./index.ts"></script>