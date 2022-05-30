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

// STORAGE
let storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});
const upload = multer({ storage: storage });
// PRODUCTOS
productos.use("/", require("./src/DAOS/productos/productosDaosArchivos"));
productos.use("/:num", require("./src/DAOS/productos/productosDaosArchivos"));
// CARRITO
carrito.use("/", require("./src/DAOS/carrito/carritoDaosArchivo"));