import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductsPageContent from "./_components/products/productsPage"

const ProductsPage = () => {
	return (
		<div>
			<Tabs defaultValue="products">
				<TabsList>
					<TabsTrigger value="products">Produtos</TabsTrigger>
				</TabsList>
				<TabsContent value="products">
					<ProductsPageContent />
				</TabsContent>
			</Tabs>
		</div>
	)
}

export default ProductsPage