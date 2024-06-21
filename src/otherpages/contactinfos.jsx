import { home } from "../data";
import Footer from "../home/footer";
import Header from "../home/header";

export default function Contactusinfos() {
  return (
    <>
      <Header />
      <div className="h-60" />

      <div className="flex items-center justify-center p-4 mx-auto min-h-[50vh] font-[sans-serif] bg-slate-900/60 backdrop-blur-xl relative z-1">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-white text-3xl font-extrabold">Contact Us</h1>
          <div className="flex flex-col gap-3">
            <p className="text-sm text-gray-300 mt-4">{home.contactus.title}</p>
            <p className="text-sm text-gray-300">{home.contactus.adrs}</p>
            <p className="text-sm text-gray-300">{home.contactus.phonetitle}</p>
            <p className="text-sm text-gray-300">
              {" "}
              {home.contactus.phonesubtitle}
            </p>
            <p className="text-sm text-gray-300"> {home.contactus.phone}</p>
          </div>
          <div className="mt-12">
            <h2 className="text-gray-200 text-base font-bold">Email</h2>
            <ul className="mt-4">
              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#000000"
                    viewBox="0 0 479.058 479.058"
                  >
                    <path
                      d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                      data-original="#000000"
                    />
                  </svg>
                </div>
                <a
                  href="javascript:void(0)"
                  className="text-gray-200 text-sm ml-4"
                >
                  <small className="block">Mail</small>
                  <strong>{home.contactus.email}</strong>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-20" />
      <Footer />
    </>
  );
}
