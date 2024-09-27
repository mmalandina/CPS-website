const sidenavButton = document.querySelector('.sidenav-button')
const closeSidenav = document.querySelector('.sidenav__close-button')
const sidenav = document.querySelector('.sidenav')
const fogSidenav = document.querySelector('.overlay--sidenav')

function burger() {
  sidenav.classList.toggle('sidenav--active')
  fogSidenav.classList.toggle('overlay--active')
}

sidenavButton.addEventListener('click', burger)
closeSidenav.addEventListener('click', burger)
fogSidenav.addEventListener('click', burger)
