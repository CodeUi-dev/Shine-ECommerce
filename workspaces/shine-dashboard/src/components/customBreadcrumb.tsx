'use client'

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation"

const CustomBreadcrumb = () => {
	const paths = usePathname().split('/').splice(1)	

	return (
		<Breadcrumb>
			<BreadcrumbList>
			{paths.map((path, i) =>(
					// TODO Resolve Error of unique "key"
					// TODO Add Href to BreadcrumbLink
					<>
						<BreadcrumbItem key={i}>
							<BreadcrumbLink className='capitalize cursor-pointer'>{path}</BreadcrumbLink>
						</BreadcrumbItem>
						{i + 1 != paths.length && <BreadcrumbSeparator />}
					</>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	)
}

export default CustomBreadcrumb