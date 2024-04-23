import axiosInstance from "@/lib/axios"
import { ZodError, z } from "zod"

interface IApiCreateProductResponse {
	id: string
	name: string
	description: string
	priceAmount: string
}

const paramsSchema = z.object({
	name: z.string(),
	description: z.string().optional(),
	priceAmount: z.number()
})

type ApiCreateProductParams = z.infer<typeof paramsSchema>

const apiCreateProduct = async (params: ApiCreateProductParams): Promise<IApiCreateProductResponse | undefined> => {
	try {
		const body = paramsSchema.parse(params)
		const apiResponse = await axiosInstance.post<{ product: IApiCreateProductResponse }>(
			'/products',
			{
				name: body.name,
				description: body.description,
				price: {
					model: 'one-off',
					currency: 'BRL',
					amount: body.priceAmount
				}
			}
		)
		return apiResponse.data.product
	} catch(e) {
		if(e instanceof ZodError) {
			return undefined
		}

		throw e
	}
}

export default apiCreateProduct