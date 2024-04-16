import { Request, Response } from 'express'
import { z } from 'zod'
import { dataSource } from '../../../db/dataSource'
import Product from '../../../db/entity/product'
import ProductImage from '../../../db/entity/productImage'

const filesSchema = z.object({
	image: z.array(
		z.object({
			fieldname: z.string(),
			originalname: z.string(),
			encoding: z.string(),
			mimetype: z.string(),
			destination: z.string(),
			filename: z.string(),
			path: z.string(),
			size: z.number()
		})
	)
})

const updateProductImages = async (req: Request, res: Response) => {
	try {
		const { image } = filesSchema.parse(req.files)

		const productId = z.string().parse(req.params.productId)
		const productRepo = dataSource.getRepository(Product)
		const productImageRepo = dataSource.getRepository(ProductImage)

		const dbProduct = await productRepo.findOneByOrFail({ id: productId })
		
		const newProductImages = image.map(file => {
			const pImage = new ProductImage()
			pImage.url = file.filename
			pImage.product = dbProduct

			return pImage
		})

		await productImageRepo.save(newProductImages)

		res.status(201).send()
	} catch (e) {
		throw e
	}
}

export default updateProductImages