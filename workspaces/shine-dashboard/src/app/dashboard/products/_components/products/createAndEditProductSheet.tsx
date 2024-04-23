import apiCreateProduct from "@/api/createProduct"
import apiUpdateProduct from "@/api/updateProduct"
import apiUpdateProductImage from "@/api/updateProductImage"
import { Button } from "@/components/ui/button"
import { FileInput, FileUploader, FileUploaderContent, FileUploaderItem } from "@/components/ui/file-upload"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { CloudUpload, Paperclip, X } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { DropzoneOptions } from "react-dropzone"
import { useForm } from "react-hook-form"
import { z } from "zod"

const productSchema = z.object({
	name: z.string().min(1),
	description: z.string(),
	image: z.array(z.instanceof(File)).max(8),
	amount: z.coerce.number().min(0.01)
})

type ProductFormType = z.infer<typeof productSchema>

const dropZoneConfig: DropzoneOptions = {
	accept: {
		"image/*": [".jpg", ".jpeg", ".png"],
	},
	multiple: true,
	maxFiles: 8,
	maxSize: 1 * 1024 * 1024,
}

const CreateAndEditProductSheet = () => {
	const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
	const [isOpen, setIsOpen] = useState(false)
	const productForm = useForm<ProductFormType>({
		resolver: zodResolver(productSchema),
		defaultValues: {
			name: '',
			description: '',
			image: [],
			amount: 0
		}
	})

	const isEditing = Boolean(searchParams.get('edit'))

	const createProdutionMutation = useMutation({
		mutationFn: apiCreateProduct
	})

	const updateProduct = useMutation({
		mutationFn: apiUpdateProduct
	})

	const updateProductImageMutation = useMutation({
		mutationFn: apiUpdateProductImage
	})

	useEffect(() => {
		const productIdInUrlParams = searchParams.get('edit')
		if(productIdInUrlParams) {
			setIsOpen(true)
		}
	}, [searchParams])

	useEffect(() => {
		if(!isOpen)
			router.push(pathname)
	}, [isOpen])

	useEffect(() => {
		if(createProdutionMutation.isSuccess)
			productForm.reset()
	}, [createProdutionMutation.isSuccess])

	const handleOnCancel = () => {
		productForm.reset()
		setIsOpen(false)

		router.push(pathname)
	}

	const handleOnSubmit = async (data: ProductFormType) => {
		event?.preventDefault()
		if(!isEditing) {
			await createProdutionMutation.mutate({
				name: data.name,
				description: data.description,
				priceAmount: data.amount
			})
		}

		await new Promise(res => setTimeout(res, 2000))
	}

	return (
		<Sheet open={isOpen}>
			<SheetTrigger asChild>
				<Button onClick={() => setIsOpen(true)}>Criar novo produto</Button>
			</SheetTrigger>
			<SheetContent renderCloseIcon={false}>
				<SheetHeader>
					<div className='flex justify-between items-center'>
						<SheetTitle>Criar um produto</SheetTitle>
						<X
							onClick={() => setIsOpen(false)}
							className='cursor-pointer'
						/>
					</div>
					<Separator />
				</SheetHeader>

				<Form {...productForm}>
					<form className='mt-4 space-y-4' onSubmit={productForm.handleSubmit(handleOnSubmit)}>
						<FormField
							control={productForm.control}
							name='name'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nome (Obrigatorio)</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormDescription>Nome do produto, estara visivel aos clientes.</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={productForm.control}
							name='description'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Descricao</FormLabel>
									<FormControl>
										<Textarea {...field} />
									</FormControl>
									<FormDescription>Aparece na pagina do produto e no pagamento.</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={productForm.control}
							name='image'
							render={({ field: { value, onChange } }) => (
								<FormItem>
									<FormLabel>Imagens</FormLabel>
									<FormControl>
										<FileUploader
											value={value}
											onValueChange={onChange}
											dropzoneOptions={dropZoneConfig}
											className="relative bg-background rounded-lg p-2"
										>
											<FileInput className="outline-dashed outline-1 outline-black">
												<div className="flex items-center justify-center flex-col py-4 w-full">
													<CloudUpload />
													<span>Clique para enviar ou arraste e solte aqui</span>
												</div>
											</FileInput>
											<FileUploaderContent>
												{value && value.length > 0 &&
													value.map((file, i) => (
														<FileUploaderItem key={i} index={i}>
															<Paperclip className="h-4 w-4 stroke-current" />
															<span>{file.name}</span>
														</FileUploaderItem>
													))}
											</FileUploaderContent>
										</FileUploader>
									</FormControl>
									<FormDescription>Aparece na pagina do produto e no pagamento.</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={productForm.control}
							name='amount'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Preco (Obrigatorio)</FormLabel>
									<FormControl>
										<Input type='number' {...field} />
									</FormControl>
									<FormDescription>Aparece na pagina do produto e no pagamento.</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Separator />
						<SheetFooter>
							<Button
								type='reset'
								variant='outline'
								onClick={handleOnCancel}
							>Cancelar</Button>
							<Button
								type="submit"
								disabled={productForm.formState.isSubmitting}
							>
								{productForm.formState.isSubmitting 
									? 'Criando produto...'
									: 'Criar produto'
								}
							</Button>
						</SheetFooter>
					</form>
				</Form>
			</SheetContent>
		</Sheet>
	)
}

export default CreateAndEditProductSheet