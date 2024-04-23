import CustomQueryClientProvider from "@/contexts/queryClientProvider";
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
      <body className={inter.className}>
        <CustomQueryClientProvider>
          {children}
        </CustomQueryClientProvider>
      </body>
    </html>
  );
}

export default RootLayout