'use client'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Home, LineChart, Package, ShoppingCart, Users } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const asideLinks = [
	{
		hrefTo: '/dashboard',
		icon: <Home />,
		name: 'Dashboard'
	},
	{
		hrefTo: '/dashboard/orders',
		icon: <ShoppingCart />,
		name: 'Compras e Pedidos'
	},
	{
		hrefTo: '/dashboard/products',
		icon: <Package />,
		name: 'Produtos e Estoque'
	},
	{
		hrefTo: '/dashboard/users',
		icon: <Users />,
		name: 'Usuarios e Clientes'
	},
	{
		hrefTo: '/dashboard/analytics',
		icon: <LineChart />,
		name: 'Indicadores'
	}
] as const

const Aside = () => {
	const pathname = usePathname()

	return (
		<aside className='w-14 h-full pt-4'>
			<nav className='flex flex-col gap-4 items-center'>
				<Image src='/logo.svg' width={24} height={24} alt='Shine Logo' />

				<TooltipProvider>
					{asideLinks.map((link, i) => (
						<Tooltip key={i}>
							<TooltipTrigger asChild>
								<Link
									className='p-1 rounded data-[current=true]:bg-primary'
									href={link.hrefTo}
									data-current={pathname == link.hrefTo}
								>
									{link.icon}
								</Link>
							</TooltipTrigger>
							<TooltipContent side='right'>
								<p>{link.name}</p>
							</TooltipContent>
						</Tooltip>
					))}
				</TooltipProvider>
			</nav>
		</aside>
	)
}

export default Aside