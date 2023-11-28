import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import MainRoutes from "./Routes/MainRoutes";
import AuthProvider from "./Providers/AuthProvider";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={MainRoutes} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
