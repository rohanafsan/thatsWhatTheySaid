const express = require("express");
const characterRoutes = require('./routes/routes')
const quoteRoutes = require('./routes/quoteRoutes')
var path = require('path');

const app = express();

const port = 3000;


app.use(express.json())

app.use(express.static('resources'));

app.get('/', (req, res ) => {
  res.sendFile(__dirname + "/index.html");
});

app.use('/characters', characterRoutes);
app.use('/theOfficequotes', quoteRoutes);


app.listen(port, () => console.log(`listening on port ${port}`));
