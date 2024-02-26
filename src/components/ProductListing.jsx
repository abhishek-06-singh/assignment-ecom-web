import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Stats from "./smallComponents/Stats";
import Perks from "./Perks";
import Footer from "./Footer";
import { FaStar } from "react-icons/fa";
import Offers from "./smallComponents/Offers";
import ShimmerLoader from "./shimmerUi/ShimmerLoader";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode, selectDarkMode } from "../store/darkModeSlice";
const ProductListing = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const isDarkMode = useSelector(selectDarkMode);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <Stats />
      <div
        className={` ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <h1 className="flex items-center text-center justify-center  text-3xl font-bold ">
          Products.
        </h1>
        {loading ? (
          <ShimmerLoader />
        ) : (
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {product.map((product) => (
                <a
                  key={product.id}
                  href={product.href}
                  className="group"
                  onClick={() => navigate(`/product-overview/${product.id}`)}
                >
                  <div
                    className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7 p-1"
                    style={{ height: "300px" }}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                  <h3 className="mt-4 text-sm ">{product.title}</h3>
                  <p className="mt-1 text-lg font-medium ">${product.price}</p>
                  <div className="flex items-center mt-1 text-lg text-yellow-500">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <FaStar
                        key={index}
                        className={
                          index < Math.floor(product.rating.rate)
                            ? "text-indigo-500"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      <Offers />
      <Perks />
      <Footer />
    </>
  );
};

export default ProductListing;
