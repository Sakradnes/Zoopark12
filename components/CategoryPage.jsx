const React = require('react');
function Category({ category }) {
  return (
    <div>
      <img src={category.url} />
      <a href={`/category}${category.id}`}>
        <h2>{category.name}</h2>
      </a>
    </div>
  );
}

module.exports = Category;
