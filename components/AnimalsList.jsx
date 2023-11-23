const React = require('react');
const Layout = require('./Layout');
const Animal = require('./AnimalOne');

const AddAnimal = require('./AddAnimal')

function AnimalsList({ title, animals }) {
  return (
    <Layout title={title}>
      <AddAnimal />
      <div>
        {animals.map((animal) => (
          <Animal key={animal.id} animal={animal} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = AnimalsList;
