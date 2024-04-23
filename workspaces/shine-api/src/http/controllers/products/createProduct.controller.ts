import { Request, Response } from 'express'
import crypto from 'node:crypto'
import { ZodError, z } from 'zod'
import { dataSource } from '../../../db/dataSource'
import Product from '../../../db/entity/product'
import ProductPrice from '../../../db/entity/productPrice'

const createProduct = async (req: Request, res: Response) => {
	try {
		const bodySchema = z.object({
			name: z.string(),
			description: z.string().optional(),
			price: z.object({
				model: z.enum(['one-off', 'recurring']),
				currency: z.enum(['BRL', 'USD']),
				amount: z.number()
			})
		})

		const body = bodySchema.parse(req.body)
	
		const p = new Product()
		p.product_id = crypto.randomUUID()
		p.name = body.name
		p.description = body.description
	
		const dbProduct = await dataSource.manager.save(p)

		const pPrice = new ProductPrice()
		pPrice.product_price_id = crypto.randomUUID()
		pPrice.price_model = body.price.model
		pPrice.currency = body.price.currency
		pPrice.amount = body.price.amount * 100
		pPrice.product = p

		await dataSource.manager.save(pPrice)
	
		res.status(201).send({ product: dbProduct })
	} catch (e) {
		if(e instanceof ZodError) {
			return res
				.status(400)
				.send({ message: e.errors })
		}

		throw e
	}
}

export default createProduct