import { Home, LineChart, Package, ShoppingCart, Tag, Users } from 'lucide-react'

const availablePages = [
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
		icon: <Tag />,
		name: 'Produtos'
	},
	{
		hrefTo: '/dashboard/storage',
		icon: <Package />,
		name: 'Estoque'
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

export default availablePages