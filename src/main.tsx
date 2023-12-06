import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/ErrorPage.tsx";
import GetPokemon from "./pages/GetPokemon.tsx";
import Pokedex from "./pages/Pokedex.tsx";
import Quiz from "./pages/Quiz.tsx";
import Team from "./pages/Team.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/get-pokemon",
        element: <GetPokemon />,
        errorElement: <Error />,
      },
      { path: "/pokedex", element: <Pokedex />, errorElement: <Error /> },
      { path: "/quiz", element: <Quiz />, errorElement: <Error /> },
      { path: "/team", element: <Team />, errorElement: <Error /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
