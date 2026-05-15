// Кнопка "Показать/Скрыть" для devices
let devicesItems = document.querySelectorAll(
  '#services-devices-items > .services__slide.hidden'
)
let devicesBtn = document.getElementById('services__btn--show-all-devices')

let addNewDevicesItems = function (item) {
  devicesBtn.addEventListener('click', function () {
    if (item.classList.contains('hidden')) {
      item.classList.remove('hidden')
      devicesBtn.classList.add('btn--show-all-info--opened')
      devicesBtn.textContent = 'Скрыть'
    } else {
      item.classList.add('hidden')
      devicesBtn.classList.remove('btn--show-all-info--opened')
      devicesBtn.textContent = 'Показать все'
    }
  })
}

for (let i = 0; i < devicesItems.length; i++) {
  addNewDevicesItems(devicesItems[i])
}
