<template>
  <nav class="
        fixed top-0 w-full z-50
        bg-bg-dark text-text
        pt-4 pb-4
        shadow-md dark:shadow-sm
        dark:border-b dark:border-border-muted
      "
    >

    <Container>
      <div class="flex justify-between items-center">
        <!-- Logo with Image -->
        <a href="#about" class="flex items-center space-x-3 cursor-pointer" @click="closeMobileMenu">
          <img 
            src="/images/axel_logo.png" 
            alt="Logo" 
            class="h-8 w-8 rounded-md object-cover bg-primary"
          />
          <div class="text-lg font-bold text-text">
            Axel's Portfolio
          </div>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-3">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.href"
            class="text-text hover:text-primary text-base font-semibold"
          >
            {{ item.name }}
          </a>

          <!-- Vertical Divider -->
          <div class="h-4 w-0.25 bg-text"></div>

          <!-- External Links and theme options -->
          <div class="flex items-center gap-3 text-text text-xl">
            <a 
              href="https://www.linkedin.com/in/axelkerksiek" 
              target="_blank" 
              rel="noopener" 
              class="text-text hover:text-primary" 
              aria-label="LinkedIn"
              title="View my LinkedIn profile"
            >
              <FontAwesomeIcon :icon="['fab', 'square-linkedin']" />
            </a>
            <a 
              href="https://github.com/axelkerksiek" 
              target="_blank" rel="noopener" 
              class="text-text hover:text-primary" 
              aria-label="GitHub" 
              title="View my GitHub profile"
            >
              <FontAwesomeIcon :icon="['fab', 'square-github']" />
            </a>

          <!-- Vertical Divider -->
          <div class="h-4 w-0.25 bg-text"></div>

            <div class="relative" ref="paletteMenuRef">
            <button
              @click="togglePaletteMenu"
              class="cursor-pointer text-text hover:text-primary"            
              aria-label="Choose color palette"
              title="Choose color palette"
            >
              <FontAwesomeIcon :icon="['fas', 'palette']" />
            </button>

            <div
              v-if="showPaletteMenu"
              class="absolute left-1/2 -translate-x-1/2 mt-2 w-20 rounded-md border border-bg bg-bg shadow-lg z-50"
              role="menu"
              aria-label="Palette options"
            >      
              <button
                v-for="option in palettePreviewOptions"
                :key="option"
                class="block w-full px-4 py-2 text-left text-sm text-text hover:bg-bg-light"
                type="button"
              >
                {{ option }}
              </button>
            </div>
          </div>

            <ToggleButton
              :is-active="isDark"
              :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
              @toggle="toggleDarkMode"
            >
              <FontAwesomeIcon
                :icon="isDark ? ['fas', 'moon'] : ['fas', 'sun']"
                class="fa-3xs text-[0.5rem] text-text"
              />
            </ToggleButton>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="text-text hover:text-primary"
            :aria-expanded="isMobileMenuOpen"
            aria-label="Toggle mobile menu"
          >
          <FontAwesomeIcon 
            :icon="isMobileMenuOpen ? ['fas', 'times'] : ['fas', 'bars']" 
          />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        v-show="isMobileMenuOpen"
        class="md:hidden fixed inset-0 top-16 bg-bg-dark z-40"
        style="width: 100vw; left: 0;"
      >
        <!-- Gray line at bottom of nav -->
        <div class="h-px bg-bg"></div>
        
        <!-- Navigation Links (Centered at top) -->
        <div class="flex flex-col px-8 pt-6 space-y-4">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.href"
            @click="closeMobileMenu"
            class="text-text hover:text-primary font-semibold text-base"
          >
            {{ item.name }}
          </a>
          <div class="flex justify-between">
            <span class="text-text font-semibold text-base">Appearance</span>
            <ToggleButton
              :is-active="isDark"
              :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
              @toggle="toggleDarkMode"
            >
              <FontAwesomeIcon
                :icon="isDark ? ['fas', 'moon'] : ['fas', 'sun']"
                class="fa-2xs text-text"
              />
            </ToggleButton>
          </div>
        </div>
      </div>
    </Container>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import Container from './Container.vue'
import ToggleButton from './ui/ToggleButton.vue'
import { onClickOutside } from '@vueuse/core'

onMounted(() => {
  applyStoredTheme();
})

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' }
]

const isDark = ref(false)
const isMobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
const palettePreviewOptions = ['Default', 'Sunset', 'Forest']
const showPaletteMenu = ref(false)
const paletteMenuRef = ref<HTMLElement | null>(null)

// Initialize theme from localStorage
const applyStoredTheme = () => {
  const isDarkMode =
    localStorage.getItem('theme') === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  document.documentElement.classList.toggle('dark', isDarkMode);
  isDark.value = isDarkMode;
};

// Toggle dark mode
const toggleDarkMode = () => {
  if (isDark.value) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
  applyStoredTheme();
};

const updateColorPalette = () => {
  // TODO: Implement color palette update
}

const togglePaletteMenu = () => {
  showPaletteMenu.value = !showPaletteMenu.value
}

onClickOutside(paletteMenuRef, () => {
  showPaletteMenu.value = false
})

// Watch for mobile menu changes to prevent scrolling
watch(isMobileMenuOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

</script>