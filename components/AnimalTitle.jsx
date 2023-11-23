const React = require('react');
const Layout = require('./Layout');

function AnimalTitle({ animal }) {
  return (
    <div>
        <img src=""/>
      <h1>{animal.name}</h1>
      <p>{animal.description}</p>
    </div>
  );
}

module.exports = AnimalTitle;
