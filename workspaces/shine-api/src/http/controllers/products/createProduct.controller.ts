import { Request, Response } from 'express'
import dataSource from '../../../db/dataSource'
import Product from '../../../db/entity/product'

const createProduct = async (req: Request, res: Response) => {
	const p = new Product()
	p.id = crypto.randomUUID()
	p.name = req.body.name
	p.formality_level = req.body.formalityLevel
	p.is_menswear = req.body.is_menswear
	p.is_womenswear = req.body.is_womenswear
	p.is_kidswear = req.body.is_kidswear

	await dataSource.manager.save(p)

	res.status(201).send()
}

export default createProduct