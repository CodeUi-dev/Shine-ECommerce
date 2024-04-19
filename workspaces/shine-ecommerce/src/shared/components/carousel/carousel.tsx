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

            className="w-full max-w-xs relative"

        >
            <CarouselContent>

                    <CarouselItem key={'index'}>
                        <div className="p-1">
                            <Tag title="Best Seller" className="absolute left-8 top-[1.5rem]" />

                            <div className="absolute left-[11rem] top-[1rem]">
                                <Tag title="Hoodie" className="left-0" />
                                <Image
                                    alt="Indicattor line"
                                    src="IndicatorVerse.svg"
                                    width={10}
                                    height={10}
                                    className="absolute right-[3.8rem] top-3"
                                />
                            </div>

                            <div className="absolute left-8 top-[7.6rem]">
                                <Tag title="Casual Jacket" className="left-0" />
                                <Image
                                    alt="Indicattor line"
                                    src="Indicator.svg"
                                    width={10}
                                    height={10}
                                    className="absolute left-[6.2rem] top-3"
                                />
                            </div>

                            <div className="absolute right-[1rem] top-[11rem]">
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
                            
                                width={400}
                                height={400}
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
