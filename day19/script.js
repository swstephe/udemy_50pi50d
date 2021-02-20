const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const language = 'default'

toggle.addEventListener('click', e => {
  const html = document.querySelector('html')
  if (html.classList.contains('dark')) {
    html.classList.remove('dark')
    e.target.innerHTML = 'Dark mode'
  } else {
    html.classList.add('dark')
    e.target.innerHTML = 'Light mode'
  }
})

function setTime() {
  const time = new Date()
  const month = time.toLocaleString(language, { month: 'short' })
  const day = time.toLocaleString(language, { weekday: 'long' })
  const date = time.toLocaleString(language, { day: 'numeric' })
  const hours = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  hourEl.style.transform = `translate(-50%, -100%) rotate(${
    (360 * hours) / 12
  }deg)`
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${
    (360 * minutes) / 60
  }deg)`
  secondEl.style.transform = `translate(-50%, -100%) rotate(${
    (360 * seconds) / 60
  }deg)`
  timeEl.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`
  dateEl.innerHTML = `${day}, ${month} <span class="circle">${date}</span>`
}

setTime()
setInterval(setTime, 1000)
