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
        className="absolute inset-0 bg-purple-200 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-100 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Newsletter Archives</h1>
            <p className="text-xl text-gray-600">
              Aviyel is a community platform that helps open source project
              communities to monetize and sustain themselves in the long run.
              Aviyel is commited to get open source projects traction from
              developers around the world to adopt and maintain them.
            </p>
          </div>

          <div className="md:grid md:grid-cols-12 md:gap-6">
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">All our Newsletter Issues</h3>
                <p className="text-xl text-gray-600"></p>
              </div>
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 1
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
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
                    <div className="text-gray-600">Newsletter</div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Newsletter issue #1
                    </div>
                    <div className="text-gray-600">Newsletter</div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Newsletter issue #1
                    </div>
                    <div className="text-gray-600">Newsletter.</div>
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
                {/* Item 1 */}
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
                    <img
                      className="md:max-w-none mx-auto rounded"
                      src={require("../assets/images/issue4.png")}
                      width="500"
                      height="462"
                      alt="Issues"
                    />
                    <img
                      className="md:max-w-none absolute w-full left-0 transform animate-float"
                      src={require("../assets/images/Hero.png")}
                      width="500"
                      height="44"
                      alt="Issues"
                      style={{ top: "10%" }}
                    />
                  </div>
                </SwiftAnimate>
                {/* Item 2 */}
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
                    <img
                      className="md:max-w-none mx-auto rounded"
                      src={require("https://user-images.githubusercontent.com/37651620/147326755-8eee40c5-7b9c-4c1d-9d87-75b3e549158e.png")}
                      width="500"
                      height="462"
                      alt="Issues"
                    />
                    <img
                      className="md:max-w-none absolute w-full left-0 transform animate-float"
                      src={require("https://user-images.githubusercontent.com/37651620/147326755-8eee40c5-7b9c-4c1d-9d87-75b3e549158e.png")}
                      width="500"
                      height="44"
                      alt="Issues"
                      style={{ top: "30%" }}
                    />
                  </div>
                </SwiftAnimate>
                {/* Item 3 */}
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
                    <img
                      className="md:max-w-none mx-auto rounded"
                      src={require("https://user-images.githubusercontent.com/37651620/147326755-8eee40c5-7b9c-4c1d-9d87-75b3e549158e.png")}
                      width="500"
                      height="462"
                      alt="Issues"
                    />
                    <img
                      className="md:max-w-none absolute w-full left-0 transform animate-float"
                      src={require("https://user-images.githubusercontent.com/37651620/147326755-8eee40c5-7b9c-4c1d-9d87-75b3e549158e.png")}
                      width="500"
                      height="44"
                      alt="Issues"
                      style={{ top: "30%" }}
                    />
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