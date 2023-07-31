const HeroText = () => {
  return (
    <>
      <h1 className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
        <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 ">
          Weather
        </span>

        <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 ">
          App
        </span>
      </h1>
    </>
  );
};

export default HeroText;
