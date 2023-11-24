const React = require('react');
const Layout = require('./Layout');
const Animal = require('./AnimalOne');

const AddAnimal = require('./AddAnimal');

function AnimalsList({ title, animals }) {
  return (
    <Layout title={title}>

      <AddAnimal />
      <div className="animalContainer">



        {animals.map((animal) => (
          <Animal key={animal.id} animal={animal} />
        ))}
      </div>

      <div id='addAnimal'><h1>Добавить животное</h1></div>

      <h1 className='add'>Добавить животных</h1>

      <AddAnimal />
    </Layout>
  );
}

module.exports = AnimalsList;
