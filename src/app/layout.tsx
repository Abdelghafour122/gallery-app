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
    <html lang="en" className="dark min-h-screen flex flex-col h-full">
      <body
        className={`${notoSans.className} h-full flex flex-col items-center justify-between`}
      >
        <NextUIProviderFunction>{children}</NextUIProviderFunction>
        <Footer />
      </body>
    </html>
  );
}
