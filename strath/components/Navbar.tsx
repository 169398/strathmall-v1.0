
"use client";

import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  return (
    <div className="fixed top-0 inset-x-0 h-fit  bg-white border-b border-zinc-300 z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        {/* Logo */}
        <Link href="/" className="flex gap-2 items-center">
          <p className="hidden text-zinc-700 text-sm font-medium md:block">
            STRATHMALL
          </p>
        </Link>

        {/* Actions */}

        <div className="flex gap-4">
          <div className="hover:bg-slate-500 rounded-full">
            <Link href="/signin" passHref>
              <button className={buttonVariants()}>Log in</button>
            </Link>
          </div>

          <div className="hover:bg-slate-500 rounded-full bg-slate-700">
          <Link href="/register" passHref>
            <button className={buttonVariants()}>Sign Up</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
