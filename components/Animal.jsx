const React = require('react');
const Layout = require('./Layout');

function GetAnimal({ animal }) {
  console.log(animal);
  return (
    <div>
   
      <a href="">{animal.name}</a>
    </div>
  );
}

module.exports = GetAnimal;
