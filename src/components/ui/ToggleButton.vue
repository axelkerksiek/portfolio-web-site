<template>
  <button
    @click="$emit('toggle')"
    type="button"
    class="
      relative 
      inline-flex 
      h-6 
      w-11 
      items-center 
      rounded-full 
      transition-colors 
      cursor-pointer
    "
    :class="isActive ? activeClass : inactiveClass"
    role="switch"
    :aria-checked="isActive"
    :title="title"
  >
    <span
      class="
        relative
        inline-flex 
        h-4 
        w-4 
        transform 
        items-center 
        justify-center 
        rounded-full 
        shadow-sm
      "
      :class="[
        isActive ? 'translate-x-6' : 'translate-x-1',
        thumbClass
      ]"
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
  thumbClass: 'bg-white dark:bg-dark-primary'
})

defineEmits<Emits>()
</script>