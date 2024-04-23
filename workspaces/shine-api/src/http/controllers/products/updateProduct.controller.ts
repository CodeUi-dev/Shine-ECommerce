import { Request, Response } from 'express'
import { TypeORMError } from 'typeorm'
import { ZodError, z } from 'zod'
import { dataSource } from '../../../db/dataSource'
import Product from '../../../db/entity/product'
import ProductPrice from '../../../db/entity/productPrice'

const updateProduct = async (req: Request, res: Response) => {
	try {		
		const bodySchema = z.object({
			name: z.string(),
			description: z.string().optional(),
			price: z.object({
				id: z.string(),
				amount: z.coerce.number().min(0.01),
			})
		})

		const body = bodySchema.parse(req.body)
		const productId = z.string().parse(req.params.productId)

		const productRepo = dataSource.getRepository(Product)
		const dbProduct = await productRepo.findOneOrFail({
			where: { product_id: productId }
		})

		dbProduct.name = body.name
		dbProduct.description = body.description
	
		await productRepo.update(productId, dbProduct)

		const productPriceRepo = dataSource.getRepository(ProductPrice)
		const dbProductPrice = await productPriceRepo.findOneOrFail({
			where: {
				product_price_id: body.price.id,
				product: dbProduct,
			}
		})

		dbProductPrice.amount = body.price.amount * 100

		await productPriceRepo.update(body.price.id, dbProductPrice)
	
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