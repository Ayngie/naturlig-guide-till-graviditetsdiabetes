import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./components/pages/Home";
import { LifeAdvice } from "./components/pages/LifeAdvice";
import { TrainingAdvice } from "./components/pages/TrainingAdvice";
import { FoodAdvice } from "./components/pages/FoodAdvice";
import { RecipeTips } from "./components/pages/RecipeTips";
import { SearchFood } from "./components/pages/SearchFood";
import { AboutProject } from "./components/pages/AboutProject";
import { ErrorPage404 } from './components/pages/ErrorPage404';
import './index.scss'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage404></ErrorPage404>,
    children: [
      {
        path: "/naturlig-guide-till-graviditetsdiabetes",
        element: <Home></Home>,
        index: true,
      },
      {
        path: "/naturlig-guide-till-graviditetsdiabetes/life",
        element: <LifeAdvice></LifeAdvice>,
      },
      {
        path: "/naturlig-guide-till-graviditetsdiabetes/training",
        element: <TrainingAdvice></TrainingAdvice>,
      },
      {
        path: "/naturlig-guide-till-graviditetsdiabetes/food",
        element: <FoodAdvice></FoodAdvice>,
      },
      {
        path: "/naturlig-guide-till-graviditetsdiabetes/recipes",
        element: <RecipeTips></RecipeTips>,
      },
      {
        path: "/naturlig-guide-till-graviditetsdiabetes/search",
        element: <SearchFood></SearchFood>,
      },
      {
        path: "/naturlig-guide-till-graviditetsdiabetes/about",
        element: <AboutProject></AboutProject>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
