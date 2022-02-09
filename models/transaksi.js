'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.customer, {
        foreignkey: "customer_id",
        as: "customer"
      })
      this.hasMany(models.detail_transaksi, {
        foreignkey: "transaksi_id",
        as: "detail_transaksi"
      })
    }
  };
  transaksi.init({
    transaksi_id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    waktu: DataTypes.DATE
  }, {
    sequelize,
    tableName: 'transaksi',
    modelName: 'transaksi',
  });
  return transaksi;
};