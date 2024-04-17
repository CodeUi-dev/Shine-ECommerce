import InfoCard from "./_components/infoCards"

const DashboardPage = () => {
	return (
		<div className='grid grid-cols-4 gap-4'>
			<InfoCard
				title='Faturamento no mes'
				content={{
					value: 192927,
					type: 'CENTS',
					isTrendingUp: true,
					trendingPorcentage: '+16.8%'
				}}
			/>
			<InfoCard
				title='Vendas do mes'
				content={{
					value: 119,
					type: 'INTEGER',
					isTrendingUp: true,
					trendingPorcentage: '+12%'
				}}
			/>
			<InfoCard
				title='Trafego no mes'
				content={{
					value: 256,
					type: 'INTEGER',
					isTrendingUp: false,
					trendingPorcentage: '-1.3%'
				}}
			/>
			<InfoCard
				title='Novos clientes'
				content={{
					value: 8,
					type: 'INTEGER',
					isTrendingUp: true,
					trendingPorcentage: '+1.2%'
				}}
			/>
		</div>
	)
}

export default DashboardPage