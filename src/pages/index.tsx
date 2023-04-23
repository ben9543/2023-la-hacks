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
              🍽️ Foodle
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
            <a className="text-4xl font-bold">Introducing Foodle!</a>
          </div>
          <div className="flex flex-1 justify-center text-center w-3/5">
            <a className="text-xl w-3/4 mb-20">
            Foodle is designed to cater to every type of food lover - from those who are looking for a quick bite to eat to those who want to take their time and savor every bite. Our app offers a variety of filters that allow users to sort through different cuisines, price ranges, and ratings to find the perfect restaurant for their taste and budget.
            </a>
          </div>
          <div className="flex flex-1 my-10 w-3/5">
            <div className="w-1/2 p-20">
              <div className="flex flex-1 justify-center mb-8">
                <a className="text-4xl font-bold">Food Exploration</a>
              </div>
              <div className="flex flex-1 justify-center">
                <a className="text-xl text-center">
                As our world becomes more diverse and interconnected, there is a growing demand for authentic ethnic cuisine. People are eager to explore new flavors and expand their culinary horizons beyond the familiar fast food chains and restaurants.
                </a>
              </div>
            </div>
            <div className="w-1/2 flex justify-center">
              <Image
                src="/../public/square.jpg"
                alt="Test picture"
                width={900}
                className="rounded-3xl"
                height={100}
                // className="aspect-square"
              />
            </div>
          </div>
          <div className="flex flex-1 my-10 w-3/5">
            <div className="w-1/2 flex justify-center">
              <Image
                src="/../public/doggystyle.jpg"
                alt="Test picture"
                width={800}
                className="rounded-3xl"
                height={500}
              />
            </div>
            <div className="w-1/2 p-20">
              <div className="flex flex-1 text-center mb-8">
                <a className="text-4xl font-bold">Here's how it works:</a>
              </div>
              <div className="flex flex-1 text-center">
                <a className="text-xl">
                 Simply enter your location into the app, and we'll show you a list of nearby ethnic restaurants. You can filter by cuisine type, price range, and amenities to find the perfect spot for your taste buds. Once you've chosen a restaurant, browse through their menu and read reviews from other users to help you decide what to order.
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-1 my-10 w-3/5">
            <div className="w-1/2 p-20">
              <div className="flex flex-1 text-center mb-8">
                <a className="text-4xl font-bold">Don't be an imposter, get started!</a>
              </div>
              <div className="flex flex-1 text-center">
                <a className="text-xl">
                With Foodle, you can discover hidden gems, try new dishes, and expand your culinary horizons - all with just a few taps on your phone. Sign up today and start exploring the world one dish at a time!
                </a>
              </div>
            </div>
            <div className="w-1/2 flex justify-center">
              <Image
                src="/../public/amog.jpg"
                alt="Test picture"
                width={900}
                className="rounded-3xl"
                height={100}
              />
            </div>
          </div>
        </div>
        {Footer()}
      </div>
    </motion.div>
  );
}
