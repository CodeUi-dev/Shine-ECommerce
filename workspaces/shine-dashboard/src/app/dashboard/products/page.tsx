'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import CreateProductSheet from "./_components/products/createProductSheet"
import ProductsPageContent from "./_components/products/productsPageContent"

type AvailableTabsType = 'products' | 'coupons'

const availableTabs = [
	{
		value: 'products',
		label: 'Produtos',
		content: <ProductsPageContent />
	},
	{
		value: 'coupons',
		label: 'Cupons',
		content: <p>This is coupons page</p>
	},
] as const

const ProductsPage = () => {
	const [activeTab, setActiveTab] = useState<AvailableTabsType>('products')

	return (
		<>
			<div className='flex justify-between items-center'>
				<h1 className='font-bold text-2xl'>Catalogo de Produtos</h1>

				{activeTab == "products" && <CreateProductSheet />}
			</div>

			<Tabs defaultValue="products" onValueChange={val => setActiveTab(val as AvailableTabsType)}>
				<TabsList>
					{availableTabs.map((tab, i) => (
						<TabsTrigger key={i} value={tab.value}>{tab.label}</TabsTrigger>	
					))}
				</TabsList>
				{availableTabs.map((tab, i) => (
					<TabsContent key={i} value={tab.value}>
						{tab.content}
					</TabsContent>
				))}
			</Tabs>
		</>
	)
}

export default ProductsPage