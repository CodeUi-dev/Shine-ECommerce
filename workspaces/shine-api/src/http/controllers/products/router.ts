import { Application } from "express";
import createProduct from "./createProduct.controller";
import deleteProduct from "./deleteProduct.controller";
import getAllProducts from "./getAllProducts.controller";
import getOneProduct from "./getOneProduct.controller";
import updateProduct from "./updateProduct.controller";

const loadProductsRouter = (app: Application) => {
	app.get('/products', getAllProducts)
	app.get('/products/:productId', getOneProduct)

	app.post('/products', createProduct)

	app.put('/products/:productId', updateProduct)

	app.delete('/products/:productId', deleteProduct)
}

export default loadProductsRouter