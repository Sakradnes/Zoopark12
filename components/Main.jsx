/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');
// const CategoryPage = require('./CategoryPage');

function Main({ title, animals }) {
  console.log(animals);
  return (
    <Layout title={title}>
      <div className="cont">
        <h3>Main Page</h3>
        <img src="https://n1s2.hsmedia.ru/50/e1/e1/50e1e1b28bdddbc327c91cf2edfe19cf/5000x3591_0xac120004_8013682501677667304.jpeg" alt="" />
        {/* {animals.map((animal) => (
          <div>{animal.name}</div>
        ))} */}
      </div>
    </Layout>
  );
}
module.exports = Main;