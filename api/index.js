const express = require('express');
const jsonParser = require('body-parser').json();
const app = express();
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const fileUpload = require('express-fileupload');

require('dotenv').config();

// Client used to upload files to S3.
const client = new S3Client({ 
   region: process.env.AWS_S3_REGION,
   credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
   }
});

const sequelize_initializer = require('./src/db');
const sequelize = sequelize_initializer();

const sequelizeModels = require('./src/models');
for (const model of sequelizeModels) {
   const {modelName, attributes, options} = model;
   sequelize.define(modelName, attributes, options)
}

const clientPort = process.env.CLIENT_PORT;

// 'express-fileupload' makes the uploaded files available under req.files
// for 'multipart/form-data' requests.
app.use(fileUpload({
   createParentPath: true
}));

app.use((req, res, next) => {
   res.set({
      'Access-Control-Allow-Origin': `http://localhost:${clientPort}`,
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST'
   });
   next();
});

app.post('/products', async (req, res) => {

   // Add Product row.
   const parsedProductData = JSON.parse(req.body.productData);
   const ProductModel = sequelize.models.Product;
   await ProductModel.create(parsedProductData);

   // Upload image to S3.
   const command = new PutObjectCommand({
      Body: req.files.image.data,
      Bucket: process.env.AWS_S3_BUCKET,
      ContentType: req.files.image.mimetype,
      Key: req.files.image.name,
   });
   await client.send(command);

   // Return response.
   res.send('Finished.');

});

app.get('/', (req, res) => {
   res.send("This is Dylan's E-Commerce backend. 2021/08/22.")
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

