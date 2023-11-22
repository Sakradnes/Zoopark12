const React = require('react');
const Layout = require('../Layout');

module.exports = function LoginForm() {
  return (
    <Layout title>
      <form style={{ marginTop: '30px' }} className="login-form">
        <h2>Авторизация</h2>
        <div className="mb-3">
          <label className="form-label">
            Email
            <input type="text" className="form-control" name="email" />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Пароль
            <input type="password" className="form-control" name="password" />
          </label>
        </div>
        <button type="submit" className="btn btn-outline-warning">
          Войти
        </button>
      </form>
    </Layout>
  );
};
