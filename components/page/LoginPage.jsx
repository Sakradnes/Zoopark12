const React = require('react');
const Layout = require('../Layout');

module.exports = function LoginPage({ title }) {
  return (
    <Layout title={title}>
      <form className="formLogin">

        <input className="input2" type="text" name="email" />
        <input className="input2" type="text" name="password" />
        <button type="submit" className="buttonLoga">


          Войти
        </button>
      </form>
    </Layout>
  );
};
