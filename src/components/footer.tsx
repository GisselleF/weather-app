import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto flex items-center justify-center sm:flex-row flex-col">
          <Link
            to="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <span className="ml-3 text-xl">Weather App</span>
          </Link>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 Weather App
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
