<script setup lang="ts">
// --- IMPORTS ---
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { Switch } from '@headlessui/vue'

// --- TYPES ---
type Theme = 'green' | 'orange' | 'blue' | 'purple' | 'red'

// --- VARIABLES (reactive) ---
const isDark = ref(false)
const isMobileMenuOpen = ref(false)
const showPaletteMenu = ref(false)
const navRef = ref<HTMLElement | null>(null)
const selectedTheme = ref<Theme>('green')

// --- VARIABLES (non-reactive) ---
let faviconElement: HTMLLinkElement | null = null

// --- CONSTANTS ---
const NAV_ITEMS = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
]

const THEME_COLORS: Record<Theme, string> = {
  green: 'oklch(0.696 0.17 162.48)',
  orange: 'oklch(0.7 0.18 45)',
  blue: 'oklch(0.6547 0.1749 248.01)',
  purple: 'oklch(0.67 0.2 290)',
  red: 'oklch(0.66 0.19 10)',
}

const FAVICON_MAP: Record<Theme, string> = {
  green: '/images/logos/axel_logo_green_32x32_optimized.png',
  orange: '/images/logos/axel_logo_orange_32x32_optimized.png',
  blue: '/images/logos/axel_logo_blue_32x32_optimized.png',
  purple: '/images/logos/axel_logo_purple_32x32_optimized.png',
  red: '/images/logos/axel_logo_red_32x32_optimized.png',
}

const DESKTOP_BREAKPOINT = '(min-width: 768px)'

// --- FUNCTIONS ---
const toggleDarkMode = () => {
  isDark.value = !isDark.value
}

const togglePaletteMenu = () => {
  showPaletteMenu.value = !showPaletteMenu.value
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const applyStoredTheme = () => {
  const savedTheme = localStorage.getItem('theme')
  const isDarkMode = savedTheme
    ? savedTheme === 'dark'
    : window.matchMedia('(prefers-color-scheme: dark)').matches

  isDark.value = isDarkMode
}

const isValidTheme = (theme: string | null): theme is Theme => {
  return theme !== null && theme in THEME_COLORS
}

const updateFavicon = (theme: Theme) => {
  if (!faviconElement) {
    faviconElement = document.querySelector("link[rel='icon']")
  }

  if (faviconElement) {
    faviconElement.href = FAVICON_MAP[theme]
  }
}

const applyColorPalette = (theme: Theme) => {
  selectedTheme.value = theme
  document.documentElement.style.setProperty('--color-primary', THEME_COLORS[theme])
  updateFavicon(theme)
}

const applyStoredColorPalette = () => {
  const storedTheme = localStorage.getItem('theme-palette')
  const theme = isValidTheme(storedTheme) ? storedTheme : 'green'
  applyColorPalette(theme)
}

const selectPalette = (theme: Theme) => {
  applyColorPalette(theme)
  localStorage.setItem('theme-palette', theme)
}

const scrollToTop = () => {
  closeMobileMenu()
  window.scrollTo({ top: 0, behavior: 'smooth' })
  history.replaceState(null, '', '/')
}

const handleResize = () => {
  if (window.matchMedia(DESKTOP_BREAKPOINT).matches && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

// --- WATCHERS ---
watch(isDark, (DarkMode) => {
  localStorage.setItem('theme', DarkMode ? 'dark' : 'light')
  document.documentElement.classList.toggle('dark', DarkMode)
})

watch(isMobileMenuOpen, (isOpen) => {
  if (isOpen) {
    // Calculate scrollbar width
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    // Hide overflow on both html and body
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'

    // Add padding to both body and the nav to prevent layout shift
    document.body.style.paddingRight = `${scrollbarWidth}px`
    if (navRef.value) {
      navRef.value.style.paddingRight = `${scrollbarWidth}px`
    }
  } else {
    // Revert overflow and padding changes
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
    if (navRef.value) {
      navRef.value.style.paddingRight = ''
    }
  }
})

// --- LIFECYCLE HOOKS ---
onMounted(() => {
  applyStoredTheme()
  applyStoredColorPalette()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  if (isMobileMenuOpen.value) {
    closeMobileMenu()
  }
})
</script>

<template>
  <nav
    ref="navRef"
    class="bg-bg-dark text-text dark:border-border-muted fixed top-0 z-50 w-full border-b border-transparent pt-4 pb-4 shadow-md"
  >
    <AppContainer>
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a href="/" class="flex cursor-pointer items-center gap-4" @click.prevent="scrollToTop">
          <img
            src="/images/logos/axel_logo_250x250_optimized.png"
            alt="Logo"
            class="bg-primary h-8 w-8 rounded-md object-cover"
          />
          <div class="text-text text-2xl font-bold">Axel's Portfolio</div>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden items-center gap-4 md:flex">
          <!-- Navigation Links -->
          <a
            v-for="item in NAV_ITEMS"
            :key="item.name"
            :href="item.href"
            class="text-text hover:text-primary font-semibold"
          >
            {{ item.name }}
          </a>

          <!-- Vertical Divider -->
          <div class="bg-text h-4 w-0.25"></div>

          <!-- External Links -->
          <a
            href="https://www.linkedin.com/in/axelkerksiek"
            target="_blank"
            rel="noreferrer"
            class="text-text hover:text-primary text-xl"
            aria-label="LinkedIn"
            title="View LinkedIn profile"
          >
            <FontAwesomeIcon :icon="['fab', 'square-linkedin']" />
          </a>
          <a
            href="https://github.com/axelkerksiek"
            target="_blank"
            rel="noreferrer"
            class="text-text hover:text-primary text-xl"
            aria-label="GitHub"
            title="View GitHub profile"
          >
            <FontAwesomeIcon :icon="['fab', 'square-github']" />
          </a>

          <!-- Vertical Divider -->
          <div class="bg-text h-4 w-0.25"></div>

          <!-- Color Palette Options -->
          <Transition name="slide-fade">
            <div v-if="showPaletteMenu" class="ml-2 flex origin-right items-center gap-2">
              <button
                v-for="theme in Object.keys(THEME_COLORS) as Theme[]"
                :key="theme"
                :style="{ backgroundColor: THEME_COLORS[theme] }"
                :class="[
                  selectedTheme === theme
                    ? 'ring-primary ring-offset-bg-dark border-bg-dark ring-1 ring-offset-2'
                    : 'border-border',
                ]"
                class="h-5 w-5 cursor-pointer overflow-hidden rounded-sm border hover:scale-110"
                @click="selectPalette(theme)"
              ></button>
            </div>
          </Transition>

          <!-- Color Palette Button -->
          <button
            class="text-text hover:text-primary cursor-pointer text-xl"
            aria-label="Color Palette"
            title="Choose theme color"
            @click="togglePaletteMenu"
          >
            <FontAwesomeIcon :icon="['fas', 'palette']" />
          </button>

          <Switch v-slot="{ checked }" v-model="isDark" as="template">
            <button
              :title="checked ? 'Switch to light mode' : 'Switch to dark mode'"
              class="border-text-muted hover:border-text bg-primary inline-flex h-6 w-10 cursor-pointer items-center rounded-full border"
            >
              <span class="sr-only">Toggle dark mode</span>
              <span
                class="bg-bg inline-flex h-4 w-4 transform items-center justify-center rounded-full"
                :class="checked ? 'translate-x-5' : 'translate-x-[0.20rem]'"
              >
                <FontAwesomeIcon
                  :icon="checked ? ['fas', 'moon'] : ['fas', 'sun']"
                  class="text-text text-[0.5rem]"
                />
              </span>
            </button>
          </Switch>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button
            class="text-text cursor-pointer text-2xl"
            :aria-expanded="isMobileMenuOpen"
            aria-label="Toggle mobile menu"
            @click="toggleMobileMenu"
          >
            <FontAwesomeIcon
              :icon="isMobileMenuOpen ? ['fas', 'xmark'] : ['fas', 'bars-staggered']"
            />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        v-show="isMobileMenuOpen"
        class="bg-bg-dark dark:border-border-muted fixed inset-0 top-16 z-40 overflow-y-auto border-t border-transparent shadow-[inset_0_4px_6px_-1px_rgb(0_0_0/0.1)] md:hidden"
      >
        <!-- Navigation Links -->
        <div class="flex flex-col gap-4 px-18 py-4">
          <a
            v-for="item in NAV_ITEMS"
            :key="item.name"
            :href="item.href"
            class="text-text border-border-muted border-b pb-4 text-center text-xl font-semibold"
            @click="closeMobileMenu"
          >
            {{ item.name }}
          </a>
        </div>

        <!-- Appearance Section -->
        <div class="bg-bg mx-18 flex flex-col gap-8 rounded-lg p-4">
          <!-- Color Theme Squares -->
          <div class="flex items-center justify-between">
            <button
              v-for="theme in Object.keys(THEME_COLORS) as Theme[]"
              :key="theme"
              :style="{ backgroundColor: THEME_COLORS[theme] }"
              :class="[
                selectedTheme === theme
                  ? 'ring-primary ring-offset-bg border-bg ring-2 ring-offset-2'
                  : 'border-text-muted',
              ]"
              class="h-8 w-8 cursor-pointer overflow-hidden rounded-md border"
              :aria-label="`Select ${theme} theme`"
              @click="selectPalette(theme)"
            ></button>
          </div>

          <!-- Light/Dark Mode Buttons -->
          <div class="flex gap-4">
            <button
              :class="[
                !isDark
                  ? 'bg-primary text-bg-light border-primary'
                  : 'bg-bg text-text-muted border-primary/60',
              ]"
              class="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg border-2 py-4 font-semibold"
              aria-label="Switch to light mode"
              @click="isDark && toggleDarkMode()"
            >
              <FontAwesomeIcon :icon="['fas', 'sun']" class="text-lg" />
              <span>Light</span>
            </button>

            <button
              :class="[
                isDark
                  ? 'bg-primary text-text-white border-primary'
                  : 'bg-bg text-text-muted border-primary/60',
              ]"
              class="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg border-2 py-4 font-semibold"
              aria-label="Switch to dark mode"
              @click="!isDark && toggleDarkMode()"
            >
              <FontAwesomeIcon :icon="['fas', 'moon']" class="text-lg" />
              <span>Dark</span>
            </button>
          </div>
        </div>

        <!-- Social Links -->
        <div class="flex items-center justify-center gap-4 p-4 text-4xl">
          <a
            href="https://www.linkedin.com/in/axelkerksiek"
            target="_blank"
            rel="noreferrer"
            class="text-text-muted"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon :icon="['fab', 'square-linkedin']" />
          </a>
          <a
            href="https://github.com/axelkerksiek"
            target="_blank"
            rel="noreferrer"
            class="text-text-muted"
            aria-label="GitHub"
          >
            <FontAwesomeIcon :icon="['fab', 'square-github']" />
          </a>
        </div>
      </div>
    </AppContainer>
  </nav>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease-out;
  padding: 4px;
  margin: -4px;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
  max-width: 0;
  margin-left: -4px;
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  max-width: 200px;
  margin-left: calc(0.5rem - 4px);
}
</style>
