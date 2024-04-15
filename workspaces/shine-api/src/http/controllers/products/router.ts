import { Application } from "express";
import createProduct from "./createProduct.controller";
import getAllProducts from "./getAllProducts.controller";

const loadProductsRouter = (app: Application) => {
	app.get('/products', getAllProducts)
	app.post('/products', createProduct)
}

export default loadProductsRouter