const React = require('react');
const Layout = require('./Layout');
const Animal = require('./AnimalOne');

const AddAnimal = require('./AddAnimal');

function AnimalsList({ title, animals }) {
  return (
    <Layout title={title}>
      <div >
        {animals.map((animal) => (
          <Animal key={animal.id} animal={animal} />
        ))}
      </div>
      <AddAnimal />
    </Layout>
  );
}

module.exports = AnimalsList;
