"use client";

import Image from "next/image";
import Search from "./Search";
import title from "/public/images/title.png";
import Link from "next/link";

function Header() {
  return (
    <div>
      <Link href={"/"}>
      <div className="relative w-[500px] h-[200px] mx-auto my-5">
        <Image
          src={title}
          alt="타이틀"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      </Link>
      <Search />
    </div>
  );
}

export default Header;
