import Link from "next/link";
import React from "react";
import { ChevronRightIcon, MinusSmallIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
      <Link href="/" className="font-bold text-xl">
        Stripe
      </Link>
      <nav>
        <ul className="flex items-center justify-center font-semibold">
          <li className="relative group px-3 py-2">
            <button className="hover:opacity-50 cursor-default">
              Products
            </button>
            <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>

                <div className="realtive z-10">
                  <div className="grid grid-cols-2 gap-6">


                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                        THE SUITE{" "}
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <Link
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Course Editor
                            <p className="text-gray-500 font-normal">
                              All-in-one Editor
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Accept Payments
                            <p className="text-gray-500 font-normal">
                              Pre-Build Payment Page
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Closed Captioning
                            <p className="text-gray-500 font-normal">
                              Use AI to add captions
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </div>


                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                        THE SUITE{" "}
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <Link
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Course Editor
                            <p className="text-gray-500 font-normal">
                              All-in-one Editor
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Accept Payments
                            <p className="text-gray-500 font-normal">
                              Pre-Build Payment Page
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Closed Captioning
                            <p className="text-gray-500 font-normal">
                              Use AI to add captions
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group px-3 py-2">
            <button className="hover:opacity-50 cursor-default">
              Solutions
            </button>
            <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[300px] transform">
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>

                <div className="realtive z-10">
                  <div className="flex flex-col">


                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                        THE SUITE{" "}
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <Link
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Course Editor
                            <p className="text-gray-500 font-normal">
                              All-in-one Editor
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Accept Payments
                            <p className="text-gray-500 font-normal">
                              Pre-Build Payment Page
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Closed Captioning
                            <p className="text-gray-500 font-normal">
                              Use AI to add captions
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </div>


                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                        THE SUITE{" "}
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <Link
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Course Editor
                            <p className="text-gray-500 font-normal">
                              All-in-one Editor
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Accept Payments
                            <p className="text-gray-500 font-normal">
                              Pre-Build Payment Page
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Closed Captioning
                            <p className="text-gray-500 font-normal">
                              Use AI to add captions
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group px-3 py-2">
            <button className="hover:opacity-50 cursor-default">
              Developers
            </button>
            <div className="absolute top-0 left-0 transition"></div>
          </li>{" "}
          <li className="relative group px-3 py-2">
            <button className="hover:opacity-50 cursor-default">
              Resources
            </button>
            <div className="absolute top-0 left-0 transition"></div>
          </li>{" "}
          <li className="relative group px-3 py-2">
            <Link href="#" className="hover:opacity-50 cursor-default">
              Pricing
            </Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <Link
              href="#"
              className="rounded-full px-3 py-2 font-semibold bg-white bg-opacity-10 flex items-center hover:shadow-md group"
            >
              <span className="mr-1">Sign in</span>
              <MinusSmallIcon className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition ease-out duration-200" />
              <ChevronRightIcon className="h-5 w-5 text-white opacity-100 group-hover:translate-x-1 transition ease-in-out duration-200" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
