const express = require("express");
const characterRoutes = require('./src/routes/routes')
const quoteRoutes = require('./src/routes/quoteRoutes')
const triviaRoutes = require('./src/routes/triviaRoutes')
var path = require('path');

const app = express();

const port = 3000;


app.use(express.json())

app.use(express.static('src/resources'));

app.get('/', (req, res ) => {
  res.sendFile(__dirname + "/index.html");
});

app.use('/characters', characterRoutes);
app.use('/theOfficequotes', quoteRoutes);
app.use('/trivia', triviaRoutes);


app.listen(port, () => console.log(`listening on port ${port}`));
