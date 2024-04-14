'use client';
import { ArrowUpRight } from 'lucide-react';
import { Menu, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import useIsMobile from '@/shared/hooks/useIsMobile';

export const Header = () => {
  const isMobile = useIsMobile();
  const [menuMobile, setMenuMobile] = useState(false);

  return (
    <header className="flex w-full flex-col">
      <section className="flex items-center justify-center bg-primary px-4 py-3">
        <span className="flex items-center gap-2 text-sm font-medium text-white">
          Subscribe to our Newsletter For Latest Collections <ArrowUpRight />
        </span>
      </section>
      <nav className="flex items-center justify-between border-b border-gray15 bg-white px-[9rem] py-2">
        <section className="flex items-center">
          {isMobile && (
            <Image
              width={60}
              height={60}
              alt="logo image"
              src={'/logo.svg'}
              className="h-12 w-12"
            />
          )}
          {!isMobile && (
            <ul className="flex items-center gap-4">
              <Button variant="default">Home</Button>
              <Button variant="default">Products</Button>
            </ul>
          )}
        </section>
        <div>
          {!isMobile && (
            <Image
              width={60}
              height={60}
              alt="logo image"
              src={'/logo.svg'}
              className="h-12 w-12"
            />
          )}
        </div>
        <section className="flex items-center gap-4">
          <section className="flex items-center gap-4">
            <Button variant="secondary">
              <ShoppingCart fill={'true'} size={20} />
            </Button>
            {isMobile && <Menu className='cursor-pointer' onClick={() => setMenuMobile(!menuMobile)} />}
            {!isMobile && <Button variant="default">Contact Support</Button>}
          </section>
        </section>
      </nav>
    </header>
  );
};

export default Header;
