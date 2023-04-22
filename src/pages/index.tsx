import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-base-200 pb-8">
      <div className="navbar bg-base-200">
        <a className="btn btn-ghost normal-case text-xl">Foodle</a>
      </div>
      <div className="flex flex-col items-center mb-20">
        <div className="flex flex-1 justify-center mt-40 mb-10">
          <a className="text-5xl font-bold">Welcome to Foodle</a>
        </div>
        <div className="flex flex-1 justify-center mb-10">
          <a className="text-xl">The best food discovery platform</a>
        </div>
        <Link href="/api/auth/login">
          <button className="btn w-40">Get Started</button>
        </Link>
      </div>
    </div>
  );
}
