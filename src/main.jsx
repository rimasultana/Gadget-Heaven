import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import Provider from "./Provider/Provider";
import "@smastrom/react-rating/style.css";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <Provider>
        <RouterProvider router={router} />
        <Toaster />
      </Provider>
    </HelmetProvider>
  </StrictMode>
);
