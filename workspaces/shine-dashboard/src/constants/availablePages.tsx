import { Home, LineChart, Package, ShoppingCart, Tag, Users } from 'lucide-react'

interface IAvaliablePage  {
	hrefTo: string
	path: string
	icon: React.ReactNode,
	name: string
}

const availablePages: IAvaliablePage[] = [
	{
		hrefTo: '/dashboard',
		path: 'dashboard',
		icon: <Home />,
		name: 'Dashboard'
	},
	{
		hrefTo: '/dashboard/orders',
		path: 'orders',
		icon: <ShoppingCart />,
		name: 'Compras e Pedidos'
	},
	{
		hrefTo: '/dashboard/products',
		path: 'products',
		icon: <Tag />,
		name: 'Catalogo de Produtos'
	},
	{
		hrefTo: '/dashboard/storage',
		path: 'storage',
		icon: <Package />,
		name: 'Estoque'
	},
	{
		hrefTo: '/dashboard/users',
		path: 'users',
		icon: <Users />,
		name: 'Usuarios e Clientes'
	},
	{
		hrefTo: '/dashboard/analytics',
		path: 'analytics',
		icon: <LineChart />,
		name: 'Indicadores'
	}
] as const

export default availablePages