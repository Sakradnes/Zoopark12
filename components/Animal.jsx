const React = require('react');
const Layout = require('./Layout');

function GetAnimal({ animal }) {
  return (
    <div>
      <p>{animal.name}</p>
    </div>
  );
}

module.exports = GetAnimal;
