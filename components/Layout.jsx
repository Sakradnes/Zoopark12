/* eslint-disable react/prop-types */
const React = require('react');
const NavBar = require('./NavBar');

module.exports = function Layout({ title, children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=Pixelify+Sans&family=Roboto+Mono&family=Young+Serif&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/css/style.css" />
        <script defer src="/script/login.js" />
        <script defer src="/script/animalScript.js" />
        <script defer src="/script/removeScript.js" />
        <title>{title}</title>
      </head>

      <body>{children}</body>
    </html>
  );
};
