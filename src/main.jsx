import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'

import HomePage from './pages/Accueil.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
   }, 
  {
    path: "/:id",
    element: <HomePage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <RouterProvider router={router} />
  
)
