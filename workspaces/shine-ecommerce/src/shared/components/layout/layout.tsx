import { ReactNode } from 'react';

import { Header } from '../header';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <Header />
      <section className="px-[10rem] mt-[6.25rem]">{children}</section>
    </main>
  );
};
