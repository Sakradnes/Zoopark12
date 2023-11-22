'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ CategoryUser }) {
      this.belongsTo(CategoryUser, { foreignKey: 'categoryUserId' });
    }
  }
  Rates.init(
    {
      weekend: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      weekday: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      categoryUserId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'CategoryUsers',
          key: 'id',
        },
        onDelete: 'cascade',
      },
    },
    {
      sequelize,
      modelName: 'Rates',
    }
  );
  return Rates;
};
