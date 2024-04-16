import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shine Dashboard",
  description: "Shine ECommerce Dashboard",
};

interface IRootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<IRootLayoutProps> = ({ children }) => {
  return (
    <html lang="pt">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export default RootLayout