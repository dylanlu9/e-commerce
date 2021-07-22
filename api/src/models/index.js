const { DataTypes } = require('sequelize');

const sequelizeModels = [
   {
      modelName: 'Product',
      attributes: {
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
      },
      options: {
         tableName: 'products'
      } 
   },
   {
      modelName: 'Review',
      attributes: {
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
      },
      options: {
         tableName: 'reviews'
      }
   },
   {
      modelName: 'User',
      attributes: {
         email: {
            type: DataTypes.STRING,
            allowNull: false
         }
      },
      options: {
         tableName: 'users'
      }
   },
   {
      modelName: 'Order',
      attributes: {
         status: {
            type: DataTypes.ENUM('Created', 'Processed', 'Canceled', 'Completed'),
            allowNull: false,
            defaultValue: 'Created'
         },
         userId: {
            type: DataTypes.INTEGER,
            allowNull: false
         }
      },
      options: {
         tableName: 'orders'
      }
   },
   {
      modelName: 'OrderLine',
      attributes: {
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
      },
      options: {
         tableName: 'orderlines'
      }
   }
];

module.exports = sequelizeModels;
