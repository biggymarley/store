import { home } from "../data";
import Footer from "../home/footer";
import Header from "../home/header";

export default function Privacypolicy() {
  return (
    <>
      <Header />
      <div className="h-60" />

      <div className="flex items-center justify-center p-4 mx-auto min-h-[50vh] bg-slate-900/60 backdrop-blur-xl relative z-1 font-[sans-serif] ">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-white text-3xl font-extrabold text-center mb-8">Privacy policy</h1>
          <div className="flex flex-col gap-3">
            {home.pp.map((item, index) => (
              <p className="text-xl text-white mt-4 " key={index}>
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
