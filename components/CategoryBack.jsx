const React = require('react');
function CategoryBack({ category }) {
  return (
    <div>
      <a href={`/category}${category.id}`}>
        <h2>{category.name}</h2>
      </a>
    </div>
  );
}

module.exports = CategoryBack;
