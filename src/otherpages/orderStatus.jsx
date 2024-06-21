import { home } from "../data";
import Footer from "../home/footer";
import Header from "../home/header";

export default function OrderStatus() {
  return (
    <>
      <Header />
      <div className="h-60" />

      <div className="flex items-center justify-center p-4 mx-auto min-h-[50vh] bg-slate-900 font-[sans-serif] ">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-white text-3xl font-extrabold text-center mb-8">
            Order Status
          </h1>
          <div className="flex flex-col gap-3 max-w-xl">
            {home.orderstatus.map((item, index) => (
              <p className="text-xl text-white mt-4 " key={index}>
                {item}
              </p>
            ))}
            <input
              type="text"
              placeholder="tracking number"
              className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 "
            />
            <button
              type="button"
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
