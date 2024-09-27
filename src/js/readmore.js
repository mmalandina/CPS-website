const buttonRead = document.querySelector('.services-text__button')
const hiddenParagraph = document.querySelector(
  '.services-text__paragraph_hidden'
)
const hiddenSpan = document.querySelector('.services-text__paragraph_768hidden')

const toggleButton = function (button) {
  button.classList.toggle('services-text__button--active')
  button.innerHTML = button.classList.contains('services-text__button--active')
    ? 'Скрыть'
    : 'Читать далее'
}

function readMore() {
  hiddenParagraph.classList.toggle('services-text__paragraph_hidden--active')
  hiddenSpan.classList.toggle('services-text__paragraph_768hidden--active')
  toggleButton(buttonRead)
}

buttonRead.addEventListener('click', readMore)
