import axiosInstance from "@/lib/axios"

interface IApiUpdateProductParams {
	id: string
	name: string
	description: string
	price: {
		id: string
		amount: number
	}
}

const apiUpdateProduct = async ({
	id,
	name,
	description,
	price
}: IApiUpdateProductParams): Promise<void> => {
	return await axiosInstance.put(
		`/products/${id}`,
		{
			name,
			description,
			price
		}
	)
}

export default apiUpdateProduct