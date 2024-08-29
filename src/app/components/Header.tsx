"use client";

import Image from "next/image";
import Search from "./Search";
import title from "/public/images/title.png";
import Link from "next/link";

function Header() {
  return (
    <div>
      <div className="flex w-full xl:w-[80%] mt-[10px] xl:mt-[50px] px-2">
        <button className="ml-auto xl:text-[20px]">MY도감</button>
      </div>
      <Link href={"/"}>
      <div className="relative w-[300px] h-[100px] xl:w-[600px] xl:h-[300px] mx-auto my-5">
        <Image
          src={title}
          alt="타이틀"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>
      </Link>
      <Search />
    </div>
  );
}

export default Header;
