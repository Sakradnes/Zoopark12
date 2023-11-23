const React = require('react');
const Layout = require('../Layout');

function UpdateFactPage({ title, animal, admin }) {
  return (
    <Layout title={title} animal={animal}>
      <h3>Изменить👇</h3>
      <form className="js-update-form" data-id={animal.id}>
        <div className="mb-3">
          <label className="form-label">
            Животное:
            <input
              type="text"
              className="form-control"
              name="name"
              value={animal.name}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Описание:
            <input
              type="text"
              className="form-control"
              name="description"
              value={animal.description}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Ссылка на изображение
            <input
              type="text"
              className="form-control"
              name="url"
              value={animal.url}
            />
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Отправить 👌
        </button>
      </form>
      <script defer src="/script/update.script.js" />
    </Layout>
  );
}

module.exports = UpdateFactPage;
