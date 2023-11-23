const React = require('react');
const Layout = require('./Layout');

function AddAnimal() {
  return (
    <div>
      <form id="addAnimal">
        <input name="name" />
        <input name="description" />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}
module.exports = AddAnimal;
