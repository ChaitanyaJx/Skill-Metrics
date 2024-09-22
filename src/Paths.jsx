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
import ResourcesPage from './resourcesPage'
import ScoreCard from './scoreCard'
import ProfilePage from './profilePage'
import ContributePage from './profilePage/ContributePage'
import SettingsPage from './profilePage/settingsPage'
import { DarkModeProvider } from './DarkModeContext'

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
    path: "/pricing",
    element: <PricingPage />,
  },
  {
    path: "/support",
    element: <SupportPage />,
  },
  {
    path: "/resources",
    element: <ResourcesPage />,
  },
  {
    path: "/score",
    element: <ScoreCard />,

  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/profile/contribute ",
    element: <ContributePage/>,
  },
  {
    path: "/profile/settings",
    element: <SettingsPage />,
  },
  {
    path: "*",
    element: <App />,
  }
])
const Paths = () => {
    return (
      <DarkModeProvider>
        <RouterProvider router={router} />
      </DarkModeProvider>
    );
  }

  export default Paths;