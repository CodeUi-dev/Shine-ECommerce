import bodyParser from "body-parser"
import express, { Application } from "express"
import morgan from "morgan"
import { connectToDatabase } from "./db/dataSource"
import loadProductsRouter from "./http/controllers/products/router"
import env from "./utils/env"

class Server {
	app: Application

	async init() {
		this.app = express()
		await connectToDatabase()
		this.loadMiddlewares()
		this.loadRoutes()
	}

	listen() {
		this.app.listen(env.PORT, () => console.log(`Shine-Api succefully initialized on port ${env.PORT}.`))
	}

	private loadMiddlewares() {
		this.app.use(morgan('dev'))
		this.app.use(bodyParser.json())
	}

	private loadRoutes() {
		loadProductsRouter(this.app)
	}
}

export default Server