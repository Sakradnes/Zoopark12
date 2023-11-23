/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');
const Category = require('./CategoryBack');

function CategoryPage({ categories, title }) {
  return (
    <Layout title={title}>
      <div>
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = CategoryPage;
