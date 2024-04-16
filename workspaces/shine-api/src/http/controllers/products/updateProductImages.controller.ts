import { Request, Response } from 'express'
import path from 'node:path'
import { z } from 'zod'
import tmpFolderPath from '../../../constants/tmpFolderPath'
import { dataSource } from '../../../db/dataSource'
import Product from '../../../db/entity/product'
import ProductImage from '../../../db/entity/productImage'
import GoogleStorage from '../../../libs/googleCloudStorage'

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
		const gStorage = new GoogleStorage()
		const newProductImages: ProductImage[] = []

		for(const { filename } of image) {
			const imageUrl = await gStorage.uploadProductImage({
				filename,
				filepath: path.resolve(tmpFolderPath, filename),
				productName: dbProduct.name
			})

			const pImage = new ProductImage()
			pImage.url = imageUrl
			pImage.product = dbProduct

			newProductImages.push(pImage)
		}

		await productImageRepo.save(newProductImages)

		res.status(201).send()
	} catch (e) {
		throw e
	}
}

export default updateProductImages