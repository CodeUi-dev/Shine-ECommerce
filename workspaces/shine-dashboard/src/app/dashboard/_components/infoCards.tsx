import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatToCurrency } from "@/utils/formatter";

interface IInfoCardProps {
	title: string
	titleIcon: React.ReactNode
	content: {
		value: number
		type: 'INTEGER' | 'CENTS'
		isTrendingUp: boolean
		trendingPorcentage: string
	}
}

const InfoCard: React.FC<IInfoCardProps> = ({ title, titleIcon, content }) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle className='flex justify-between'>
					{title}
					{titleIcon}
				</CardTitle>
			</CardHeader>
			<CardContent className='flex flex-col gap-1'>
				<p className='font-bold text-2xl overflow-hidden text-ellipsis'>
					{content.type == 'CENTS'
						? formatToCurrency.format(content.value / 100)
						: content.value
					}
				</p>
				<div
					data-istrending={content.isTrendingUp}
					className='flex items-center gap-1 text-sm data-[istrending=true]:text-green-900 data-[istrending=false]:text-red-600'
				>
					<span>{content.trendingPorcentage}</span>
					do que o mes passado
				</div>
			</CardContent>
		</Card>
	)
}

export default InfoCard