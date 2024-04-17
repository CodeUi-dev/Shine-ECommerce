import Aside from "@/components/aside"
import CustomBreadcrumb from "@/components/customBreadcrumb"

interface IDashboardLayoutProps {
	children: React.ReactNode
}

const DashboardLayout: React.FC<IDashboardLayoutProps> = ({ children }) => {
	return (
		<div
			className='min-h-screen'
			style={{
				display: 'grid',
				gridTemplateColumns: '56px 1fr'
			}}
		>
			<Aside />
			<div className='p-4 flex flex-col gap-4'>
				<CustomBreadcrumb />
				{children}
			</div>
		</div>
	)
}

export default DashboardLayout