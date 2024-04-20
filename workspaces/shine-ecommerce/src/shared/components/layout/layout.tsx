import { ReactNode } from 'react';

import { Header } from '../header';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <Header />
      <section className="px-[1.1rem] container sm:px-[5rem] mt-[2.5rem] w-full">{children}</section>
    </main>
  );
};
