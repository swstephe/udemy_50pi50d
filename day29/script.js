const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

loveMe.addEventListener('click', e => {
  if (clickTime === 0) {
    clickTime = new Date().getTime()
  } else {
    const newTime = new Date().getTime()
    if (newTime - clickTime < 800) {
      createHeart(e)
      clickTime = 0
    } else {
      clickTime = newTime
    }
  }
})

const createHeart = e => {
  const heart = document.createElement('i')
  heart.classList.add('fas')
  heart.classList.add('fa-heart')
  heart.style.top = `${e.clientY - e.target.offsetTop}px`
  heart.style.left = `${e.clientX - e.target.offsetLeft}px`

  loveMe.appendChild(heart)
  times.innerHTML = (++timesClicked).toString()
  setTimeout(() => heart.remove(), 1000)
}
