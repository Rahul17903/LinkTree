"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  const showNavbar = ["/", "/generate"].includes(pathname);
  return (
    <>
      {showNavbar && (
        <div className="bg-white rounded-full p-3 w-[91%] flex justify-between fixed top-10 left-[4.5%]">
          {/* left side in img and li */}
          <div className="flex flex-row items-center">
            <Link href="/">
              <Image
                src={`https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg`}
                height={120}
                width={120}
                alt="error"
                className="ml-9 mr-18"
              />
            </Link>
            <ul className="flex flex-row items-center gap-6 text-black  font-semibold ">
              <Link href="/generate">
                <li>Product</li>
              </Link>
              <Link href="/">
                <li>Templates</li>
              </Link>
              <Link href="/">
                <li>Marketplace</li>
              </Link>
              <Link href="/">
                <li>Learn</li>
              </Link>
              <Link href="/">
                <li>Pricing</li>
              </Link>
            </ul>
          </div>
          <div className="right">
            <button className="h-fit py-5 mx-3 px-7 font-semibold rounded-xl bg-gray-200  text-black">
              Log in
            </button>
            <button className="h-fit py-5  px-8 font-semibold rounded-full text-white  bg-[#212121]">
              Sign up free
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
