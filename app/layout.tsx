import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@/components/theme-provider";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["300", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elabem Consultancy",
  description:
    "Elabem Consultancy provides expert guidance for students seeking to study abroad. We offer personalized counseling, university admissions assistance, visa support, and more.",
  keywords: [
    "study abroad",
    "educational consultancy",
    "university admissions",
    "visa support",
    "study overseas",
    "education counseling",
    "education",
  ],
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
        className={`${roboto.variable} bg-muted dark:bg-gray-900 font-roboto tracking-wide antialiased`}
      >
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <ToastContainer />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
