export function getAuthFrom() {
  return `
  <form class="mui-form" id="auth-form">
    <div class="mui-textfield mui-textfield--float-label">
      <input id="email" type="email" required>
      <label for="email">Email</label>
    </div>
    <div class="mui-textfield mui-textfield--float-label">
      <input id="password" type="password" required>
      <label for="password">Пароль</label>
    </div>
    <button class="mui-btn mui-btn--raised mui-btn--primary" type="submit">Войти</button>
  </form>
  `
}

export function authWithEmailAndPassword(email, password) {
  const apiKey = "AIzaSyAWCwF5St4BRsHxecWYRk0WR5SZGzzxzs0"
  return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
    method: 'POST',
    body: JSON.stringify({
      email, password,
      returnSecureToken: true
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => data.idToken)
}