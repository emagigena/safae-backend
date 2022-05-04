const express = require('express');
const routerProductos = require('./src/routes/ProductosRoutes');
const routerCarritos = require('./src/routes/CarritosRoutes')
const PORT = 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/api/productos', routerProductos);
app.use('/api/carrito', routerCarritos);

app.listen(PORT,(req,res)=>{
  console.log("Servidor esuchando en el puerto"+PORT);
})