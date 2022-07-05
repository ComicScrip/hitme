const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('ok');
});

app.get('/timeout/:time', (req, res) => {
  setTimeout(() => res.send('ok'), req.params.time);
});

app.get('/payload', (req, res) => {
  res.send(
    Array(parseInt(req.query.items || 10, 10))
      .fill()
      .map(() => ({ test: 'test', ...req.query }))
  );
});

app.listen(5000, () => {
  console.log('ready');
});
