import { ReactNode } from 'react';

import { Header } from '../header';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <Header />
      <section className="px-[1rem] mt-[2.5rem] w-full">{children}</section>
    </main>
  );
};
