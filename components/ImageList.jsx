const React = require('react');
const Layout = require('./Layout');
const ImgAnimal = require('./Image');

function ImgAnimalList({ title, imganimals }) {
  return (
    <Layout title={title}>
      <div>
        {imganimals.map((imganimal) => (
          <ImgAnimal key={imganimal.id} imganimal={imganimal} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = ImgAnimalList;
