import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="overflow-hidden py-10 lg:py-20">
        <div className="container lg:max-w-7xl">
          <div className="flex flex-wrap items-center justify-between">
            <div className="mx-auto px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/3">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/rfHFq15/image-2.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/3">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-2 text-lg font-semibold text-primary">
                  Por que elegirnos?
                </span>
                <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl">
                  Tenemos el mejor servicio y los mejores precios del mundo.
                </h2>
                <p className="mb-8 text-base text-body-color">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less.
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-10 py-4 text-base text-center text-white font-bold rounded-xl bg-blue-500 bg-primary hover:bg-blue-600 transition lg:px-8 xl:px-10"
                >
                  Empezar ahora
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
