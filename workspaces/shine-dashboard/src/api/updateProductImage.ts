import axiosInstance from "@/lib/axios"

interface IApiUpdateProductParams {
	productId: string
	images: File[]
}

const apiUpdateProductImage = async ({ productId, images }: IApiUpdateProductParams): Promise<void> => {
	return await axiosInstance.patch(`/products/images/${productId}`)
}

export default apiUpdateProductImage