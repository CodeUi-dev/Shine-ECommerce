import Image from "next/image"

const Logo = () => {
	return (
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
	)
}

export default Logo