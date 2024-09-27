const changeButton = function (button) {
  button.classList.toggle('swiper__dropdown--active')
  button.innerHTML = button.classList.contains('swiper__dropdown--active')
    ? 'Скрыть'
    : 'Показать все'
}

let resize = function (section) {
  let param
  let selector

  if (section === 'brands') {
    param = 6
    selector = 'brands-slider__card--hidden768'
    if (window.matchMedia('(min-width: 1120px)').matches) {
      selector = 'brands-slider__card--hidden1120'
      param = 8
    }
  } else {
    param = 3
    selector = 'tech-slider__card--hidden768'
    if (window.matchMedia('(min-width: 1120px)').matches) {
      selector = 'tech-slider__card--hidden1120'
      param = 4
    }
  }

  return [param, selector]
}

const toggleCards = function (button, cards, section) {
  let arr = resize(section)
  for (let i = arr[0]; i < cards.length; i++) {
    cards[i].classList.toggle(arr[1])
  }
  changeButton(button)
}

const buttonBrands = document.querySelector('.brands .swiper__dropdown')
const cardsBrands = document.querySelectorAll('.brands-slider__card')

buttonBrands.addEventListener('click', function () {
  toggleCards(buttonBrands, cardsBrands, 'brands')
})

const buttonTech = document.querySelector('.tech .swiper__dropdown')
const cardsTech = document.querySelectorAll('.tech-slider__card')

buttonTech.addEventListener('click', function () {
  toggleCards(buttonTech, cardsTech, 'tech')
})