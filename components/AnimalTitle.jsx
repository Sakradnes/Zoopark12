const React = require('react');
const Layout = require('./Layout');

function AnimalTitle({ animal }) {
  return (
    <Layout>
      <div className='fon'>
        <h1 className="animal-name">{animal.name}</h1>

        <p className='text-animal'>{animal.description}</p>
        <button
          type="button"
          className="btn btn-warning js-btn-remove"
          style={{ marginLeft: '10px' }}
        >
          <a className='a1' href={`/animals/update/${animal.id}`}>Изменить</a>
        </button>
      </div>
    </Layout>
  );
}

module.exports = AnimalTitle;
