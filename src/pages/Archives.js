import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Archives() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden ">
      <Header />

      <main className="flex-grow ">
        <section className="relative">
          {/* Section background (needs .relative class on parent and next sibling elements) */}
          <div
            className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 pointer-events-none "
            aria-hidden="true"
          ></div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pt-20 md:pb-20">
                <h2 className="h2 mb-4">All of our Newsletter Archives</h2>
                <p className="text-xl text-gray-600"></p>
              </div>

              {/* Items */}
              <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                {/* 1st issues */}
                <div className="relative flex flex-col items-center p-6 bg-white rounded-xl shadow-xl">
                  <a
                    href="https://aviyelverse.github.io/newsletter/november-22nd-2021/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-black">
                      Newsletter Issue #1
                    </h4>
                    <p className="text-gray-600 text-center">
                      Released Date:November 22nd 2021
                    </p>
                  </a>
                </div>

                {/* 2nd issues */}
                <div className="relative flex flex-col items-center p-6 bg-white rounded-xl shadow-xl">
                  <a
                    href="https://aviyelverse.github.io/newsletter/december-22nd-2021/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-black">
                      Newsletter Issue #2
                    </h4>
                    <p className="text-gray-600 text-center">
                      Released Date:December 23rd 2021
                    </p>
                  </a>
                </div>

                {/* 3rd issues */}
                <div className="relative flex flex-col items-center p-6 bg-white rounded-xl shadow-xl">
                  <a
                    href="https://aviyelverse.github.io/newsletter/january-6th-newsletter/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-black">
                      Newsletter Issue #3
                    </h4>
                    <p className="text-gray-600 text-center">
                      Released Date:January 10th 2022
                    </p>
                  </a>
                </div>

                {/* 4th issues */}
                <div className="relative flex flex-col items-center p-6 bg-white rounded-xl shadow-xl">
                  <a
                    href="https://aviyelverse.github.io/newsletter/january-26th-newsletter/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-black">
                      Newsletter Issue #4
                    </h4>
                    <p className="text-gray-600 text-center">
                      {" "}
                      Released Date:January 25th 2022
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Archives;
