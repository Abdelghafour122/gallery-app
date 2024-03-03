import { Londrina_Solid, Noto_Sans } from "next/font/google";

export const LondrinaSolid = Londrina_Solid({
  weight: "900",
  display: "swap",
  subsets: ["latin"],
  adjustFontFallback: false,
  preload: true,
  style: "normal",
  variable: "--Londrina-Solid-var",
});

export const notoSans = Noto_Sans({
  display: "swap",
  preload: true,
  style: "normal",
  adjustFontFallback: false,
  subsets: ["latin"],
  weight: ["400", "700"],
});
