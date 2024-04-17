import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { formatToCurrency } from "@/utils/formatter"

const data = {
	total: 19,
	sales: Array.from({ length: 19 }).map((item, i) => ({
		id: i,
		name: 'Mikael Campos Marceniuk',
		email: 'mika.marceniuk@gmail.com',
		value: 9999
	}))
}

const RecentSales = () => {
	return (
		<Card className='col-span-2'>
			<CardHeader>
				<CardTitle>Vendas recentes</CardTitle>
				<CardDescription>Foi feito {data.total} de vendas no dia</CardDescription>
			</CardHeader>
			<CardContent>
				<ScrollArea className='h-72'>
					{data.sales.map(sale => (
						<li
							className='p-2 list-none flex justify-between items-center border-b cursor-pointer hover:bg-primary'
							key={sale.id}
						>
							<div className='flex gap-3'>
								<Avatar>
									<AvatarImage src="https://github.com/shadcn.png" />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<div className='flex flex-col text-sm'>
									<span className='font-bold'>{sale.name}</span>
									<span>{sale.email}</span>
								</div>
							</div>

							<span className='font-bold text-sm'>+{formatToCurrency.format(sale.value / 100)}</span>
						</li>
					))}
				</ScrollArea>
			</CardContent>
		</Card>
	)
}

export default RecentSales