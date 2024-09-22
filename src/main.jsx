import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import Questions from './Questions'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import PricingPage from './pricingPage'
import SupportPage from './supportPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/questions",
    element: <Questions />,
  },
  {
    path: "*",
    element: <App />,
  },
  {
    path: "/pricing",
    element: <PricingPage/>,
  },
  {
    path: "/support",
    element: <SupportPage/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)