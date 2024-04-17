import Logo from "@/components/logo"

interface IAuthLayoutProps {
	children: React.ReactNode
}

const AuthLayout: React.FC<IAuthLayoutProps> = ({ children }) => {
	return (
		<div className='min-h-screen p-4 grid grid-cols-2 bg-slate-800'>
			<Logo />
			<main>
				{children}
			</main>
		</div>
	)
}

export default AuthLayout