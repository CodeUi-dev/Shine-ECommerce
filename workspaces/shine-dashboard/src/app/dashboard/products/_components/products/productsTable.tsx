'use client'

import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { formatDate } from "@/utils/formatter"
import { Ellipsis } from "lucide-react"
import Image from "next/image"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

interface IProduct {
	id: string
	name: string
	createdAt: string
	thumbnail: string
}

const data: IProduct[] = Array.from({ length: 20 }).map((_, i) => ({
	id: i.toString(),
	name: `Vestido ${i}`,
	createdAt: new Date().toISOString(),
	thumbnail: 'https://storage.googleapis.com/codeui-shine-ecommerce/products/72b0dcf2-8488-4e51-852f-9a7c67ef0f1f-white-sundress.jpeg'
}))

const ProductsTable = () => {
	const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

	const handleOnEditProduct = (productId: string) => () => {
		const urlWithParams = new URLSearchParams(searchParams.toString())
		urlWithParams.set('edit', productId)

		router.push(`${pathname}?${urlWithParams.toString()}`)
	}


	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className='w-20'></TableHead>
					<TableHead>Nome</TableHead>
					<TableHead>Criado em</TableHead>
					<TableHead></TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{data.map(d => (
					<TableRow key={d.id}>
						<TableCell>
							<Image
								src={d.thumbnail}
								width={56}
								height={56}
								alt=''
								className='rounded'
							/>
						</TableCell>
						<TableCell className='font-bold'>{d.name}</TableCell>
						<TableCell>{formatDate(new Date(d.createdAt))}</TableCell>
						<TableCell>
							<Popover>
								<div className='flex justify-end'>
									<PopoverTrigger
										className='py-1 px-2 border border-transparent hover:rounded hover:border-gray-400'
									>
										<Ellipsis size={16}/>
									</PopoverTrigger>
								</div>
								<PopoverContent className='flex flex-col gap-2'>
									<Button
										variant='outline'
										onClick={handleOnEditProduct(d.id)}
									>
										Editar produto.
									</Button>
									<Button variant='outline'>Arquivar produto.</Button>
									<Button variant='outline' className='bg-destructive text-destructive-foreground'>Deletar produto.</Button>
								</PopoverContent>
							</Popover>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}

export default ProductsTable