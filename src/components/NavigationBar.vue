<template>
  <nav
    ref="navRef"
    class="bg-bg-dark text-text dark:border-border-muted fixed top-0 z-50 w-full pt-4 pb-4 shadow-md transition-all duration-500 dark:border-b dark:shadow-sm"
  >
    <Container>
      <div class="flex items-center justify-between">
        <!-- Logo with Image -->
        <a
          href="#about"
          class="flex cursor-pointer items-center space-x-3"
          @click="closeMobileMenu"
        >
          <img
            src="/images/axel_logo.png"
            alt="Logo"
            class="bg-primary h-8 w-8 rounded-md object-cover"
          />
          <div class="text-text text-lg font-bold">Axel's Portfolio</div>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden items-center gap-3 md:flex">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.href"
            class="text-text hover:text-primary text-base font-semibold"
          >
            {{ item.name }}
          </a>

          <!-- Vertical Divider -->
          <div class="bg-text h-4 w-0.25"></div>

          <!-- External Links and theme options -->
          <div class="text-text flex items-center gap-3 text-xl">
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
              target="_blank"
              rel="noopener"
              class="text-text hover:text-primary"
              aria-label="GitHub"
              title="View my GitHub profile"
            >
              <FontAwesomeIcon :icon="['fab', 'square-github']" />
            </a>

            <!-- Vertical Divider -->
            <div class="bg-text h-4 w-0.25"></div>

            <!-- Color Palette Button -->
            <div
              v-if="showPaletteMenu"
              class="ml-2 flex origin-right items-center gap-2"
            >
              <!-- Button uses theme color classes directly -->
              <button
                v-for="theme in Object.keys(themeColors)"
                :key="theme"
                @click="selectPalette(theme)"
                :style="{ backgroundColor: themeColors[theme] }"
                :class="[
                  selectedTheme === theme
                    ? 'border-primary ring-primary ring-offset-bg-dark ring-1 ring-offset-2'
                    : 'border-border',
                ]"
                class="h-5 w-5 cursor-pointer overflow-hidden rounded-sm border-1 hover:scale-110"
              ></button>
            </div>

            <!-- Color Palette Button -->
            <button
              @click="togglePaletteMenu"
              class="text-text hover:text-primary cursor-pointer"
              aria-label="Choose theme"
              title="Choose theme"
            >
              <FontAwesomeIcon :icon="['fas', 'palette']" />
            </button>

            <ToggleButton
              :is-active="isDark"
              :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
              @toggle="toggleDarkMode"
            >
              <FontAwesomeIcon
                :icon="isDark ? ['fas', 'moon'] : ['fas', 'sun']"
                class="fa-3xs text-text text-[0.5rem]"
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
        class="bg-bg-dark fixed inset-0 top-16 z-40 md:hidden"
        style="width: 100vw; left: 0"
      >
        <!-- Gray line at bottom of nav -->
        <div class="bg-bg h-px"></div>

        <!-- Navigation Links (Centered at top) -->
        <div class="flex flex-col space-y-4 px-8 pt-6">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.href"
            @click="closeMobileMenu"
            class="text-text hover:text-primary text-base font-semibold"
          >
            {{ item.name }}
          </a>
          <div class="flex justify-between">
            <span class="text-text text-base font-semibold">Appearance</span>
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
import Container from './BaseContainer.vue'
import ToggleButton from './ui/ToggleButton.vue'
import { onClickOutside } from '@vueuse/core'

onMounted(() => {
  applyStoredTheme()
  const storedTheme = localStorage.getItem('theme-palette') || 'default'
  selectedTheme.value = storedTheme
})

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
]

const isDark = ref(false)
const isMobileMenuOpen = ref(false)
const showPaletteMenu = ref(false)

const navRef = ref<HTMLElement | null>(null)

const themeColors: Record<string, string> = {
  default: 'oklch(0.696 0.17 162.48)', //make sure this is the same value as --color-primary in :root
  sunset: 'oklch(0.7 0.18 45)',
  ocean: 'oklch(0.65 0.15 210)',
  purple: 'oklch(0.67 0.2 290)',
  rose: 'oklch(0.66 0.19 10)',
}
const selectedTheme = ref('default')
const selectPalette = (theme: string) => {
  selectedTheme.value = theme
  document.documentElement.style.setProperty(
    '--color-primary',
    themeColors[theme]
  )
  localStorage.setItem('theme-palette', theme)
  showPaletteMenu.value = false
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const togglePaletteMenu = () => {
  showPaletteMenu.value = !showPaletteMenu.value
}

// Initialize theme from localStorage
const applyStoredTheme = () => {
  const isDarkMode =
    localStorage.getItem('theme') === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)

  document.documentElement.classList.toggle('dark', isDarkMode)
  isDark.value = isDarkMode
}

// Toggle dark mode
const toggleDarkMode = () => {
  if (isDark.value) {
    localStorage.setItem('theme', 'light')
  } else {
    localStorage.setItem('theme', 'dark')
  }
  applyStoredTheme()
}

// Close palette menu when clicking outside
onClickOutside(navRef, () => {
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
