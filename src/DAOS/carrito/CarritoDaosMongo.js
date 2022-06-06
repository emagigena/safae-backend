const { ContenedorMongo}  = require("../../contenedores/ContenedorMongo");
const CarritoModel = require('../../Models/Carrito')

class CarritoDaosMongo extends ContenedorMongo{
  constructor() {
    super(CarritoModel);
  }

} 

module.exports = { CarritoDaosMongo }