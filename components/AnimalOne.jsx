const React = require('react');
const Layout = require('./Layout');

function GetAnimal({ animal }) {
  return (
    <Layout>
      <div>
        <img src = {animal.url}/>
        <a
          className="a1"
          href={`/categories/${animal.categoryId}/animals/${animal.id}`}
        >
          <p>{animal.name}</p>
        </a>
      </div>
    </Layout>
  );
}

module.exports = GetAnimal;
