const express = require('express');
const app = express();

require('dotenv').config();

const sequelize_initializer = require('./src/db');
const sequelize = sequelize_initializer();

const { DataTypes } = require('sequelize');

sequelize.define('Product', {
   title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'No title available',
      unique: true
   },
   category: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Uncategorized'
   },
   description: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'No description available.'
   },
   price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 999999
   },
   imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'placeholder-img-link-here'
   },
   availability: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
   },
   stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
   }
}, {
   tableName: 'products'
});

sequelize.define('Review', {
   title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '-'
   },
   content: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '-'
   },
   stars: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 2.5
   },
   productId: {
      type: DataTypes.INTEGER,
      allowNull: false
   },
   userId: { 
      type: DataTypes.INTEGER,
      allowNull: false
   }
}, {
   tableName: 'reviews'
});

sequelize.define('User', {
   email: {
      type: DataTypes.STRING,
      allowNull: false
   }
}, {
   tableName: 'users'
});

sequelize.define('Order', {
   status: {
      type: DataTypes.ENUM('Created', 'Processed', 'Canceled', 'Completed'),
      allowNull: false,
      defaultValue: 'Created'
   },
   userId: {
      type: DataTypes.INTEGER,
      allowNull: false
   }
}, {
   tableName: 'orders'
});

sequelize.define('OrderLine', {
   productId: {
      type: DataTypes.INTEGER,
      allowNull: false
   },
   quantityOrdered: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
   },
   orderId: {
      type: DataTypes.INTEGER,
      allowNull: false
   }
}, {
   tableName: 'orderlines'
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
