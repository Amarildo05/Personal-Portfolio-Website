import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Layout from "./componenets/layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use Layout component here
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}