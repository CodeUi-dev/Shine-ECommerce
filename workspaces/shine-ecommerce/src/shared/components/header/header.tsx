import { MoveUpRight, ShoppingCart } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <header className="flex w-full flex-col ">
      <section className="flex w-full items-center justify-center bg-primary px-[1.25rem] py-[1.5rem]">
        <span className="flex flex-row items-center gap-[0.62rem] text-[1.12rem] font-medium leading-[1.68rem] tracking-tight text-white">
          Subscribe to our Newsletter For Latest Collections <MoveUpRight />
        </span>
      </section>
      <nav className="flex w-full flex-row items-center justify-between gap-2 border-b border-border bg-white px-[8rem] py-[20px] text-primary">
        <ul className="flex flex-row gap-[0.62rem]">
        <Button variant="default">Home</Button>
        <Button variant="default">Products</Button>
        </ul>
        <section className="flex flex-row gap-10">
          <Image width={60} height={60} alt="logo image" src={'/logo.svg'} />
        </section>
        <section className="flex flex-row gap-[0.8rem]">
          <Button variant="secondary">
            <ShoppingCart fill={'true'} size={22} />
          </Button>
          <Button variant="default">Contact Support</Button>
        </section>
      </nav>
    </header>
  );
};
