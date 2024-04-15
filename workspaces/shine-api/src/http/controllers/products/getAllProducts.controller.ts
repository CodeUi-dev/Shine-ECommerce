import { Request, Response } from 'express'

const getAllProducts = (req: Request, res: Response) => {
	res
		.status(200)
		.json({ message: 'Hello World!'})
}

export default getAllProducts