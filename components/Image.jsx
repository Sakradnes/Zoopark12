const React = require('react');

function getImage({ imgAnimal }) {
  return (
    <div>
      <p>{imgAnimal.url}</p>
    </div>
    
  );
}

module.exports = getImage;
