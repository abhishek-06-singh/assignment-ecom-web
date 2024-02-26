import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode, selectDarkMode } from "../store/darkModeSlice";
const incentives = [
  {
    name: "Free shipping",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
    description:
      "Enjoy free shipping on all orders. No minimum purchase required.",
  },
  {
    name: "Easy returns",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
    description:
      "Not satisfied with your purchase? No worries! Return it hassle-free within 30 days for a full refund.",
  },
  {
    name: "24/7 Customer Support",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
    description:
      "Need assistance? Our dedicated customer support team is available round-the-clock to assist you with any queries or concerns.",
  },
];

const Trending = () => {
  const isDarkMode = useSelector(selectDarkMode);
  return (
    <div
      className={`bg-gradient-to-r from-indigo-50 to-indigo-50  relative *:${
        isDarkMode
          ? "bg-gradient-to-r from-gray-900 to-indigo-950 text-white"
          : "bg-gradient-to-r from-indigo-50 to-indigo-50 text-black"
      }`}
    >
      <div className="absolute inset-x-0 bottom-0 "></div>
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight ">
                Our Commitment to Exceptional Customer Service
              </h2>
              <p className="mt-4 text-gray-500">
                At OurStore, we prioritize providing outstanding customer
                service at every step of your shopping journey. We believe in
                building long-lasting relationships with our customers, and your
                satisfaction is our top priority. Our dedicated team is here to
                assist you with any questions, concerns, or issues you may
                encounter. Whether you need help finding the perfect product,
                assistance with your order, or support after your purchase,
                we're here to help, 24/7.
              </p>
            </div>

            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg ">
              <img
                src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg"
                alt=""
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                  <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                </div>
                <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-sm font-medium ">{incentive.name}</h3>
                  <p className="mt-2 text-sm ">{incentive.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
