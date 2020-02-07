const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World, I am Radu. How are you? Good');
});

app.listen(3000);
