const bg = document.querySelector('.bg')
const loadText = document.querySelector('.loading-text')

let load = 0
let int = setInterval(blurring, 30)

function blurring() {
  load++
  if (load > 99) {
    clearInterval(int)
  }
  loadText.innerText = `${load}%`
  loadText.style.opacity = -load / 100 + 1
  bg.style.filter = `blur(${(-30 * load) / 100 + 30}px)`
}
