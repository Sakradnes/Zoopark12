/* eslint-disable react/prop-types */
const React = require('react');

function NavBar() {
  return (
    <div>
      <div className="container">
        <a className="a1" href="/categories">
          Животные
        </a>
        <a className="a1" href="/tarif">
          Тарифы
        </a>
       
        <a className="a1" href="/">
          Режим работы
        </a>
      </div>
    </div>
  );
}

module.exports = NavBar;
