const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    document
      .querySelectorAll('.panel.active')
      .forEach(panel => panel.classList.remove('active'))
    panel.classList.add('active')
  })
})
