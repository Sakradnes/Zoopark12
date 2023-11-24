const React = require('react');
const Layout = require('./Layout');

function Tarif({ tarifs, title }) {
  return (
    <Layout title={title}>
      <div>{tarifs.map((tarifs) => (
        
      ))}</div>
    </Layout>
  );
}
