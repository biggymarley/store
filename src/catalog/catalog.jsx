import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProuctsContext } from "../Context";
import Footer from "../home/footer";
import Header from "../home/header";
import { priceTag } from "../data";

export default function Catalog() {
  const navigate = useNavigate();
  const { data, loading, error } = useContext(ProuctsContext);
  return (
    <>
      <Header />
      {/* <div className="h-20" /> */}

      <div className="relative z-1 cursor-pointer">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {data?.map((product, index) => (
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
      <div className="h-20" />
      <Footer />
    </>
  );
}
