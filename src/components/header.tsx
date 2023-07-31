// header tailwind navbar

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-3 md:p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl">Weather App</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-x-5">
            <Link to="/" className="md:mr-5 hover:text-gray-900 font-medium">
              Inicio
            </Link>
            <Link to="/app" className="md:mr-5 hover:text-gray-900 font-medium">
              App
            </Link>
            <Link
              to="/acerca-de"
              className="md:mr-5 hover:text-gray-900 font-medium"
            >
              Acerca de
            </Link>
            <Link
              to="/contacto"
              className="md:mr-5 hover:text-gray-900 font-medium"
            >
              Contacto
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
