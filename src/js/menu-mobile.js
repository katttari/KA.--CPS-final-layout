// Кнопка бургер-меню
let burgerMenu = document.getElementById('burger-menu')
let burgerBtn = document.getElementById('burger-menu-btn')
let burgerBtnClose = document.getElementById('burger-menu-btn-close')
let modalCallWindow = document.getElementById('modal-call-window')
let modalFeedbackWindow = document.getElementById('modal-feedback-window')
let bodyOverlay = document.getElementById('body-overlay')

// Функция для закрытия меню
let closeMenu = function () {
  burgerMenu.classList.remove('open')
  bodyOverlay.classList.remove('menu-open')
  document.body.classList.remove('menu-open')
}

// Функция для открытия меню
let openMenu = function () {
  burgerMenu.classList.add('open')
  bodyOverlay.classList.add('menu-open')
  document.body.classList.add('menu-open')
}

// Открытие меню по кнопке в header
burgerBtn.addEventListener('click', openMenu)

// Закрытие по кнопке "крестик"
burgerBtnClose.addEventListener('click', closeMenu)

// Закрытие по клику на основной контейнер
bodyOverlay.addEventListener('click', function () {
  if (
    burgerMenu.classList.contains('open') &&
    !modalCallWindow.classList.contains('open') &&
    !modalFeedbackWindow.classList.contains('open')
  ) {
    closeMenu()
  }
})
