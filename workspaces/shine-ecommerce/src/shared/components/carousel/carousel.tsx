import Image from 'next/image';
import * as React from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'

import { Tag } from '../tag';

export function CarouselPlugin() {

    return (
        <Carousel

    className='w-[29rem] flex items-center justify-center'
        >
            <CarouselContent className='relative'>

                    <CarouselItem key={'index'}>
                        <div className="p-1">
                            <Tag title="Best Seller" className="absolute left-[10%] top-[10%]" />

                            <div className="absolute left-[50%] top-[8%]">
                                <Tag title="Hoodie" className="left-0" />
                                <Image
                                    alt="Indicattor line"
                                    src="IndicatorVerse.svg"
                                    width={10}
                                    height={10}
                                    className="absolute right-[3.8rem] top-3"
                                />
                            </div>

                            <div className="absolute left-[15%] top-[35%]">
                                <Tag title="Casual Jacket" className="left-0" />
                                <Image
                                    alt="Indicattor line"
                                    src="Indicator.svg"
                                    width={10}
                                    height={10}
                                    className="absolute left-[6.2rem] top-3"
                                />
                            </div>

                            <div className="absolute right-[10%] top-[40%]">
                                <Tag title="Full Sleeve" className="left-0" />
                                <Image
                                    alt="Indicattor line"
                                    src="IndicatorVerse.svg"
                                    width={10}
                                    height={10}
                                    className="absolute right-[4.9rem] top-3"
                                />
                            </div>

                            <Image
                                alt="product image"
                                src="/product-image.svg"
                            
                                width={500}
                                height={600}
                            />
                        </div>
                    </CarouselItem>
            
            </CarouselContent>
        <section className="absolute top-8 right-14">
        <CarouselPrevious className="-left-5" />
            <CarouselNext className="bg-black text-white hover:text-white hover:bg-black"/>
        </section>
        </Carousel>
    )
}
