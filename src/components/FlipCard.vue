<template>
  <article class="counterdown__time">
    <div class="counterdown__card">
      <div
        class="counterdown__digits counterdown__digits--superior"
        :class="{ flip: flip }"
      >
        {{ props.value }}
      </div>
      <div class="counterdown__digits counterdown__digits--inferior">
        {{ props.value }}
      </div>
    </div>
    <h2 class="counterdown__unit">{{ props.label }}</h2>
  </article>
</template>

<script setup>
  import { ref, watch } from 'vue'

  let flip = ref(false)
  let props = defineProps({
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  })

  watch(
    () => props.value,
    () => {
      setTimeout(() => {
        flip.value = true
      }, 375)
      setTimeout(() => {
        flip.value = false
      }, 900)
    }
  )
</script>

<style lang="scss" scoped>
  @import '../styles/mixins.scss';
  .counterdown {
    &__unit {
      font-size: var(--font-size-unit);
      text-align: center;
      letter-spacing: var(--countdown-letter-spacing);
      margin-top: 1rem;
      color: var(--grayish-blue);
    }
    &__card {
      @include size(var(--card-size), calc(var(--card-size) - 0.4rem));
      @include flex;
      border-radius: 4%;
      box-shadow: 0 0.8rem 0 0 hsl(234, 17%, 12%);
      position: relative;
      &::before,
      &::after {
        @include size(10px);
        content: '';
        display: block;
        position: absolute;
        top: 42%;
        border-radius: 50%;
        background-color: #282132;
        z-index: 1;
        overflow: hidden;
      }
      &::before {
        left: -6px;
      }
      &::after {
        right: -6px;
      }
    }
    &__digits {
      @include flex;
      @include absolute;
      color: var(--soft-red);
      font-size: var(--font-size-digits);
      border-radius: inherit;
      box-sizing: border-box;
      backface-visibility: hidden;
      &--superior,
      &--inferior {
        width: 100%;
        height: 50%;
        overflow: hidden;
      }
      &--superior {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        top: 0;
        padding-top: 46%;
        background: #2a2b3c;
      }
      &--inferior {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        top: 50%;
        padding-bottom: 50%;
        background: var(--dark-desaturated-blue);
        transform: rotateX(180);
      }
    }
  }

  @media screen and (min-width: 600px) {
    .counterdown {
      &__unit {
        margin-top: 1.8rem;
      }
      &__card {
        &::before,
        &::after {
          @include size(14px);
          top: 45%;
        }
      }
      &__digits {
        &--superior {
          padding-top: 48%;
        }
      }
    }
  }
</style>
