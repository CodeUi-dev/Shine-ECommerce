'use client';
import Image from 'next/image';
import { useState } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/components/ui/carousel';

import { Button } from '../ui/button';

export const SectionProductView = () => {
  const [activeFilter, setActiveFilter] = useState<string>('');

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

  const listItens = [
    {
      text: 'All',
    },
    {
      text: 'Menswear',
    },
    {
      text: 'Womenswear',
    },
    {
      text: 'Kidswear',
    },
    {
      text: 'Menswear',
    },
  ];

  const handleFilterActive = (filter: string) => {
    setActiveFilter(filter);
    console.log(filter);
  };

  return (
    <section>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full max-w-sm border-b border-t"
      >
        <CarouselContent className="w-full py-[20px]">
          {listItens.map((item, index) => (
            <CarouselItem key={index} className="basis-4/4 ">
              <div className="items-center border-r pr-4">
                <span className="text-[1rem] uppercase text-gray-60 font-medium">{item.text}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <section className="mt-[20px] flex w-full flex-row gap-[8px] border-b pb-[20px]">
        <Button
          variant="selected"
          className={`w-full ${activeFilter === 'Casual' ? 'bg-black text-white' : ''}`}
          onClick={() => handleFilterActive('Casual')}
        >
          Casual
        </Button>
        <Button
         variant="selected"
          className={`w-full ${activeFilter === 'Formal' ? 'bg-black text-white' : ''}`}
          onClick={() => handleFilterActive('Formal')}
        >
          Formal
        </Button>
        <Button
         variant="selected"
          className={`w-full ${activeFilter === 'Party' ? 'bg-black text-white' : ''}`}
          onClick={() => handleFilterActive('Party')}
        >
          Party
        </Button>
      </section>
      <header>
        <Carousel className="relative w-[340px] md:w-[420px]">
          <section className="absolute right-16 top-10">
            <CarouselPrevious className="-left-5" />
            <CarouselNext className="bg-black text-white hover:bg-black hover:text-white" />
          </section>
        </Carousel>
      </header>
      <Carousel className="relative w-[340px] md:w-[420px]">
        <CarouselContent>
          {fakeItem.map((productView) => {
            return (
              <CarouselItem key={productView.id}>
                <div className="p-1">
                  <Image
                    alt="product image"
                    src={`${productView.image}`}
                    width={420}
                    height={600}
                    className="rounded-md"
                  />
                </div>
                <section className="absolute bottom-5 w-full"></section>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <section className="absolute right-16 top-10">
          <CarouselPrevious className="-left-5" />
          <CarouselNext className="bg-black text-white hover:bg-black hover:text-white" />
        </section>
      </Carousel>
    </section>
  );
};
