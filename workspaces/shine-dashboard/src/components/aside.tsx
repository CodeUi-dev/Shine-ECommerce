'use client'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import availablePages from "@/constants/availablePages"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Aside = () => {
	const pathname = usePathname()

	return (
		<aside className='w-14 h-full pt-4'>
			<nav className='flex flex-col gap-4 items-center'>
				<Image src='/logo.svg' width={24} height={24} alt='Shine Logo' />

				<TooltipProvider>
					{availablePages.map((link, i) => (
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