<script setup>
  import './styles/styles.scss'
  import SocialBanner from './components/SocialBanner.vue'
  import Card from './components/Card.vue'
  import userCounter from './hooks/counter'

  const { ready, seconds, minutes, hours, days } = userCounter()
  ready()
</script>

<template>
  <header>
    <h1 class="title">we're launching soon</h1>
  </header>
  <main>
    <section
      class="countdown"
      role="timer"
      aria-live="polite"
      :aria-label="`Time left ${days} days ${hours} hours ${minutes} minutes`"
    >
      <Card :value="days" label="days" />
      <Card :value="hours" label="hours" />
      <Card :value="minutes" label="minutes" />
      <Card :value="seconds" label="seconds" />
    </section>
  </main>
  <footer>
    <SocialBanner />
  </footer>
</template>

<style lang="scss">
  @import './styles/mixins.scss';

  .title {
    margin: 0;
    font-size: var(--font-size-title);
    letter-spacing: var(--title-letter-spacing);
    line-height: 1.4rem;
    width: 100%;
    text-align: center;
    padding: 10.4rem 1.2rem 4rem;
    color: var(--white);
    box-sizing: border-box;
  }
  .countdown {
    @include flex;
    margin: 0 auto;
    gap: 1rem;
  }

  @media screen and (min-width: 600px) {
    .title {
      padding: 10rem 0 7.9rem;
    }
    .countdown {
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      gap: 2.7rem;
    }
  }
</style>
