const password = document.getElementById('password')
const background = document.getElementById('background')

password.addEventListener('input', e => {
  const length = e.target.value.length
  const blurValue = 20 > length * 2 ? 20 - length * 2 : 0
  background.style.filter = `blur(${blurValue}px)`
})
