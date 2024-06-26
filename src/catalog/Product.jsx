import React, { useContext, useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ProuctsContext } from "../Context";
import Footer from "../home/footer";
import Header from "../home/header";
import { priceTag } from "../data";
import { toast } from "sonner";

export default function Product() {
  const navigate = useNavigate();

  const { data, addItem } = useContext(ProuctsContext);
  const { id } = useParams();
  const [count, setcount] = useState(1);
  const [product, setProduct] = useState({
    id: "",
    productName: "",
    price: "",
    image: "",
  });

  const addandnavigate = () => {
    addItem(product, count);
    navigate("/cart");
  };

  const fetchdata = () => {
    const res = data?.filter((p) => p.Handle == id);
    if (res && res.length > 0) setProduct({ ...res[0] });
    else {
      navigate("/catalog");
      toast.error("Product not found");
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <Header />
      <div className="h-40" />
      <section className="relative  min-h-screen flex items-center ">
        <div className="w-full mx-auto px-4 overflow-hidden sm:px-6 lg:px-0 bg-slate-800 max-w-6xl rounded-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2 ">
            <div className="img">
              <div className="img-box h-full max-lg:mx-auto items-center flex bg-white">
                <img
                  src={product["Variant Image"]}
                  alt="Yellow Tropical Printed Shirt image"
                  className="max-lg:mx-auto lg:mx-auto  "
                />
              </div>
            </div>
            <div className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0 py-8">
              <div className="data w-full max-w-xl">
                <h2 className="font-manrope font-bold text-3xl leading-10 text-white mb-2 capitalize">
                  {product.Title}
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                  <h6 className="font-manrope font-semibold text-2xl leading-9 text-white pr-5 sm:border-r border-gray-200 mr-5">
                    <del>
                      <p className="text-sm text-white cursor-auto ml-2">
                        {priceTag}
                        {product["Variant Compare At Price"]}
                      </p>
                    </del>
                    {priceTag}
                    {product["Variant Price"]}
                  </h6>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <BsStarFill color="#FBBF24" />
                      <BsStarFill color="#FBBF24" />
                      <BsStarFill color="#FBBF24" />
                      <BsStarFill color="#FBBF24" />
                      <BsStarFill color="#F3F4F6" />
                    </div>
                    <span className="pl-2 font-normal leading-7 text-gray-100 text-sm ">
                      1624 review
                    </span>
                  </div>
                </div>

                <div>
                  <div
                    dangerouslySetInnerHTML={{ __html: product["Body (HTML)"] }}
                    className="text-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-8">
                  <div className="flex sm:items-center sm:justify-center w-full">
                    <button
                      onClick={() => setcount(count - 1 > 0 ? count - 1 : 1)}
                      className="group py-6 px-6 border border-gray-400 rounded-l-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300"
                    >
                      <BiMinus />
                    </button>
                    <input
                      type="text"
                      value={count}
                      // onChange={(e) => setcount(e.target.value)}
                      className="font-semibold text-white cursor-pointer text-lg py-5 px-6 w-full sm:max-w-[118px] outline-0 border-y border-gray-400 bg-transparent placeholder:text-white text-center "
                      placeholder="1"
                    />
                    <button
                      onClick={() => setcount(count + 1)}
                      className="group py-6 px-6 border border-gray-400 rounded-r-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300"
                    >
                      <BiPlus />
                    </button>
                  </div>
                  <button
                    onClick={() => addItem(product, count)}
                    className="group py-4 px-5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-lg w-full flex items-center justify-center gap-2 transition-all duration-500 hover:bg-indigo-100"
                  >
                    <svg
                      className="stroke-indigo-600 "
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75"
                        stroke=""
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                    Add to cart
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={addandnavigate}
                    className="text-center w-full px-5 py-4 rounded-[100px] bg-indigo-600 flex items-center justify-center font-semibold text-lg text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="h-20" />
      <Footer />
    </>
  );
}
