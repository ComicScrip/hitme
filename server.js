const express = require('express');

const app = express();

let count = 0;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('ok');
});

app.get('/count', (req, res) => {
  res.send(count++);
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
