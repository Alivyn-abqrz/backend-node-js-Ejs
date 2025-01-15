const express = require('express');
const bodyParser = require('body-parser');
const path =   require('path');
const serveStatic = require('serve-static');

const app = express();

// front end
// app.engine('ejs', require('ejs').renderFile);
app.set('view engine', "ejs");
app.set("views" , path.join(__dirname, "../frontend/views"));
// static ejs
// Use path.join or path.resolve to construct the path
const staticPath = path.join(__dirname, '../frontend/static');
app.use('/static', express.static(staticPath));

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