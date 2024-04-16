import { Request, Response } from 'express'
import { dataSource } from '../../../db/dataSource'
import Product from '../../../db/entity/product'

const getAllProducts = async (req: Request, res: Response) => {
	const productRepo = dataSource.getRepository(Product)

	const dbProducts = await (
		await productRepo.find({
			relations: { images: true }
		})
	)
	.map(p => ({
		id: p.id,
		name: p.name,
		formality_level: p.formality_level,
		is_menswear: p.is_menswear,
		is_womenswear: p.is_womenswear,
		is_kidswear: p.is_kidswear,
		thumbnail: p.images[0].url
	}))

	res
		.status(200)
		.json({ data: dbProducts })
}

export default getAllProducts