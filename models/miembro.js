'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Miembro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Miembro.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    celular: DataTypes.INTEGER,
    edad: DataTypes.INTEGER,
    oracion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Miembro',
  });
  return Miembro;
};