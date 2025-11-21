import type { Metadata } from "next";
import { Geist, Geist_Mono, Merienda, Unbounded } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  display:"swap"
});
const merienda = Merienda({
  variable: "--font-merienda",
  subsets: ["latin"],
  display:"swap"
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divyantra",
  description: "Divyantra is an ecommerce plateform that provide customers sell and purchase online solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${unbounded.variable} ${merienda.variable}`}
      >
        <Navbar />
        {children}

        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
