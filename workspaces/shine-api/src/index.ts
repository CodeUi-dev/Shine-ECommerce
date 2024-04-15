import Server from "./server";

(async () => {
	const server = new Server()
	server.init()
	server.listen()
})()