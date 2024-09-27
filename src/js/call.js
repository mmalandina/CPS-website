const modal = document.querySelector('.modal')
const closeCall = document.querySelector('.modal__call-close')
const call = document.querySelector('.modal-call')
const fogCall = document.querySelector('.overlay--call')

function modalCall() {
  modal.classList.toggle('modal--active')
  call.classList.toggle('modal-call--active')
  fogCall.classList.toggle('overlay--active')
}

const callModalButton = document.querySelectorAll('.call-button')
callModalButton.forEach((button) => {
  button.addEventListener('click', modalCall)
})

closeCall.addEventListener('click', modalCall)
fogCall.addEventListener('click', modalCall)
