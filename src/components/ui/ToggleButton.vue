<template>
  <button
    @click="$emit('toggle')"
    type="button"
    class="
      relative 
      inline-flex 
      h-6
      w-10
      items-center 
      rounded-full 
      transition-colors 
      cursor-pointer
      border-1 border-text-muted
      hover:border-1 hover:border-text
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
      "
      :class="[
        isActive ? 'translate-x-5' : 'translate-x-[0.25rem]',
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
  thumbClass: 'bg-bg'
})

defineEmits<Emits>()
</script>