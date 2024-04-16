import Image from "next/image"

interface IAuthLayoutProps {
	children: React.ReactNode
}

const AuthLayout: React.FC<IAuthLayoutProps> = ({ children }) => {
	return (
		<div className='min-h-screen p-4 grid grid-cols-2 bg-slate-800'>
			<div>
				<div className='flex gap-2'>
					<Image
						src='/logo.svg'
						alt='Logo do Shine ECommerce'
						width={24}
						height={24}
						className='text-gray-300'
					/>
					<p className='text-gray-300 font-bold'>Shine Dashboard</p>
				</div>
			</div>
			<main>
				{children}
			</main>
		</div>
	)
}

export default AuthLayout