const nav = document.querySelector('.nav')

window.addEventListener('scroll', fixNav)

function fixNav() {
  nav.classList[window.scrollY > nav.offsetHeight + 150 ? 'add' : 'remove'](
    'active'
  )
}
