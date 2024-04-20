'use client';
import { ArrowUpRight } from 'lucide-react';
import { Menu, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import { Button } from '@/shared/components/ui/button';

export const Header = () => {
  const [menuMobile, setMenuMobile] = useState(false);

  return (
    <header className="flex  w-full flex-col items-center">
      <section className="flex w-full items-center  justify-center gap-1 bg-primary  py-3 text-center text-white ">
        <span className="flex items-center text-[14px] font-medium sm:text-[18px]">
          Subscribe to our Newsletter For Latest Collections
        </span>
        <ArrowUpRight />
      </section>
      <hr />
      <nav className="border-gray15 container md:w-full flex w-full items-center justify-between border-b bg-white px-[1.1rem] py-2 sm:px-[5rem] ">
        <section className="hidden items-center sm:flex">
          <hr />
          <section>
            <Image
              width={60}
              height={60}
              alt="logo image"
              src={'/logo.svg'}
              className="h-12 w-12 sm:hidden"
            />
          </section>
          <section>
            <ul className="flex items-center gap-4">
              <Button variant="default">Home</Button>
              <Button variant="default">Products</Button>
            </ul>
          </section>
        </section>
        <div>
          <section>
            <Image
              width={60}
              height={60}
              alt="logo image"
              src={'/logo.svg'}
              className="h-12 w-12"
            />
          </section>
        </div>
        <section className="flex items-center gap-4">
          <section className="flex items-center gap-4">
            <Button variant="secondary">
              <ShoppingCart fill={'true'} size={20} />
            </Button>

            <Menu
              className="cursor-pointer sm:hidden"
              onClick={() => setMenuMobile(!menuMobile)}
            />

            <Button variant="default" className="hidden sm:flex">
              Contact Support
            </Button>
          </section>
        </section>
      </nav>
    </header>
  );
};

export default Header;
