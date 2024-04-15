import express, { Application } from "express"
import morgan from "morgan"
import loadProductsRouter from "./http/controllers/products/router"
import env from "./utils/env"

class Server {
	app: Application

	init() {
		this.app = express()
		this.loadMiddlewares()
		this.loadRoutes()
	}

	listen() {
		this.app.listen(env.PORT, () => console.log(`Shine-Api succefully initialized on port ${env.PORT}.`))
	}

	loadMiddlewares() {
		this.app.use(morgan('dev'))
	}

	loadRoutes() {
		loadProductsRouter(this.app)
	}
}

export default Server