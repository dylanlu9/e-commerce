const express = require('express');
const app = express();

require('dotenv').config();

const Sequelize = require('sequelize');
const DB_DIALECT = process.env.DB_DIALECT;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const sequelize = new Sequelize(`${DB_DIALECT}://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
   logging: (msg) => {
      console.log(`\n${msg}\n`);
   }
});

app.get('/', (req, res) => {
   res.send("This is Dylan's E-Commerce backend.")
});

sequelize.sync({
   force: true
})
   .then(() => {
      const ourPort = 3001;
      app.listen(ourPort, () => {
         console.log(`E-commerce backend listening at http://localhost:${ourPort}`);
      });
   });
