import type { Metadata } from "next";
import "./globals.css";
import NextUIProviderFunction from "./utils/NextUIProviderFunction";
import Footer from "@/components/Footer";
import { notoSans } from "./utils/fonts";

export const metadata: Metadata = {
  title: "Gallerina | A NextJs Gallery App.",
  description: "Gallery app built and developed with love, by Abdelghafour122!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark min-h-screen h-full w-full relative">
      <body
        className={`${notoSans.className} h-full flex items-center justify-center`}
      >
        <NextUIProviderFunction>{children}</NextUIProviderFunction>
        <Footer />
      </body>
    </html>
  );
}
