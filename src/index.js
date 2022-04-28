import { Question } from './plugins/question.js'
import { isValid } from './plugins/utils.js'
import '@styles/scss/styles.scss'

const form = document.getElementById('form')
const input = form.querySelector('#question-input')
const submitBtn = form.querySelector('#submit')

form.addEventListener('submit', submitForHandler)
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