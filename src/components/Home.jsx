import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { IoMdArchive } from "react-icons/io";
import blackimage from "../assets/white.png";
import Collection from "./Collection ";
import {
  setEmail,
  setPassword,
  selectEmail,
  selectPassword,
} from "../store/authSlice";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import Perks from "./Perks";
import Trending from "./Trending";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import Testemonials from "./smallComponents/Testemonials";

const Home = () => {
  const email = useSelector(selectEmail);

  const navigate = useNavigate();
  return (
    <div className="bg-white">
      <Header />
      <main>
        <div className="relative isolate px-6 pt-14 lg:px-8 z-30 h-screen ">
          <div className="mx-auto max-w-2xl py-20 sm:py-48 lg:py-20">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 mb-4">
                Announcing our best range of products{" "}
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-4 z-10">
                Welcome to Our Store!
              </h1>
              <p className="mt-8 text-lg leading-8 text-gray-600">
                Explore our latest collections and find your perfect style. Shop
                now for great deals and discounts on a wide range of products.
              </p>
              <div className="mt-14 flex items-center justify-center gap-x-6">
                <span
                  onClick={() => navigate("/products")}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm cursor-pointer font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Product Listing
                </span>
                <span
                  onClick={() => navigate("/products")}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </span>
              </div>
            </div>
            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
              <div
                className=" relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
        </div>

        <Trending />
        <Testemonials />
        <Perks />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
