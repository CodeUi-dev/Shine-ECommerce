'use client';

import Image from 'next/image';
import * as React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/components/ui/carousel';

import { FooterProductView } from './tag/footer-product-view';

//Teste
const fakeItem = [
  {
    id: 1,
    name: 'ryanblusa2',
    image: [
      'https://static.vecteezy.com/system/resources/previews/004/688/865/large_2x/t-shirt-mockup-in-white-color-a-man-wearing-a-t-shirt-for-a-mockup-clothing-catalog-mockup-graphic-from-the-front-view-free-photo.jpg',
    ],
    size: ['DWDWDWD', 'XL', 'SL', 'xXL'],
    linkView: 'www.facebook.com.br/',
 
    details: {
        view: ['Best Seller', 'Casual Jacket', 'Full Sleeve'],
      size: ['2', 'XL', 'SL', 'XL'],
      color: ['739CDA', 'DAA573', 'DAD673'],
      linkView: 'www.facebook.com.br/',
    },
  },
  {
    id: 2,
    name: 'ryanblusa3',
    image: [
      'https://static.vecteezy.com/system/resources/previews/004/688/865/large_2x/t-shirt-mockup-in-white-color-a-man-wearing-a-t-shirt-for-a-mockup-clothing-catalog-mockup-graphic-from-the-front-view-free-photo.jpg',
    ],

    details: {
        view: ['Best Seller', 'Casual Jacket', 'Full Sleeve'],
      size: ['3', 'XL', 'SL', 'xXL'],
      color: ['739CDA', 'DAA573', 'DAD673'],
      linkView: 'www.facebook.com.br/',
    },
  },
  {
    id: 3,
    name: 'ryanblusa4',
    image: [
      'https://static.vecteezy.com/system/resources/previews/004/688/865/large_2x/t-shirt-mockup-in-white-color-a-man-wearing-a-t-shirt-for-a-mockup-clothing-catalog-mockup-graphic-from-the-front-view-free-photo.jpg',
    ],

    details: {
        view: ['Best Seller', 'Casual Jacket', 'Full Sleeve'],
      size: ['4', 'XL', 'SL', 'xXL'],
      color: ['739CDA', 'DAA573'],
      linkView: 'www.facebook.com.br/',
    },
  },
];

export function CarouselPlugin() {
  return (
    <Carousel className="relative w-[340px] md:w-[420px]">
      <CarouselContent >
        {fakeItem.map((productView) => {
          return (
            <CarouselItem key={productView.id}>
              <div className="p-1">
                <Image
                  alt="product image"
                  src={`${productView.image}`}
                  width={420}
                  height={600}
                  className='rounded-md'
                />
              </div>
             <section className="absolute bottom-5 w-full">
                <FooterProductView productViewDetails={productView.details} />
              </section>
            </CarouselItem>
          );
        })}
      </CarouselContent>

      <section className="absolute right-16 top-10">
        <CarouselPrevious className="-left-5" />
        <CarouselNext className="bg-black text-white hover:bg-black hover:text-white" />
      </section>
    </Carousel>
  );
}
