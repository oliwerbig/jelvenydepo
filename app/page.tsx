import Link from "next/link";
import { Providers } from "./providers";

export default function Home() {
  return (
    <Providers>
      <main className="flex h-[100vh] items-center justify-center gap-5">
        <Link href="/jelvenydepo">
          <div className="w-[25rem] p-5 hover:mb-5 lg:col-span-4 lg:flex">
            <img src="/logo-01.svg" alt="mockup" />
          </div>
        </Link>
        <Link href="/jelvenyrendeles">
          <div className="w-[25rem] p-5 hover:mb-5 lg:col-span-4 lg:flex">
            <img src="/logo-03.svg" alt="mockup" />
          </div>
        </Link>
      </main>
    </Providers>
  );
}
