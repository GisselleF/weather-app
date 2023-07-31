import { useState } from "react";
import HeroText from "../components/HeroText";

const HomeApp = () => {
  const API_WEATHER = `https://api.weatherapi.com/v1/current.json?key=${
    import.meta.env.VITE_API_KEY
  }&lang=es&q=`;

  // const [city, setCity] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temperature: 0,
    condition: "",
    conditionText: "",
    icon: "",
  });

  const [searchInput, setSearchInput] = useState(""); // Add state for the search input field

  const handleInputChange = (e: any) => {
    setSearchInput(e.target.value);
  };

  const uploadToJsonServer = (data: any) => {
    fetch("http://localhost:3000/weather", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setError({ error: false, message: "" });
    setLoading(true);

    try {
      if (!searchInput.trim())
        throw { message: "El campo ciudad es obligatorio" };

      const res = await fetch(API_WEATHER + searchInput);
      const data = await res.json();

      if (data.error) {
        throw { message: data.error.message };
      }

      setWeather({
        city: data.location.name,
        country: data.location.country,
        temperature: data.current.temp_c,
        condition: data.current.condition.code,
        conditionText: data.current.condition.text,
        icon: data.current.condition.icon,
      });

      uploadToJsonServer(data);
    } catch (error: any) {
      setError({ error: true, message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container px-5 my-10 sm:my-32 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <HeroText />
        </div>

        <p className="lg:w-2/3 mx-auto leading-relaxed sm:text-2xl text-base mb-3 text-gray-600">
          Busca el clima de tu ciudad favorita
        </p>

        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto">
          <input
            className="flex-grow w-full bg-gray-100 rounded border border-gray-400 focus:border-none focus:outline-none focus:ring ring-blue-600 transition text-base lg:text-lg px-4 lg:px-6 py-2 mb-4 sm:mr-0 sm:mb-0"
            placeholder="Buscar una ciudad..."
            type="text"
            value={searchInput}
            onChange={handleInputChange} // Add the onChange event handler to update the searchInput state
            onKeyUp={(e) => {
              if (e.key === "Enter") onSubmit(e);
            }}
          />
          <button
            className="px-8 py-3 text-lg lg:text-xl font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2"
            onClick={onSubmit} // Add the onClick event handler to trigger the weather search
          >
            Buscar
          </button>
        </div>
        <div className="flex flex-col items-center mt-8">
          {loading ? (
            <p>Cargando...</p>
          ) : (
            <>
              {error.error && <p className="text-red-500">{error.message}</p>}
              {weather.city && (
                <>
                  <h2 className="text-xl font-medium text-gray-900 mb-2">
                    Clima en {weather.city}, {weather.country}
                  </h2>
                  <p>Temperatura: {weather.temperature} °C</p>
                  <p>Condición: {weather.conditionText}</p>
                  {/* Add weather icon */}
                  {weather.icon && (
                    <img
                      src={weather.icon}
                      alt="Weather Icon"
                      className="w-16 h-16"
                    />
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default HomeApp;
