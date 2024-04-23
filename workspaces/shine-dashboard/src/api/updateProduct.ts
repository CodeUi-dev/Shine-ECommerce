import axiosInstance from "@/lib/axios"

interface IApiUpdateProductParams {
	id: string
	name: string
	description: string
}

const apiUpdateProduct = async ({
	id,
	name,
	description
}: IApiUpdateProductParams): Promise<void> => {
	return await axiosInstance.put(
		`/products/${id}`,
		{ name, description }
	)
}

export default apiUpdateProduct