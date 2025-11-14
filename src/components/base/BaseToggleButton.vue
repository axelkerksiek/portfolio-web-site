<template>
  <button
    type="button"
    class="border-text-muted hover:border-text relative inline-flex h-6 w-10 cursor-pointer items-center rounded-full border-1 transition-colors hover:border-1"
    :class="isActive ? activeClass : inactiveClass"
    role="switch"
    :aria-checked="isActive"
    :title="title"
    @click="$emit('toggle')"
  >
    <span
      class="relative inline-flex h-4 w-4 transform items-center justify-center rounded-full"
      :class="[isActive ? 'translate-x-5' : 'translate-x-[0.25rem]', thumbClass]"
    >
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
interface Props {
  isActive: boolean
  activeClass?: string
  inactiveClass?: string
  thumbClass?: string
  title?: string
}

interface Emits {
  (e: 'toggle'): void
}

withDefaults(defineProps<Props>(), {
  activeClass: 'bg-primary',
  inactiveClass: 'bg-primary',
  thumbClass: 'bg-bg',
  title: '',
})

defineEmits<Emits>()
</script>
