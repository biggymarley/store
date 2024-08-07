import { home } from "../data";
import Footer from "../home/footer";
import Header from "../home/header";

export default function Shipping() {
  return (
    <>
      <Header />
      <div className="h-20" />

      <div className="flex items-center justify-center p-4 mx-auto min-h-[50vh]  backdrop-blur-xl relative z-1 font-[sans-serif] ">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-black text-3xl font-extrabold text-center mb-8">
            Shipping policy
          </h1>
          <div className="flex flex-col gap-3">
            {home.shippingPolicy.map((item, index) => (
              <p className="text-xl text-black mt-4 " key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="h-20" />
      <Footer />
    </>
  );
}
