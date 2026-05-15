// Кнопка "Показать/Скрыть" для brands
let brandsItems = document.querySelectorAll(
  '#services-brands-items > .services__slide.hidden'
)
let brandsBtn = document.getElementById('services__btn--show-all-brands')

let addNewBrandsItems = function (item) {
  brandsBtn.addEventListener('click', function () {
    if (item.classList.contains('hidden')) {
      item.classList.remove('hidden')
      brandsBtn.classList.add('btn--show-all-info--opened')
      brandsBtn.textContent = 'Скрыть'
    } else {
      item.classList.add('hidden')
      brandsBtn.classList.remove('btn--show-all-info--opened')
      brandsBtn.textContent = 'Показать все'
    }
  })
}

for (let i = 0; i < brandsItems.length; i++) {
  addNewBrandsItems(brandsItems[i])
}
