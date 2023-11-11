import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppContext from "./contexts/AppContext";
// import NotFound from "./components/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
    // errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
    // errorElement: <NotFound />,
  },
  // {
  //   path: "/not-found",
  //   element: <NotFound />,
  // },

]);
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AppContext>
    {/* <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#DB4537",
        },
        components: {
          Switch: {
            colorPrimary: "#024FA8",
            colorPrimaryHover: "#024FA8",
            colorTextQuaternary: "#A4A4A4",
            lineHeight: 2,
          },
          Radio: {
            colorPrimary: "#024FA8",
          },
          Select: {
            lineWidth: 1,
            controlHeight: 47,
          },
          Checkbox: {
            colorPrimary: "#024FA8",
            colorPrimaryHover: "#024FA8",
            controlInteractiveSize: 22,
          },
          Modal: {
            colorBgMask: "rgba(2, 79, 168, 0.4)",
          },
        },
      }}
    > */}
      <RouterProvider router={router} />
    {/* </ConfigProvider> */}
  </AppContext>
  // </React.StrictMode>
);
