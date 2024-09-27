const closeFeedback = document.querySelector('.modal__feedback-close')
const feedback = document.querySelector('.modal-feedback')
const fogFeedback = document.querySelector('.overlay--feedback')

function modalFeedback() {
  feedback.classList.toggle('modal-feedback--active')
  fogFeedback.classList.toggle('overlay--active')
}

const feedbackModalButton = document.querySelectorAll('.feedback-button')
feedbackModalButton.forEach((button) => {
  button.addEventListener('click', modalFeedback)
})
closeFeedback.addEventListener('click', modalFeedback)
fogFeedback.addEventListener('click', modalFeedback)
