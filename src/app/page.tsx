import Link from "next/link";
import { LondrinaSolid } from "@/utils/fonts";

export default function Home() {
  return (
    // this was h-fit justify-between
    <main className="flex h-full flex-col items-center justify-center gap-14 px-2 mx-auto container dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)]"></div>
      <div className="text flex py-2 items-center justify-center gap-6 flex-col">
        <h1 className={`${LondrinaSolid.className} text-9xl text-center`}>
          Welcome to Gallerina
        </h1>
        <h2 className="text-lg">
          A gallery app made with Nextjs and Tailwindcss
        </h2>
      </div>
      <div className="links flex flex-col items-center">
        <Link className="link" href={"/login"}>
          Login
        </Link>
        or
        <Link className="link" href={"/signup"}>
          Signup
        </Link>
      </div>
    </main>
    // fix this
    // <Footer />
  );
}
