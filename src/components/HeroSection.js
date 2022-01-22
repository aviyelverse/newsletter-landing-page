import React, { useState } from "react";
import Modal from "../utils/Modal.js";

function HerSection() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Aviyel{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-500">
                Newsletter
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Archives of all of our previously published Newsletters.
              </p>

              <div
                className="relative flex justify-center mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="450"
              >
                <div className="flex flex-col justify-center">
                  <img
                    className="mx-auto"
                    src={require("../assets/images/Hero.png")}
                    width="508"
                    height="432"
                    alt="Newsletter Main Banner"
                  />
                </div>
                {/* <button
                  className="absolute top-full flex items-center transform -translate-y-1/2 bg-purple-200 rounded-xl font-medium group p-4 shadow-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setVideoModalOpen(true);
                  }}
                  aria-controls="modal"
                >
                  <svg
                    className="w-6 h-6 fill-current text-purple-500 group-hover:text-purple-600  flex-shrink-0"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                    <path d="M10 17l6-5-6-5z" />
                  </svg>
                  <span className="ml-3 text-purple-600">
                    Aviyel - Even ideas need propogation!
                  </span>
                </button> */}
              </div>

              <section>
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                  <div className="pb-12 md:pb-20">
                    <div
                      className="relative bg-purple-600 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden"
                      data-aos="zoom-y-out"
                    >
                      <div
                        className="absolute right-0 bottom-0 pointer-events-none hidden lg:block"
                        aria-hidden="true"
                      ></div>

                      <div className="relative flex flex-col lg:flex-row justify-between items-center">
                        <div className="text-center lg:text-left lg:max-w-xl">
                          <h3 className="h3 text-white mb-2">
                            Subscribe to our fresh Newsletters !
                          </h3>
                          <p className="text-gray-100 text-lg mb-6">
                            Your bimonthly dose of freshly curated tech news!
                          </p>

                          <form className="w-full lg:w-auto">
                            <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                              <input
                                type="email"
                                className="w-full appearance-none bg-purple-100 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-black placeholder-gray-500"
                                placeholder="Enter your email…"
                                aria-label="Enter your email…"
                              />
                              <a
                                className="btn text-white bg-purple-300 hover:bg-purple-500 shadow"
                                href="#"
                              >
                                Subscribe!
                              </a>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div>
            <Modal
              id="modal"
              ariaLabel="modal-headline"
              show={videoModalOpen}
              handleClose={() => setVideoModalOpen(false)}
            >
              <div className="relative pb-9/16">
                <iframe
                  className="absolute w-full h-full"
                  src="https://www.youtube.com/embed/ZXS-yZ6drq0"
                  title="Video"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HerSection;
