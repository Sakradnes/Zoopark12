const React = require('react');
const Layout = require('./Layout');

function AddAnimal() {
  return (
    <Layout>
      <div>
        <form id="addAnimal">
          <input className="input1" name="name" />
          <input className="input1" name="description" />
          <input className="input1" name="categoryId" />
          <button className='buttunAdd' type="submit">
            Добавить
          </button>
        </form>
        <div id="errooor"></div>
      </div>
    </Layout>
  );
}
module.exports = AddAnimal;
