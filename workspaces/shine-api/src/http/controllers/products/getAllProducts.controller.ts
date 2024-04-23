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
		id: p.product_id,
		name: p.name,
		createdAt: p.created_at,
		thumbnail: p.images[0]?.url || undefined
	}))

	res
		.status(200)
		.json({ data: dbProducts })
}

export default getAllProducts