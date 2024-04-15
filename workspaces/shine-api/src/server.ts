import bodyParser from "body-parser"
import express, { Application } from "express"
import morgan from "morgan"
import dataSource from "./db/dataSource"
import loadProductsRouter from "./http/controllers/products/router"
import env from "./utils/env"

class Server {
	app: Application

	async init() {
		this.app = express()
		await this.connectToDatabase()
		this.loadMiddlewares()
		this.loadRoutes()
	}

	listen() {
		this.app.listen(env.PORT, () => console.log(`Shine-Api succefully initialized on port ${env.PORT}.`))
	}

	private async connectToDatabase() {
		try {
			await dataSource.initialize()
			console.log('Succefully connected to Database')
		} catch(err) {
			console.log('Error in connecting to Database: ', err)
			throw err
		}
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