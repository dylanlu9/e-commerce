const express = require('express');
const app = express();

const Sequelize = require('sequelize');

app.get('/', (req, res) => {
   res.send("This is Dylan's E-Commerce backend.")
});

const ourPort = 3001;
app.listen(ourPort, () => {
   console.log(`E-commerce backend listening at http://localhost:${ourPort}`);
});
