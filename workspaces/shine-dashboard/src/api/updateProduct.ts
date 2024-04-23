import axiosInstance from "@/lib/axios"

const apiUpdateProduct = async (): Promise<void> => {
	return await axiosInstance.put('/products')
}

export default apiUpdateProduct