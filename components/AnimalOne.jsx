const React = require('react');
const Layout = require('./Layout');

function GetAnimal({ animal }) {
  return (
    <div>
      <a href={`/categories/${animal.categoryId}/animals/${animal.id}`}><p>{animal.name}</p></a>
    
    </div>
  );
}

module.exports = GetAnimal;
