function HerSection() {
  return (
    <section className="relative">
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-0">
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-600">
                Aviyel Newsletter
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Aviyel is a community platform that helps open source project
                communities to monetize and sustain themselves in the long run.
                Aviyel is commited to get open source projects traction from
                developers around the world to adopt and maintain them.
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
                            <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-xl lg:mx-0">
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
        </div>
      </div>
    </section>
  );
}

export default HerSection;
