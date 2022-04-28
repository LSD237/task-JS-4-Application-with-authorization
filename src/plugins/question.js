export class Question {
  static create(question) {
    return fetch('https://application-with-authorization-default-rtdb.europe-west1.firebasedatabase.app/question.json', {
      method: 'POST',
      body: JSON.stringify(question),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
  }
}