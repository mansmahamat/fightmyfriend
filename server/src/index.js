const express = require('express');
const app = express();
const port = 5000;

app.get('/', (res, req) => res.send('Hello Mans'));
app.listen(port);

console.log('Carré')