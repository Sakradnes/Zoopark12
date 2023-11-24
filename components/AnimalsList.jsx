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
      <div id='addAnimal'><h1>Добавить животное</h1></div>
      <AddAnimal />
    </Layout>
  );
}

module.exports = AnimalsList;
