export default ({html, preloadedState }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>React mentoring App</title>
        <link rel="stylesheet" href="/built/main.css" />
      </head>
      
      <body>
        <div id="root">${html}</div>
      </body>
      <script>
      // WARNING: See the following for security issues around embedding JSON in HTML:
      // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script src="/built/bundle.js"></script>
    </html>
  `;
};