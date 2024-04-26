import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/main-header/header";

export const metadata: Metadata = {
 title: "NextLevele Food",
 description: "NextLevele Food - The best food in the world!",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <body>
    <Header />
    {children}
   </body>
  </html>
 );
}
