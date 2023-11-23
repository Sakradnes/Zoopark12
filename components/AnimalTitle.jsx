const React = require('react');
const Layout = require('./Layout');

function AnimalTitle({ animal }) {
  return (
    <div>
      <img src="" />
      <h1>{animal.name}</h1>
      <p>{animal.description}</p>
      <button
        type="button"
        className="btn btn-warning js-btn-remove"
        style={{ marginLeft: '10px' }}
      >
        <a href={`/animals/update/${animal.id}`}>Изменить</a>
      </button>
    </div>
  );
}

module.exports = AnimalTitle;
