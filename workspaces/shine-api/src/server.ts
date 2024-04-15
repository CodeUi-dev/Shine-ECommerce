import express, { Application } from "express"
import loadProductsRouter from "./http/controllers/products/router"

class Server {
	app: Application

	init() {
		this.app = express()
		this.loadRoutes()
	}

	listen() {
		this.app.listen(3333, () => console.log('Shine-Api succefully initialized on port 3333.'))
	}

	loadRoutes() {
		loadProductsRouter(this.app)
	}
}

export default Server