import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon Book",
  description: "Pokemon Book by create next app",
  icons: {
    icon: "/pokemonlogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <div>
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              alt="logo"
              width={0}
              height={0}
              sizes="100vw"
              className="my-20 mx-auto w-[400px] h-[auto]"
              priority
            />
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
