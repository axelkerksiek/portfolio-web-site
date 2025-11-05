<template>
  <footer class="bg-light-primary dark:bg-dark-primary py-8">
    <div class="px-14">
      <div class="flex justify-between items-center">        
        <div class="flex space-x-4">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-dark-primary dark:text-light-primary hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon :icon="['fab', 'linkedin']" class="h-8 w-8" />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-dark-primary dark:text-light-primary hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <FontAwesomeIcon :icon="['fab', 'github']" class="h-8 w-8" />
          </a>
        </div>
        
        <div class="text-sm text-dark-primary dark:text-light-primary">
          © 2025 All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// No script needed for this simple footer
</script>
