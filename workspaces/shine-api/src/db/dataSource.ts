import "reflect-metadata"
import { DataSource } from "typeorm"
import env from "../utils/env"

export const dataSource = new DataSource({
	type: "postgres",
	host: env.DB_HOST,
	port: env.DB_PORT,
	username: env.DB_USERNAME,
	password: env.DB_PASSWORD,
	database: env.DB_DATABASE,
	entities: [__dirname + "/entity/*.{js,ts}"],
	migrations: [__dirname + "/migration/*.{js,ts}"],
	migrationsRun: true
})

export const connectToDatabase = async () => {
	try {
		await dataSource.initialize()
		console.log('Succefully connected to Database')
	} catch(err) {
		console.log('Error in connecting to Database: ', err)
		throw err
	}
}