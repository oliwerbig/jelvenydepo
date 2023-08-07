import Link from "next/link";
import { Providers } from "./providers";

export default function Home() {
  return (
    <Providers>
      <main className="flex h-[100vh] items-center justify-center gap-5">
        <Link
          href="/jelvenydepo"
          className="flex flex-col items-center text-xl hover:mb-5"
        >
          <div className="w-[25rem] p-5  lg:col-span-4 lg:flex">
            <img src="/logo-01.svg" alt="mockup" />
          </div>
          <p>Nagykereskedés, alapanyagok</p>
        </Link>
        <Link
          href="/jelvenyrendeles"
          className="flex flex-col items-center text-xl hover:mb-5"
        >
          <div className="w-[25rem] p-5  lg:col-span-4 lg:flex">
            <img src="/logo-03.svg" alt="mockup" />
          </div>
          <p>Kiskereskedés, kész termékek</p>
        </Link>
      </main>
    </Providers>
  );
}
