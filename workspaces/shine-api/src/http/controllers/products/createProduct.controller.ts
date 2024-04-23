import { Request, Response } from 'express'
import crypto from 'node:crypto'
import { ZodError, z } from 'zod'
import { dataSource } from '../../../db/dataSource'
import Product from '../../../db/entity/product'

const createProduct = async (req: Request, res: Response) => {
	try {
		const bodySchema = z.object({
			name: z.string(),
			description: z.string().optional()
		})

		const body = bodySchema.parse(req.body)
	
		const p = new Product()
		p.product_id = crypto.randomUUID()
		p.name = body.name
		p.description = body.description
	
		const dbProduct = await dataSource.manager.save(p)
	
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