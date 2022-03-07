import { computed, reactive } from 'vue'
import { getDate, padTwoDigits } from './utils'

const duration = getDate(new Date(1970, 0, 14, 0, 0, 0)).getTime()
const state = reactive({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
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

  const days = computed(() => padTwoDigits(state.days))
  const hours = computed(() => padTwoDigits(state.hours))
  const minutes = computed(() => padTwoDigits(state.minutes))
  const seconds = computed(() => padTwoDigits(state.seconds))

  return {
    ready,
    days,
    hours,
    minutes,
    seconds,
  }
}
