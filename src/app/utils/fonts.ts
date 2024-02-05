import { Londrina_Solid, Noto_Sans } from "next/font/google";

export const LondrinaSolid = Londrina_Solid({
  weight: "900",
  display: "swap",
  subsets: ["latin"],
});

export const notoSans = Noto_Sans({
  display: "swap",
  preload: true,
  subsets: ["latin"],
  weight: ["400", "700"],
});
