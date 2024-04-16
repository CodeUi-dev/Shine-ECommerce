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
		this.loadSwagger()
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

	private loadSwagger() {
		const swaggerUi = require('swagger-ui-express')
		const swaggerDoc = require('./docs/swagger.json')

		this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
	}
}

export default Server