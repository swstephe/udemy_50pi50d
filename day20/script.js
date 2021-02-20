//  <span class="circle" style="top: 27px; left: 82px;"></span>
const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
  button.addEventListener('click', function (e) {
    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = `${e.clientY - e.target.offsetTop}px`
    circle.style.left = `${e.clientX - e.target.offsetLeft}px`
    this.appendChild(circle)
    setTimeout(() => circle.remove(), 500)
  })
})
