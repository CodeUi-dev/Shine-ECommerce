import { Application } from "express";
import getAllProducts from "./getAllProducts.controller";

const loadProductsRouter = (app: Application) => {
	app.get('/products', getAllProducts)
}

export default loadProductsRouter