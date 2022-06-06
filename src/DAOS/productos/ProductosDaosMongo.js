const ContenedorMongo = require('../../contenedores/ContenedorMongo')
const userModel = require('../../Models/Productos')

class UserDaosMongo extends ContenedorMongo{
  constructor() {
    super(userModel);
  }

} 

module.exports = { UserDaosMongo }