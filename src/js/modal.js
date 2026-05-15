// Модал Feedback
let modalFeedbackWindow = document.getElementById('modal-feedback-window')
let feedbackBtn = document.getElementById('feedback-btn-open-modal')
let headerFeedbackBtn = document.getElementById(
  'header-feedback-btn-open-modal'
)
let modalFeedbackBtnClose = document.getElementById('modal-feedback-btn-close')

let bodyOverlay = document.getElementById('body-overlay')

// Функция для закрытия перекрывающего слоя bodyoverlay
let removeBodyOverlay = function () {
  document.body.classList.remove('modal-open')
  bodyOverlay.classList.remove('modal-open')
}

// Функция для Oткрытия модал Feedback
let openModalFeedback = function () {
  modalFeedbackWindow.classList.add('open')
  document.body.classList.add('modal-open')
  bodyOverlay.classList.add('modal-open')
  // Если открыто модал Call - закрыть
  if (modalCallWindow.classList.contains('open')) {
    closeModalCall()
  }
}

// Открытие по кнопкам в меню и header Feedback
feedbackBtn.addEventListener('click', openModalFeedback)
headerFeedbackBtn.addEventListener('click', openModalFeedback)

// Функция для Закрытия модал Feedback
let closeModalFeedback = function () {
  modalFeedbackWindow.classList.remove('open')
}

// Закрытие по кнопке "крестик" Feedback
modalFeedbackBtnClose.addEventListener('click', function () {
  closeModalFeedback()
  removeBodyOverlay()
})

// Закрытие по клику на основной контейнер Feedback
bodyOverlay.addEventListener('click', function () {
  // Проверяем, открыто ли Feedback, прежде чем закрывать
  if (modalFeedbackWindow.classList.contains('open')) {
    closeModalFeedback()
    removeBodyOverlay()
  }
})

// Кнопка модал Call
let modalCallWindow = document.getElementById('modal-call-window')
let callBtn = document.getElementById('call-btn-open-modal')
let headerCallBtn = document.getElementById('header-call-btn-open-modal')
let modalCallBtnClose = document.getElementById('modal-call-btn-close')

// Функция для Открытия модал Call
let openModalCall = function () {
  modalCallWindow.classList.add('open')
  document.body.classList.add('modal-open')
  bodyOverlay.classList.add('modal-open')
  // Если открыто модал Feedback - закрыть
  if (modalFeedbackWindow.classList.contains('open')) {
    closeModalFeedback()
  }
}

// Открытие по кнопкам в меню и header Call
callBtn.addEventListener('click', openModalCall)
headerCallBtn.addEventListener('click', openModalCall)

// Функция для Закрытия модал Call
let closeModalCall = function () {
  modalCallWindow.classList.remove('open')
}

// Закрытие по кнопке "крестик" Call
modalCallBtnClose.addEventListener('click', function () {
  closeModalCall()
  removeBodyOverlay()
})

// Закрытие по клику на основной контейнер Call
bodyOverlay.addEventListener('click', function () {
  // Проверяем, открыто ли Call, прежде чем закрывать
  if (modalCallWindow.classList.contains('open')) {
    closeModalCall()
    removeBodyOverlay()
  }
})
