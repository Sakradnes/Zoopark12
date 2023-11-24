const React = require('react');
const Layout = require('./Layout');

function AddAnimal({category}) {
  console.log(category,'---')
  return (
    <Layout>
      <div>
        <form id="addAnimal">
          <input className="input1" name="name" placeholder='name'/>
          <input className="input1" name="description"  placeholder='description'/>
          <input className="input1" name="categoryId" value={category} />
          <input className="input1" name="url" placeholder='url'/>
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
