import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import Products from "../pages/Products";
import App from "../App";
import Home from "../pages/Home";
import ProductsDetails from "../pages/ProductsDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Ooops... something went wrong</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },

      {
        path: "products/:id",
        element: <ProductsDetails />,
      },
      {
        path: "old-products",
        element: <Navigate to="/products" />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
