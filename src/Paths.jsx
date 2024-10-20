import React from 'react'
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
import SkillPage from './skillPage'
import CareerTest from './careerTest'
import ProtectedRoute from './ProtectedRoute'


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
    element: <ProtectedRoute><HomePage /></ProtectedRoute>,
  },
  {
    path: "/questions",
    element: <ProtectedRoute><Questions /></ProtectedRoute>,
  },
  {
    path: "/pricing",
    element: <ProtectedRoute><PricingPage /></ProtectedRoute>,
  },
  {
    path: "/support",
    element: <ProtectedRoute><SupportPage /></ProtectedRoute>,
  },
  {
    path: "/resources",
    element: <ProtectedRoute><ResourcesPage /></ProtectedRoute>,
  },
  {
    path: "/score",
    element: <ProtectedRoute><ScoreCard /></ProtectedRoute>,
  },
  {
    path: "/profile",
    element: <ProtectedRoute><ProfilePage /></ProtectedRoute>,
  },
  {
    path: "/profile/contribute",
    element: <ProtectedRoute><ContributePage /></ProtectedRoute>,
  },
  {
    path: "/profile/settings",
    element: <ProtectedRoute><SettingsPage /></ProtectedRoute>,
  },
  {
    path: "/skilltest",
    element: <ProtectedRoute><SkillPage /></ProtectedRoute>,
  },
  {
    path: "/careertest",
    element: <ProtectedRoute><CareerTest /></ProtectedRoute>,
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

