import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NavigationBar from "./components/navbar/NavigationBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SAS Production",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} px-4 md:px-8 lg:px-12 xl:px-20`}>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
