import type { Metadata } from "next";
 import "./globals.css";
import Navbar from "@/components/common/Navbar";

export const metadata: Metadata = {
  title: "CRM",
  description: "CRM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`  antialiased`}>
         <Navbar />
        {children}</body>
    </html>
  );
}
