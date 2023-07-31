import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layouts/default";
import Home from "./pages/homepage";
import Contact from "./pages/contact";
import About from "./pages/about";
import HomeApp from "./pages/app";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/app" element={<HomeApp />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/acerca-de" element={<About />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
