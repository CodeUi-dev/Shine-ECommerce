import axiosInstance from "@/lib/axios"

interface IProduct {
	product_id: string
	name: string
	description: string
	created_at: string
	images: [],
	prices: []
}

const apiGetProduct = async (productId: string): Promise<IProduct> => {
	return (await axiosInstance.get<{ data: IProduct }>(`/products/${productId}`)).data.data
}

export default apiGetProduct