<script setup lang="ts">
import packageJson from '@root/package.json'
const VERSION = packageJson.version
</script>

<template>
  <footer class="bg-bg-dark pb-4">
    <AppContainer
      class="text-text-muted flex flex-col items-center justify-center gap-2 text-center text-xs font-light tracking-widest uppercase italic"
    >
      <p>Copyright © 2025 Axel Kerksiek</p>
      <p class="lowercase">v{{ VERSION }}</p>
    </AppContainer>
  </footer>
</template>
