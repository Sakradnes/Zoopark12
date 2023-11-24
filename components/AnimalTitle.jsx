const React = require('react');
const Layout = require('./Layout');

function AnimalTitle({ animal, user }) {
  console.log(user);
  return (
    <Layout>
      <div className="animalCard">
        <img src="" />
        <h1>{animal.name}</h1>
        <p>{animal.description}</p>
        {/* {admin && admin.id === animal.adminId && ( */}
        {user && (
          <>
            <button
              type="button"
              className="btn btn-warning js-btn-remove"
              style={{ marginLeft: '10px' }}
            >
              <a href={`/animals/update/${animal.id}`}>Изменить</a>
            </button>

            <button
              data-id={animal.id}
              type="button"
              className="btn btn-danger js-btn-remove delAnimal"
              style={{ marginLeft: '10px' }}
            >
              Удалить
            </button>
          </>
        )}
        {/* )} */}
      </div>
    </Layout>
  );
}

module.exports = AnimalTitle;
