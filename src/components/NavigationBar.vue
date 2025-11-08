<template>
  <nav class="fixed top-0 w-full bg-light-primary dark:bg-dark-primary text-light-primary dark:text-dark-primary p-4 shadow-sm z-50" style="width: 100vw;">
    <div class="px-4 md:px-10 flex justify-between items-center">
      <!-- Logo with Image -->
      <a href="#about" class="flex items-center space-x-3 cursor-pointer" @click="closeMobileMenu">
        <img 
          src="/images/axel_logo.png" 
          alt="Logo" 
          class="h-8 w-8 rounded-md object-cover bg-primary"
        />
        <div class="text-lg font-bold text-dark-primary dark:text-light-primary">
          Axel's Portfolio
        </div>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-6">
        <a
          v-for="item in navItems"
          :key="item.name"
          :href="item.href"
          class="text-dark-primary dark:text-light-primary hover:text-primary transition-colors text-base font-semibold"
        >
          {{ item.name }}
        </a>

        <!-- Vertical Divider -->
        <div class="h-4 w-0.25 bg-dark-primary dark:bg-light-primary"></div>

        <!-- External Links -->
        <div class="flex items-center gap-3 text-dark-primary dark:text-light-primary text-xl transition-none">
          <a 
            href="https://www.linkedin.com/in/axelkerksiek" 
            target="_blank" 
            rel="noopener" 
            class="hover:text-primary" 
            aria-label="LinkedIn"
            title="View my LinkedIn profile"
          >
            <FontAwesomeIcon :icon="['fab', 'square-linkedin']" />
          </a>
          <a 
            href="https://github.com/axelkerksiek" 
            target="_blank" rel="noopener" 
            class="hover:text-primary" 
            aria-label="GitHub" 
            title="View my GitHub profile"
          >
            <FontAwesomeIcon :icon="['fab', 'square-github']" />
          </a>
        </div>

        <!-- Dark Mode Toggle -->
        <div class="flex items-center space-x-2">
          <ToggleButton
            :is-active="isDark"
            :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            @toggle="toggleDarkMode"
          >
            <FontAwesomeIcon
              :icon="isDark ? ['fas', 'moon'] : ['fas', 'sun']"
              class="fa-2xs"
              :class="isDark ? 'text-white' : 'text-dark-primary'"
            />
          </ToggleButton>
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <button
          @click="toggleMobileMenu"
          class="text-dark-primary dark:text-light-primary hover:text-primary transition-colors"
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
      class="md:hidden fixed inset-0 top-16 bg-light-primary dark:bg-dark-primary z-40"
      style="width: 100vw; left: 0;"
    >
      <!-- Gray line at bottom of nav -->
      <div class="h-px bg-light-secondary dark:bg-dark-secondary"></div>
      
      <!-- Navigation Links (Centered at top) -->
      <div class="flex flex-col px-8 pt-6 space-y-4">
        <a
          v-for="item in navItems"
          :key="item.name"
          :href="item.href"
          @click="closeMobileMenu"
          class="text-dark-primary dark:text-light-primary hover:text-primary transition-colors font-semibold text-base"
        >
          {{ item.name }}
        </a>
        <div class="flex justify-between">
          <span class="text-dark-primary dark:text-light-primary font-semibold text-base">Appearance</span>
          <ToggleButton
            :is-active="isDark"
            :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            @toggle="toggleDarkMode"
          >
            <FontAwesomeIcon
              :icon="isDark ? ['fas', 'moon'] : ['fas', 'sun']"
              class="fa-2xs"
              :class="isDark ? 'text-white' : 'text-dark-primary'"
            />
          </ToggleButton>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import ToggleButton from './ui/ToggleButton.vue'

onMounted(() => {
  initializeTheme()
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

// Initialize theme from localStorage
const initializeTheme = () => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    isDark.value = true
    document.documentElement.classList.add('dark')
  } else {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  }
}

// Toggle dark mode
const toggleDarkMode = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

// Watch for mobile menu changes to prevent scrolling
watch(isMobileMenuOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

</script>