const express = require('express');
const bodyParser = require('body-parser');

const app = express()
// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

const indexRoute = require('./routes/index')
// routes
app.use('/first',indexRoute );
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
}) 