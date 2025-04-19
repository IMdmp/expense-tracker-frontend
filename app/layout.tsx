import type { Metadata } from "next";import "./globals.css";
import { Inter } from "next/font/google"
import {Navbar} from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Track transactions as expenses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
      <main>{children}</main>
      </body>
    </html>
  );
}
