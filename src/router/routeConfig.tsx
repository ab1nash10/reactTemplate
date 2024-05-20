import Layout from "@/Layout";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";
import { appRoutes } from "./routes";
const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: appRoutes.HOME,
        element: <Home />,
        index: true,
      },
      {
        path: appRoutes.ABOUT,
        element: <About />,
        index: true,
      },
      {
        path: appRoutes.CONTACT,
        element: <Contact />,
        index: true,
      },
    ],
  },
]);

export default mainRouter;
