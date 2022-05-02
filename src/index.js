import { Question } from './plugins/question.js'
import { createModal, isValid } from './plugins/utils.js'
import { getAuthFrom } from './plugins/auth.js'
import '@styles/scss/styles.scss'

const form = document.getElementById('form')
const modalBtn = document.getElementById('modal-btn')
const input = form.querySelector('#question-input')
const submitBtn = form.querySelector('#submit')

window.addEventListener('load', Question.renderList) //при F5 не исчезает список вопросов(из LocalStorage)
form.addEventListener('submit', submitForHandler)
modalBtn.addEventListener('click', openModal)
input.addEventListener('input', () => {
  submitBtn.disabled = !isValid(input.value)
})

function submitForHandler(event) {
  event.preventDefault() //чтобы форма не перезагружалась

  if (isValid(input.value)) {
    const question = {
      text: input.value.trim(),
      date: new Date().toJSON()
    }

    submitBtn.disabled = true
    //Асинхронный запрос на сервер для сохранения вопроса
    Question.create(question).then(() => {
      input.value = ''
      input.className = ''
      submitBtn.disabled = false
    })
  }
}

function openModal(event) {
  createModal('Авторизация', getAuthFrom())
  document
    .getElementById('auth-form')
    .addEventListener('submit', authFormHandler, { once: true })
}

function authFormHandler(event) {
  event.preventDefault()
  //логика по авторизации
  const email = event.target.querySelector('#email').value
  const password = event.target.querySelector('#password').value

  console.log(email, password)
}