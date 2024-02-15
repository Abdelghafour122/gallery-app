import Link from "next/link";
import { LondrinaSolid } from "./utils/fonts";

export default function Home() {
  return (
    <main className="flex h-fit flex-col items-center justify-between gap-14 px-2 mx-auto container">
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
