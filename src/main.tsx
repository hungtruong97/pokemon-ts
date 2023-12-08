import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/ErrorPage.tsx";
import GetPokemon from "./pages/GetPokemon.tsx";
import Pokedex from "./pages/Pokedex.tsx";
import Quiz from "./pages/Quiz.tsx";
import Team from "./pages/Team.tsx";
import Pokemon from "./organisms/Pokemon.tsx";
import Evolution from "./pages/Evolution.tsx";
import QuizQuestion from "./organisms/QuizQuestion.tsx";

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
      {
        path: "get-pokemon/:id",
        element: <Pokemon />,
        errorElement: <Error />,
      },
      { path: "/pokedex", element: <Pokedex />, errorElement: <Error /> },
      {
        path: "/quiz",
        element: <Quiz />,
        errorElement: <Error />,
      },
      {
        path: "/quiz/:id",
        element: <QuizQuestion />,
        errorElement: <Error />,
      },
      { path: "/team", element: <Team />, errorElement: <Error /> },
      {
        path: "/evolution/:id",
        element: <Evolution />,
        errorElement: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
