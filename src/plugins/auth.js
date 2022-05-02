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