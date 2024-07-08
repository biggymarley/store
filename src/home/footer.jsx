import React from "react";
import { Link } from "react-router-dom";
import { home } from "../data";
import { Mastercard, Visa, Paypal } from "react-payment-logos/dist/flat";

export default function Footer() {
  return (
    <footer className=" relative z-1 backdrop-blur-xl bg-gradient-to-br from-indigo-400 to-indigo-700 mt-auto">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between flex-col gap-8">
          <div className="grid grid-cols-2 gap-1 sm:grid-cols-3">
            {home.footer.items.map((item, index) => (
              <div key={index}>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {item.head}
                </h2>
                <ul className="text-slate-300  font-medium list-none m-0">
                  {item.subitems.map((it, index) => (
                    <li className="mb-4" key={index}>
                      <Link to={it.path}>{it.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {currentYear}{" "}
            <a href="#" className="hover:underline">
              {home.storeName}™
            </a>
            . All Rights Reserved.
          </span>
          <div  className="flex  gap-4">
            {home.footer.subfooter.map((e, index) => (
              <div key={index}>{<e.icon />}</div>
            ))}
            {/* <Mastercard /> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
// let now = new Date();
let currentYear = "2023";
