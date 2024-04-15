import { Request, Response } from 'express'
import { TypeORMError } from 'typeorm'
import { ZodError, z } from 'zod'
import { dataSource } from '../../../db/dataSource'
import Product from '../../../db/entity/product'
import EFormalityLevel from '../../../enum/EFormalityLevel'

const updateProduct = async (req: Request, res: Response) => {
	try {		
		const bodySchema = z.object({
			name: z.string(),
			formalityLevel: z.enum(['formal', 'informal', 'party']),
			is_menswear: z.boolean(),
			is_womenswear: z.boolean(),
			is_kidswear: z.boolean()
		})

		const body = bodySchema.parse(req.body)
		const productId = z.string().parse(req.params.productId)

		const productRepo = dataSource.getRepository(Product)
		const dbProduct = await productRepo.findOneByOrFail({ id: productId })

		dbProduct.name = body.name
		dbProduct.formality_level = body.formalityLevel as EFormalityLevel
		dbProduct.is_menswear = body.is_menswear
		dbProduct.is_womenswear = body.is_womenswear
		dbProduct.is_kidswear = body.is_kidswear
	
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