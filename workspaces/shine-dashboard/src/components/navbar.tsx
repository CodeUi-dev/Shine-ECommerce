import { LogOut } from 'lucide-react'
import Logo from "./logo"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"

const Navbar = () => {
	return (
		<nav className='h-12 px-4 flex items-center justify-between border-b border-b-primary'>
			<Logo />

			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Avatar className='w-8 h-8 cursor-pointer'>
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</DropdownMenuTrigger>

				<DropdownMenuContent className='mr-4'>
					<DropdownMenuLabel>Mikael Marceniuk</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem className='cursor-pointer'>
						<LogOut className='w-4 h-4 mr-2 text-destructive' />
						Sair
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</nav>
	)
}

export default Navbar