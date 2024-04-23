import axiosInstance from "@/lib/axios"

interface IProductWithLowInfo {
	"id": string
	"name": string
	"formality_level": 'formal' | 'informal' | 'party'
	"is_menswear": boolean
	"is_womenswear": boolean
	"is_kidswear": boolean
	"createdAt": string
	"thumbnail": string
}

const getAllProducts = async (): Promise<IProductWithLowInfo[]> => {
	return (await axiosInstance.get<{ data: IProductWithLowInfo[] }>('/products')).data.data
}

export default getAllProducts