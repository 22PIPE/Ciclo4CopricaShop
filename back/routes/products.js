const express = require("express")
const router = express.Router();

const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} = require("../controllers/productsController") //traemos la respuesta json desde el controlador

router.route('/productos').get(getProducts) //Establecemos desde que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(newProduct); //Establecemos la ruta para crear un producto
router.route('/producto/:id').get(getProductById); //Establecemos la ruta para buscar un producto por su id
router.route('/producto/:id').put(updateProduct); //Establecemos la ruta para actualizar un producto
router.route('/producto/:id').delete(deleteProduct); //Establecemos la ruta para eliminar un producto por id

module.exports = router;