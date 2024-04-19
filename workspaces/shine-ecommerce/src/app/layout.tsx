import './globals.css';

import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';

import { Layout } from '@/shared/components/layout';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shine',
  description: 'Shine E-Commerce',
};

interface IRootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<IRootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
