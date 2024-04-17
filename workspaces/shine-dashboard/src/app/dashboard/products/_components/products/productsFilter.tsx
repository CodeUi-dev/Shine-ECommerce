'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DatePickerWithRange } from "@/components/ui/date-picker-range"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { zodResolver } from "@hookform/resolvers/zod"
import { PopoverClose } from "@radix-ui/react-popover"
import { SquarePlus } from "lucide-react"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"

const filtersSchema = z.object({
	createdAt: z.object({
		from: z.date(),
		to: z.date()
	})
})

type filtersFormType = z.infer<typeof filtersSchema>

const ProductsFilter = () => {
	const { control } = useForm<filtersFormType>({
		resolver: zodResolver(filtersSchema),
		defaultValues: {
			createdAt: {
				from: undefined,
				to: undefined
			}
		}
	})

	return (
		<div className='flex gap-2'>
			<Popover>
				<PopoverTrigger>
					<Badge variant='filter' className='border-dashed cursor-pointer hover:bg-gray-200'>
						<SquarePlus size={12} strokeWidth={1} />
						<span className='ml-1'>Criado em</span>
					</Badge>
				</PopoverTrigger>
				<PopoverContent className='space-y-2'>
					<Controller
						control={control}
						name='createdAt'
						render={({ field }) => <DatePickerWithRange {...field} />}
					/>
					<PopoverClose asChild>
						<Button className='w-full'>Aplicar</Button>
					</PopoverClose>
				</PopoverContent>
			</Popover>
		</div>
	)
}

export default ProductsFilter