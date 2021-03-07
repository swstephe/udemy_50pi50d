const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
  slides.forEach(slide => slide.classList.remove('active'))
  slides[activeSlide].classList.add('active')
}

rightBtn.addEventListener('click', () => {
  activeSlide = activeSlide < slides.length - 1 ? activeSlide + 1 : 0
  setBgToBody()
  setActiveSlide()
})

leftBtn.addEventListener('click', () => {
  activeSlide = activeSlide > 0 ? activeSlide - 1 : slides.length - 1
  setBgToBody()
  setActiveSlide()
})

setBgToBody()
