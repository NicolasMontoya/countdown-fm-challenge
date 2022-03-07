<template>
  <a :href="props.url" :aria-label="label" :class="props.size">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <slot />
    </svg>
  </a>
</template>

<script setup>
  const props = defineProps({
    size: {
      type: String,
      required: false,
      default: 'medium',
    },
    url: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  })
</script>

<style lang="scss" scoped>
  .small {
    width: 1rem;
    height: 1rem;
  }
  .medium {
    width: 1.7rem;
    height: 1.7rem;
  }
  .big {
    width: 4rem;
    height: 4rem;
  }
</style>
