const React = require('react');
function CategoryBack({ category }) {
  return (
    <div>
      <div>
        <a className="a2" href={`/categories/${category.id}/animals`}>
          {/* <img className='photo' src="https://n1s2.hsmedia.ru/50/e1/e1/50e1e1b28bdddbc327c91cf2edfe19cf/5000x3591_0xac120004_8013682501677667304.jpeg" /> */}
          <img src="" alt="" />
          <h2>{category.name}</h2>
        </a>
      </div>
    </div>
  );
}

module.exports = CategoryBack;
