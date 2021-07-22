const express = require('express');
const app = express();

require('dotenv').config();

const sequelize_initializer = require('./src/db');
const sequelize = sequelize_initializer();

const sequelizeModels = require('./src/models');
for (const model of sequelizeModels) {
   const {modelName, attributes, options} = model;
   sequelize.define(modelName, attributes, options)
}

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
