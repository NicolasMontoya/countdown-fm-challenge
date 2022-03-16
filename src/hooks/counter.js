import { computed, reactive } from 'vue'
import { getDate } from './utils'

const duration = getDate(new Date(1970, 0, 8, 23, 55, 41)).getTime()
const state = reactive({
  days: 8,
  hours: 23,
  minutes: 55,
  seconds: 41,
})

const updateCountDown = (timer) => {
  const timeLeft = duration - timer
  if (timeLeft < 0) clearInterval(timer)
  state.days = (timeLeft / (24 * 60 * 60 * 1000)) | 0
  state.hours = (timeLeft / (60 * 60 * 1000)) % 24 | 0
  state.minutes = (timeLeft / (60 * 1000)) % 60 | 0
  state.seconds = (timeLeft / 1000) % 60 | 0
}

export default () => {
  const ready = () =>
    setInterval(() => {
      updateCountDown(Date.now())
    }, 1000)

  const days = computed(() => state.days)
  const hours = computed(() => state.hours)
  const minutes = computed(() => state.minutes)
  const seconds = computed(() => state.seconds)

  return {
    ready,
    days,
    hours,
    minutes,
    seconds,
  }
}
