'use client'

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import availablePages from "@/constants/availablePages"
import { usePathname } from "next/navigation"
import React from "react"

const CustomBreadcrumb = () => {
	const paths = usePathname().split('/').splice(1)	

	return (
		<Breadcrumb>
			<BreadcrumbList>
			{paths.map((path, i) => {
				const { hrefTo, name } = availablePages.find(pages => path == pages.path)!
				
				return (
					<React.Fragment key={i}>
						<BreadcrumbItem>
							<BreadcrumbLink href={hrefTo} className='capitalize cursor-pointer'>{name}</BreadcrumbLink>
						</BreadcrumbItem>
						{i + 1 != paths.length && <BreadcrumbSeparator />}
					</React.Fragment>
				)
			})}
			</BreadcrumbList>
		</Breadcrumb>
	)
}

export default CustomBreadcrumb