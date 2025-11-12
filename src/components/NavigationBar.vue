<template>
  <nav
    ref="navRef"
    class="bg-bg-dark text-text dark:border-border-muted fixed top-0 z-50 w-full border-b border-transparent pt-4 pb-4 shadow-md dark:shadow-sm"
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

            <!-- Color Palette Menu with slide-in animation -->
            <Transition name="slide-fade">
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
                      ? 'ring-primary ring-offset-bg-dark border-bg-dark ring-1 ring-offset-2'
                      : 'border-border',
                  ]"
                  class="h-5 w-5 cursor-pointer overflow-hidden rounded-sm border-1 hover:scale-110"
                ></button>
              </div>
            </Transition>

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
        class="bg-bg-dark dark:border-border-muted fixed inset-0 top-16 z-40 overflow-y-auto border-t border-transparent shadow-[inset_0_4px_6px_-1px_rgb(0_0_0_/_0.1)] md:hidden"
        style="width: 100vw; left: 0"
      >
        <!-- Navigation Links (Now first) -->
        <div class="flex flex-col space-y-3 p-4 px-16">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.href"
            @click="closeMobileMenu"
            class="text-text hover:text-primary border-border-muted border-b pb-3 text-sm font-semibold"
          >
            {{ item.name }}
          </a>
        </div>

        <!-- Appearance Section (Now after links) -->
        <div class="bg-bg mx-16 flex flex-col space-y-6 rounded-lg px-4 py-4">
          <!-- Dark/Light Mode Toggle -->
          <div class="flex items-center justify-between">
            <span class="text-text-muted text-sm font-semibold"
              >Appearance</span
            >
            <div class="origin-right scale-85">
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

          <!-- Color Theme Area -->
          <div class="flex items-center justify-between">
            <span class="text-text-muted text-sm font-semibold"
              >Color Theme</span
            >
            <div class="flex items-center gap-2">
              <button
                v-for="theme in Object.keys(themeColors)"
                :key="theme"
                @click="selectPalette(theme)"
                :style="{ backgroundColor: themeColors[theme] }"
                :class="[
                  selectedTheme === theme
                    ? 'ring-primary ring-offset-bg border-bg ring-1 ring-offset-2'
                    : 'border-text-muted',
                ]"
                class="h-5 w-5 cursor-pointer overflow-hidden rounded-md border-1 transition-transform hover:scale-110"
                :aria-label="`Select ${theme} theme`"
              ></button>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div class="flex items-center justify-center gap-4 p-4 text-4xl">
          <a
            href="https://www.linkedin.com/in/axelkerksiek"
            target="_blank"
            rel="noopener"
            class="text-text-muted hover:text-primary"
            aria-label="LinkedIn"
            title="View my LinkedIn profile"
          >
            <FontAwesomeIcon :icon="['fab', 'square-linkedin']" />
          </a>
          <a
            href="https://github.com/axelkerksiek"
            target="_blank"
            rel="noopener"
            class="text-text-muted hover:text-primary"
            aria-label="GitHub"
            title="View my GitHub profile"
          >
            <FontAwesomeIcon :icon="['fab', 'square-github']" />
          </a>
        </div>
      </div>
    </Container>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted } from 'vue'
import Container from './BaseContainer.vue'
import ToggleButton from './ui/ToggleButton.vue'
import { onClickOutside } from '@vueuse/core'

onMounted(() => {
  applyStoredTheme()
  const storedTheme = localStorage.getItem('theme-palette') || 'default'
  selectedTheme.value = storedTheme
  updateFavicon(storedTheme)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  if (isMobileMenuOpen.value) {
    closeMobileMenu()
  }
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
  orange: 'oklch(0.7 0.18 45)',
  blue: 'oklch(0.6547 0.1749 248.01)',
  purple: 'oklch(0.67 0.2 290)',
  red: 'oklch(0.66 0.19 10)',
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

watch(selectedTheme, (newTheme) => {
  updateFavicon(newTheme)
})

const updateFavicon = (theme: string) => {
  const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement
  if (favicon) {
    // Map theme names to their corresponding logo files
    const faviconMap: Record<string, string> = {
      default: '/images/theme_00/axel_logo_green.png', // or your default logo
      orange: '/images/theme_01/axel_logo_orange.png',
      blue: '/images/theme_02/axel_logo_blue.png',
      purple: '/images/theme_03/axel_logo_purple.png',
      red: '/images/theme_04/axel_logo_red.png',
    }
    favicon.href = faviconMap[theme] || faviconMap.default
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const handleResize = () => {
  if (window.innerWidth >= 768 && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
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
    // Calculate scrollbar width before hiding it
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth

    // Hide overflow on both html and body
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'

    // Add padding to both body and the fixed nav to prevent layout shift
    document.body.style.paddingRight = `${scrollbarWidth}px`
    if (navRef.value) {
      navRef.value.style.paddingRight = `${scrollbarWidth}px`
    }
  } else {
    // Restore overflow and padding
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
    if (navRef.value) {
      navRef.value.style.paddingRight = ''
    }
  }
})
</script>

<style scoped>
/* Slide-fade transition for palette menu */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease-out;
  overflow: hidden;
  padding: 4px; /* Space for rings to show */
  margin: -4px; /* Compensate for padding */
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
  max-width: 0;
  margin-left: -4px; /* Adjust for padding compensation */
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  max-width: 200px;
  margin-left: calc(0.5rem - 4px); /* ml-2 minus padding compensation */
}
</style>
