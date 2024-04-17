require('dotenv').config()
import Server from "./server";

(async () => {
	const server = new Server()
	await server.init()
	server.listen()
})()