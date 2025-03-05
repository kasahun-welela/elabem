import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["300", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elabem Consultancy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/logo1.png" />
      </head>
      <body
        className={`${roboto.variable} font-roboto tracking-wide antialiased`}
      >
        <NavBar />
        <ToastContainer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
