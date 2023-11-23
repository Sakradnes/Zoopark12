const React = require('react');
const Layout = require('./Layout');
const Animal = require('./AnimalOne');

function AnimalsList({ title, animals }) {
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

module.exports = AnimalsList;
