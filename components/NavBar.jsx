/* eslint-disable react/prop-types */
const React = require('react');

function NavBar() {
  return (
    <div className="container">
      <a href="/categories">Категории</a>
      <a href="/">Тарифы</a>
      <a href="/">О Нас</a>
    </div>
  );
}
module.exports = NavBar;
