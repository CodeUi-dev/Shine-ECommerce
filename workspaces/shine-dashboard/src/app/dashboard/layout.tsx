import Aside from "@/components/aside"

interface IDashboardLayoutProps {
	children: React.ReactNode
}

const DashboardLayout: React.FC<IDashboardLayoutProps> = ({ children }) => {
	return (
		<div className='min-h-screen'>
			<Aside />
			{children}
		</div>
	)
}

export default DashboardLayout