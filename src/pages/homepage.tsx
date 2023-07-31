import { Link } from "react-router-dom";
import HeroText from "../components/HeroText";

const About = () => {
  return (
    <>
      <section className="flex items-center flex-1 my-10 sm:my-32 container">
        <div className="flex flex-col w-full ">
          <HeroText />

          <p className="max-w-3xl mx-auto mt-5 lg:mt-14 text-lg text-center text-gray-700 md:text-xl">
            La mejor app para ver el clima en tiempo real.
          </p>

          <div className="mt-8 mx-auto">
            <Link
              to="/app"
              className="px-8 py-3 text-sm lg:text-lg font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2"
            >
              ABRIR APP
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
