import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProuctsContext } from "../Context";
import Footer from "../home/footer";
import Header from "../home/header";
import { priceTag } from "../data";

export default function Catalog() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const {
    displayData,
    currentPage,
    totalPages,
    nextPage,
    previousPage,
    goToPage,
    searchData,
  } = useContext(ProuctsContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchData(search);
  };

  return (
    <>
      <Header />
      {/* <div className="h-20" /> */}

      <div className="relative z-1 cursor-pointer">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="mb-10">
            <form className="max-w-md" onSubmit={handleSubmit}>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only "
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Search products."
                  required=""
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-indigo-500 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 "
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {displayData?.map((product, index) => (
              <div
                onClick={() => navigate(`/catalog/${product.Handle}`)}
                className="flex flex-col shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
                key={index}
              >
                <div className="aspect-h-1 aspect-w-1 w-full h-[450px] overflow-hidden rounded-lg bg-white xl:aspect-h-8 xl:aspect-w-7  p-2">
                  <img
                    src={product["Variant Image"]}
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    className="h-full w-full object-contain object-center group-hover:opacity-75"
                  />
                </div>
                <div className="bg-slate-100 mt-auto p-4">
                  <h3 className="mt-4 text-sm font-semibold text-black capitalize">
                    {product.Title}
                  </h3>
                  <div className="flex  items-center gap-2">
                    <del className="text-red-400">
                      <p className="text-lg text-red-400 cursor-auto">
                        {priceTag}
                        {product["Variant Compare At Price"]}
                      </p>
                    </del>
                    <p className="text-lg font-medium text-black">
                      {priceTag}
                      {product["Variant Price"]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <nav>
          <ul className="inline-flex -space-x-px text-sm list-none">
            <li onClick={previousPage}>
              <span className="cursor-pointer flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">
                Previous
              </span>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index} onClick={() => goToPage(index + 1)}>
                <span
                  className={`cursor-pointer flex items-center justify-center px-3 h-8 leading-tight  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                    index + 1 === currentPage
                      ? "text-white bg-indigo-600"
                      : "text-gray-600 bg-white "
                  } `}
                >
                  {index + 1}
                </span>
              </li>
            ))}

            <li onClick={nextPage}>
              <span className="cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">
                Next
              </span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="h-20" />
      <Footer />
    </>
  );
}
