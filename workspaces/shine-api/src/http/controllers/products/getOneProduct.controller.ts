import { Request, Response } from 'express'
import { TypeORMError } from 'typeorm'
import { ZodError, z } from 'zod'
import { dataSource } from '../../../db/dataSource'
import Product from '../../../db/entity/product'

const getOneProduct = async (req: Request, res: Response) => {
	try {		
		const productId = z.string().parse(req.params.productId)
		const productRepo = dataSource.getRepository(Product)

		const dbProduct = await productRepo.findOne({
			where: { product_id: productId },
			relations: {
				images: true,
				prices: true
			}
		})
	
		res
			.status(200)
			.json({ data: dbProduct })
	} catch (e) {
		if(e instanceof ZodError) {
			return res
				.status(400)
				.send({ message: e.errors })
		}

		if(e instanceof TypeORMError && e.name == 'EntityNotFoundError') {
			return res
				.status(400)
				.send({ message: e.message })
		}

		throw e
	}
}

export default getOneProduct