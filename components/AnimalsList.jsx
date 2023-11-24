const React = require('react');
const Layout = require('./Layout');
const Animal = require('./AnimalOne');

const AddAnimal = require('./AddAnimal');

function AnimalsList({ title, animals }) {
  return (
    <Layout title={title}>


      <div id="ADD">
        <h1>Добавить животное</h1>
      </div>

 


      <AddAnimal />
      <div className="animalContainer">
        {animals.map((animal) => (
          <Animal key={animal.id} animal={animal} />
        ))}
      </div>

    </Layout>
  );
}

module.exports = AnimalsList;
