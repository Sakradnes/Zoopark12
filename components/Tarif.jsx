/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

function Tarif({ title }) {
  return (
    <Layout title={title}>
      <div className='bigWrapper'>
        <div className="wrapperForTarif">
          <h3>тариф детский - 2500 рублей</h3>
        </div>
        <div className="wrapperForTarif">
          <h3>тариф детский - 7500 рублей</h3>
        </div>
        <div className="wrapperForTarif">
          <h3>тариф детский - 9500 рублей</h3>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Tarif;
