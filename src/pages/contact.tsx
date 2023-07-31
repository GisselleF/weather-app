const Contact = () => {
  return (
    <>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-white my-10 lg:mt-36">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leadi lg:text-5xl">
              Contactanos!
            </h2>
            <div className="dark:text-gray-400">Tenes alguna duda?</div>
          </div>
        </div>
        <form className="space-y-6">
          <div>
            <label className="text-sm text-gray-600">Nombre completo</label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full mt-1.5 p-3 rounded bg-gray-100 focus:ring ring-blue-400 transition"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              id="email"
              type="email"
              className="w-full mt-1.5 p-3 rounded bg-gray-100 focus:ring ring-blue-400 transition"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Mensaje</label>
            <textarea
              id="message"
              className="w-full mt-1.5 p-3 rounded bg-gray-100 focus:ring ring-blue-400 transition"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracki uppercase rounded bg-blue-500 bg-primary hover:bg-blue-600 transition text-white"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
