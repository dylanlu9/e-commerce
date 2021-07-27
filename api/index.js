const express = require('express');
const jsonParser = require('body-parser').json();
const app = express();

require('dotenv').config();

const sequelize_initializer = require('./src/db');
const sequelize = sequelize_initializer();

const sequelizeModels = require('./src/models');
for (const model of sequelizeModels) {
   const {modelName, attributes, options} = model;
   sequelize.define(modelName, attributes, options)
}

const clientPort = process.env.CLIENT_PORT;
app.use((req, res, next) => {
   res.set({
      'Access-Control-Allow-Origin': `http://localhost:${clientPort}`,
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST'
   });
   next();
});

app.get('/', (req, res) => {
   res.send("This is Dylan's E-Commerce backend.")
});

app.post('/products', jsonParser, async (req, res) => {
   const ProductModel = sequelize.models.Product;
   await ProductModel.create(req.body);
   res.send('Product creation process ended.');
});

sequelize.sync({
   force: true
})
   .then(() => {
      const serverPort = process.env.SERVER_PORT;
      app.listen(serverPort, () => {
         console.log(`E-commerce backend listening at http://localhost:${serverPort}`);
      });
   });
