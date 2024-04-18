'use client'

import { Button } from "@/components/ui/button"
import { DatePickerWithRange } from "@/components/ui/date-picker-range"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const filtersSchema = z.object({
	name: z.string().optional(),
	status: z.string().optional(),
	createdAt: z.object({
		from: z.date().optional(),
		to: z.date().optional()
	})
})


const availableStatus = [
	{
		id: 1,
		label: 'Ativado',
		value: 'active'
	},
	{
		id: 2,
		label: 'Arquivado',
		value: 'archived'
	},
]

type filtersFormType = z.infer<typeof filtersSchema>

const ProductsFilter = () => {
	const productsFilterForm = useForm<filtersFormType>({
		resolver: zodResolver(filtersSchema),
		defaultValues: {
			name: undefined,
			status: '',
			createdAt: {
				from: undefined,
				to: undefined
			}
		}
	})

	const handleOnSubmit = async (data: filtersFormType) => {
		event?.preventDefault()

		console.log('data: ', data)
		await new Promise(res => setTimeout(res, 2000))
	}

	const isThereAnyFilters = () => {
		const { getValues } = productsFilterForm

		const doesNameHaveValues = getValues('name')
		const doesStatusHaveValues = getValues('status') != ''
		const doesCreatedAtHaveValues = getValues('createdAt.from') && getValues('createdAt.to')

		return doesNameHaveValues || doesStatusHaveValues || doesCreatedAtHaveValues
	}

	return (
		<Form {...productsFilterForm}>
			<form
				onSubmit={productsFilterForm.handleSubmit(handleOnSubmit)}
				className='grid grid-cols-12 gap-2'
			>
				<FormField
					control={productsFilterForm.control}
					name="name"
					render={({ field }) => (
						<FormItem className='col-span-2'>
							<FormLabel>Nome do produto</FormLabel>
							<FormControl>
								<Input placeholder="nome do produto" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={productsFilterForm.control}
					name="status"
					render={({ field }) => (
						<FormItem className='col-span-2'>
							<FormLabel>Status do produto</FormLabel>
							<Select value={field.value} onValueChange={field.onChange}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Selecione um status" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									{availableStatus.map(status => (
										<SelectItem key={status.id} value={status.value}>
											{status.label}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</FormItem>
					)}
				/>

				<FormField
					control={productsFilterForm.control}
					name="createdAt"
					render={({ field }) => (
						<FormItem className='col-span-3'>
							<FormLabel>Criado em</FormLabel>
							<FormControl>
								<DatePickerWithRange {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{isThereAnyFilters() && (
					<Button
						variant='ghost'
						className='self-end'
						onClick={() => productsFilterForm.reset()}
					>
						Limpar filtros
					</Button>
				)}

				<Button
					type='submit'
					className='self-end'
					disabled={productsFilterForm.formState.isSubmitting}
				>
					Filtrar
				</Button>
			</form>
		</Form>
	)
}

export default ProductsFilter