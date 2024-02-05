import Link from "next/link";
import { LondrinaSolid } from "./utils/fonts";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-between gap-14">
      <div className="text flex py-2 items-center justify-center gap-6 flex-col">
        <h1 className={`${LondrinaSolid.className} text-9xl text-center`}>
          Welcome to Gallerina
        </h1>
        <h2 className="text-lg">
          A gallery app made with Nextjs and Tailwindcss
        </h2>
      </div>
      <div className="links flex flex-col items-center">
        <Link href={"/login"}>Login</Link>
        or
        <Link href={"/signup"}>Signup</Link>
      </div>
    </main>
  );
}
