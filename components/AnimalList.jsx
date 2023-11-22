const React = require('react');
const Layout = require('./Layout');
const Animal = require('./Animal');

function AnimalList({ title, animals }) {
  return (
    <Layout title={title}>
      <div>
        {animals.map((animal) => (
          <Animal key={animal.id} animal={animal} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = AnimalList;
