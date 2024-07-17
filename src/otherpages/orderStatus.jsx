import { useState } from "react";
import { home } from "../data";
import Footer from "../home/footer";
import Header from "../home/header";

export default function OrderStatus() {
  const [orderstatus, setorderstatus] = useState('')
  return (
    <>
      <Header />
      <div className="h-20" />

      <div className="flex items-center justify-center p-4 mx-auto min-h-[50vh]  backdrop-blur-xl relative z-1 font-[sans-serif] ">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-black text-3xl font-extrabold text-center mb-8">
            Order Status
          </h1>
          <div className="flex flex-col gap-3 max-w-xl">
            {home.orderstatus.map((item, index) => (
              <p className="text-xl text-black mt-4 " key={index}>
                {item}
              </p>
            ))}
            <input
              type="text"
              placeholder="tracking number"
              className="w-full rounded-md py-3 px-4 bg-gray-100 text-slate-900 text-sm outline-blue-500 "
              value={orderstatus}
              onChange={(e) => setorderstatus(e.target.value)}
            />
            <button
              type="button"
              disabled={orderstatus.trim() === ''}
              className="text-white bg-indigo-600 hover:bg-indigo-800 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6"
            >
              Track
            </button>
          </div>
        </div>
      </div>
      <div className="h-20" />
      <Footer />
    </>
  );
}
