import Image from 'next/image'

export const CardProductView = () => {
    return (
        <div>
            <Image 
            alt="product image"
            src="/product-image.svg"
            width={400}
            height={400}
            />
        </div>
    )
}