import { Request, Response } from 'express'
import { dataSource } from '../../../db/dataSource'
import Product from '../../../db/entity/product'

const getAllProducts = async (req: Request, res: Response) => {
	const productRepo = dataSource.getRepository(Product)

	res
		.status(200)
		.json({
			data: await productRepo.find()
		})
}

export default getAllProducts