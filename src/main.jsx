import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import SkillMetrics from './SkillMetrics'
import './index.css'
import Questions from './Questions'

const router = createBrowserRouter([
  {
    path: "/",
    element: <SkillMetrics />,
  },
  {
    path: "/login",
    element: <App />,
  },
  {
    path: "/home",
    element: <SkillMetrics />,
  },
  {
    path: "/questions",
    element: <Questions />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)