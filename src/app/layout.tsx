import type { Metadata } from "next";
import "./globals.css";
import NextUIProviderFunction from "@/utils/NextUIProviderFunction";
import { notoSans } from "@/utils/fonts";
import ToasterComp from "@/utils/ToasterComp";

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
    <html lang="en" className="dark min-h-screen h-full w-full">
      <body
        className={`${notoSans.className} h-full flex items-center justify-center bg-neutral-700`}
      >
        <NextUIProviderFunction>{children}</NextUIProviderFunction>
        <ToasterComp />
      </body>
    </html>
  );
}
