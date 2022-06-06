const { ContenedorFirebase }  = require("../../contenedores/ContenedorFireBase");

class CarritoDaosFireBase extends ContenedorFirebase{
    constructor(){
        super('carrito');
    }
    async save(carrito = { productos: [] }) {
        return super.save(carrito)
    }
}

module.exports = { CarritoDaosFireBase }