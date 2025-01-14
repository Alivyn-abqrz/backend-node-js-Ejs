const express = require('express');
const bodyParser = require('body-parser');
const path =   require('path');

const app = express();

// front end
app.engine('html', require('ejs').renderFile);
app.set('view engine', "html");
app.set("views" , path.join(__dirname, "../frontend/views"));

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

const appRoute = require('./routes/app')
app.use('/', appRoute)
 
// const indexRoute = require('./routes')
// routes
// app.use('/first',indexRoute );
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
}) ;