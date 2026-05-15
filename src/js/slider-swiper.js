// Слайдер
import Swiper from 'swiper/bundle'

let swiperInstance = null

function manageSlider() {
  const width = window.innerWidth

  if (width < 768) {
    if (!swiperInstance) {
      swiperInstance = new Swiper('.services__swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
          el: '.services__slider-pagination',
          clickable: true
        }
      })
    }
  } else {
    if (swiperInstance) {
      swiperInstance.destroy(true, true)
      swiperInstance = null
    }
  }
}

// Слушаем изменение размера окна
window.addEventListener('resize', manageSlider)
// Запускаем при загрузке
manageSlider()

// const swiper = new Swiper('.services__slider', {
//   slidesPerView: 'auto',
//   spaceBetween: 16,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true
//   }
// })
