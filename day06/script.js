const boxes = document.querySelectorAll('.box')

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4

  boxes.forEach(box => {
    box.classList[
      box.getBoundingClientRect().top < triggerBottom ? 'add' : 'remove'
    ]('show')
  })
}

window.addEventListener('scroll', checkBoxes)

checkBoxes()
