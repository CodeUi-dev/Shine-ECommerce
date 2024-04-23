'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

interface IQueryClientProviderProps {
	children: React.ReactNode
}

const queryClient = new QueryClient()

const CustomQueryClientProvider: React.FC<IQueryClientProviderProps> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	)
}

export default CustomQueryClientProvider