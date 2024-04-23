import { Request, Response } from 'express'
import { TypeORMError } from 'typeorm'
import { ZodError, z } from 'zod'
import { dataSource } from '../../../db/dataSource'
import Product from '../../../db/entity/product'

const updateProduct = async (req: Request, res: Response) => {
	try {		
		const bodySchema = z.object({
			name: z.string(),
			description: z.string().optional()
		})

		const body = bodySchema.parse(req.body)
		const productId = z.string().parse(req.params.productId)

		const productRepo = dataSource.getRepository(Product)
		const dbProduct = await productRepo.findOneByOrFail({ product_id: productId })

		dbProduct.name = body.name
		dbProduct.description = body.description
	
		await productRepo.update(productId, dbProduct)
	
		res.status(204).send()
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

export default updateProduct