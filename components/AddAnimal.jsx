const React = require('react');
const Layout = require('./Layout');

function AddAnimal() {
  return (
    <div>
      <form id="addAnimal">
        <input name="name" />
        <input name="description" />
        <input name="categoryId" />
        <button type="submit">Добавить</button>
      </form>
      <div id='errooor'></div>
    </div>
  );
}
module.exports = AddAnimal;
