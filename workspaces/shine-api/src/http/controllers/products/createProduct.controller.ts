import { Request, Response } from 'express'
import crypto from 'node:crypto'
import { ZodError, z } from 'zod'
import { dataSource } from '../../../db/dataSource'
import Product from '../../../db/entity/product'
import EFormalityLevel from '../../../enum/EFormalityLevel'

const createProduct = async (req: Request, res: Response) => {
	try {
		const bodySchema = z.object({
			name: z.string(),
			formalityLevel: z.enum(['formal', 'informal', 'party']),
			is_menswear: z.boolean(),
			is_womenswear: z.boolean(),
			is_kidswear: z.boolean()
		})

		const body = bodySchema.parse(req.body)
	
		const p = new Product()
		p.id = crypto.randomUUID()
		p.name = body.name
		p.formality_level = body.formalityLevel as EFormalityLevel
		p.is_menswear = body.is_menswear
		p.is_womenswear = body.is_womenswear
		p.is_kidswear = body.is_kidswear
	
		await dataSource.manager.save(p)
	
		res.status(201).send()
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