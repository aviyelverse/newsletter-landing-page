import React, { useState, useRef, useEffect } from "react";
import SwiftAnimate from "../utils/SwiftAnimate.js";

const NewsletterIssues = () => {
  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height =
        tabs.current.children[tab - 1].offsetHeight + "px";
    }
  };

  useEffect(() => {
    heightFix();
  }, [tab]);

  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-purple-200 pointer-events-none pb-26"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Newsletter Archives</h1>
            <p className="text-xl text-gray-600">
              Archives of all of our previously published Newsletters.
            </p>
          </div>

          <div className="md:grid md:grid-cols-12 md:gap-6">
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">All of our released #Issues</h3>
                <p className="text-xl text-gray-600"></p>
              </div>
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 1
                      ? "bg-white shadow-md border-purple-200 hover:shadow-lg"
                      : "bg-purple-500 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Newsletter issue #1
                    </div>
                    <div className="text-gray-100">
                      Released Date: November 22nd 2021
                    </div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? "bg-white shadow-md border-purple-200 hover:shadow-lg"
                      : "bg-purple-500 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Newsletter issue #2
                    </div>
                    <div className="text-gray-100">
                      Released Date: December 23rd 2021
                    </div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? "bg-white shadow-md border-purple-200 hover:shadow-lg"
                      : "bg-purple-500 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Newsletter issue #3
                    </div>
                    <div className="text-gray-100">
                      {" "}
                      Released Date: January 10th 2021
                    </div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 4
                      ? "bg-white shadow-md border-purple-200 hover:shadow-lg"
                      : "bg-purple-500 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(4);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Newsletter issue #4
                    </div>
                    <div className="text-gray-100">
                      Release Date: January 25th 2021.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-yellow-500 rounded-full shadow flex-shrink-0 ml-3">
                    <p>⭐</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              data-aos="zoom-y-out"
              ref={tabs}
            >
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Issues  1 */}
                <SwiftAnimate
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <a
                      href="https://aviyelverse.github.io/newsletter/november-22nd-2021/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="md:max-w-none mx-auto rounded transform animate-float"
                        src={require("../assets/images/issue1.png")}
                        width="500"
                        height="462"
                        alt="Issues"
                      />
                    </a>
                  </div>
                </SwiftAnimate>
                {/* Issues  2 */}
                <SwiftAnimate
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <a
                      href="https://aviyelverse.github.io/newsletter/december-22nd-2021/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="md:max-w-none mx-auto rounded transform animate-float"
                        src={require("../assets/images/issue2.png")}
                        width="500"
                        height="462"
                        alt="Issues"
                      />
                    </a>
                  </div>
                </SwiftAnimate>
                {/* Issues  3 */}
                <SwiftAnimate
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <a
                      href="https://aviyelverse.github.io/newsletter/january-6th-newsletter/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="md:max-w-none mx-auto rounded transform animate-float"
                        src={require("../assets/images/issue3.png")}
                        width="500"
                        height="462"
                        alt="Issues"
                      />
                    </a>
                  </div>
                </SwiftAnimate>
                {/* Issues  4 */}
                <SwiftAnimate
                  show={tab === 4}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <a
                      href="https://aviyelverse.github.io/newsletter/november-22nd-2021/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        href="#"
                        className="md:max-w-none mx-auto rounded transform animate-float"
                        src={require("../assets/images/issue4.png")}
                        width="500"
                        height="462"
                        alt="Issues"
                      />
                    </a>
                  </div>
                </SwiftAnimate>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterIssues;
