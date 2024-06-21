import Footer from "./footer";
import Header from "./header";
import { Hero } from "./hero";
import { FoldingLogos } from "./paymentsMethods";
import { Products } from "./products";
import { StaggerTestimonials } from "./rating";
export default function Home() {
  return (
    <div className="z-10">
      <Header />
      <Hero />
      <Products />
      <div className="h-60" />
      <p className="text-center text-4xl font-bold md:text-5xl text-slate-100">
        Customer Reviews for Our
        <span className="text-slate-400"> Premium Fish Food</span>
      </p>
      <StaggerTestimonials />
      <div className="h-60" />
      {/* pyments */}
      <FoldingLogos />
      <div className="h-20" />
      <Footer />
    </div>
  );
}
