export function padTwoDigits(num) {
  return num < 0 ? '00' : num < 10 ? `0${num}` : String(num)
}

export function getDate(date) {
  const diff = Date.now() + date.getTime()
  return new Date(diff)
}
