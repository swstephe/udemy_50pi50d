const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We Love Programming!'
let idx = 1
let speed = 300 / speedEl.value

function writeText() {
  textEl.innerText = text.slice(0, idx)
  idx = (idx < text.length ? idx : 0) + 1
  setTimeout(writeText, speed)
}

speedEl.addEventListener('input', e => (speed = 300 / e.target.value))

writeText()
