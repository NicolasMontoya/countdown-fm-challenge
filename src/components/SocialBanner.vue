<template>
  <div role="contentinfo" aria-label="Social section" class="social-banner">
    <FacebookIcon />
    <PinterestIcon />
    <InstagramIcon />
  </div>
</template>

<script setup>
  import FacebookIcon from './molecules/FacebookIcon.vue'
  import InstagramIcon from './molecules/InstagramIcon.vue'
  import PinterestIcon from './molecules/PinterestIcon.vue'
</script>

<style lang="scss" scoped>
  @import '../styles/mixins.scss';
  .social-banner {
    @include flex;
    gap: 2.2rem;
  }
</style>
