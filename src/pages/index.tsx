import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.75,
      }}
      className="nav-bar bg-base-200"
    >
      <div className="flex flex-col items-center bg-base-100">
        <div className="bg-base-200 pb-8 w-3/5 rounded-2xl">
          <div className="navbar bg-base-200 rounded-3xl">
            <a href="" className="btn btn-ghost normal-case text-xl">
              Foodle
            </a>
          </div>
          <div className="flex flex-col items-center mb-20">
            <div className="flex flex-1 justify-center mt-40 mb-8">
              <a className="text-6xl font-bold">Welcome to Foodle</a>
            </div>
            <div className="flex flex-1 justify-center mb-10">
              <a className="text-2xl">The best food discovery platform</a>
            </div>
            <Link href="/api/auth/login">
              <button className="btn w-40">Get Started</button>
            </Link>
          </div>
        </div>
        <div className="bg-base-100 flex flex-col items-center">
          <div className="flex flex-1 justify-center pt-20 mb-8 w-3/5">
            <a className="text-4xl font-bold">Your title here</a>
          </div>
          <div className="flex flex-1 justify-center text-center w-3/5">
            <a className="text-xl w-3/4 mb-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              malesuada nisi tellus, non imperdiet nisi tempor at.
            </a>
          </div>
          <div className="flex flex-1 my-10 w-3/5">
            <div className="w-1/2 p-20">
              <div className="flex flex-1 justify-center mb-8">
                <a className="text-4xl font-bold">Your title here</a>
              </div>
              <div className="flex flex-1 justify-center">
                <a className="text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.
                </a>
              </div>
            </div>
            <div className="w-1/2 flex justify-center">
              <Image
                src="https://picsum.photos/300/300"
                alt="Test picture"
                width={300}
                height={300}
                className="rounded-3xl"
              />
            </div>
          </div>
          <div className="flex flex-1 my-10 w-3/5">
            <div className="w-1/2 flex justify-center">
              <Image
                src="https://picsum.photos/300/300"
                alt="Test picture"
                width={300}
                height={300}
                className="rounded-3xl"
              />
            </div>
            <div className="w-1/2 p-20">
              <div className="flex flex-1 justify-center mb-8">
                <a className="text-4xl font-bold">Your title here</a>
              </div>
              <div className="flex flex-1 justify-center">
                <a className="text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-1 my-10 w-3/5">
            <div className="w-1/2 p-20">
              <div className="flex flex-1 justify-center mb-8">
                <a className="text-4xl font-bold">Your title here</a>
              </div>
              <div className="flex flex-1 justify-center">
                <a className="text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.
                </a>
              </div>
            </div>
            <div className="w-1/2 flex justify-center">
              <Image
                src="https://picsum.photos/300/300"
                alt="Test picture"
                width={300}
                height={300}
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
        {Footer()}
      </div>
    </motion.div>
  );
}
