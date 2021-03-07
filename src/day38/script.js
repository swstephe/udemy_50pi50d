const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

let current = 0

listItems.forEach((item, idx) => {
  item.addEventListener('click', () => {
    if (current !== idx) {
      listItems[current].classList.remove('active')
      contents[current].classList.remove('show')
      listItems[idx].classList.add('active')
      contents[idx].classList.add('show')
      current = idx
    }
  })
})
