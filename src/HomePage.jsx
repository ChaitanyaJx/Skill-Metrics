import React, { useState, useContext} from 'react'
import { DarkModeContext } from '/src/DarkModeContext';
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, Cpu, Zap, User, Moon, Sun } from "lucide-react"
import { Link } from "react-router-dom"
import { ProfileIcon } from './functions/icons'
export default function HomePage() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const roles = [
    { name: "Artificial Intelligence", icon: <Cpu className="h-6 w-6" /> },
    { name: "Computer Science", icon: <Code className="h-6 w-6" /> },
    { name: "Mechanical Engineering", icon: <Zap className="h-6 w-6" /> },
    { name: "Electronics & Communication", icon: <BookOpen className="h-6 w-6" /> },
  ]

  return (
    <div className={`min-h-screen w-full flex flex-col ${darkMode ? 'bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-gray-100' : 'bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 text-gray-900'} font-sans transition-all duration-300`}>
      <nav className={`p-4 sticky top-0 z-10 backdrop-filter backdrop-blur-lg ${darkMode ? 'bg-gray-900 bg-opacity-40' : 'bg-white bg-opacity-40'} shadow-lg w-full`}>
        <div className="container mx-auto flex justify-between items-center">
          <span className={`text-xl font-bold ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>SkillMetrics</span>
          <div className="flex items-center space-x-4">
            <Link to="/home">
              <Button variant="ghost" className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors`}>
                Home
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="ghost" className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors`}>
                Pricing
              </Button>
            </Link>
            <Button variant="ghost" className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors`}>
            <Link to="/resources">  
              Resources
            </Link>
            </Button>
            <Button variant="ghost" className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors`}>
              <Link to="/support">Support</Link>
              </Button>
            <ProfileIcon darkMode={darkMode} />
            <Button variant="ghost" onClick={toggleDarkMode} className="ml-4">
              {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-indigo-600" />}
            </Button>
          </div>
        </div>
      </nav>

      <main className={`flex-grow w-full flex flex-col justify-start pt-8`}>
        <div className="text-center mb-8">
          <h1 className={`text-5xl font-extrabold mb-4 ${darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300' : 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500'}`}>
            Skill Metrics
          </h1>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Find out your skills gaps and find your potential using quality questions and resources. Take the test now!
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <Button className={`${darkMode ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white' : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white'} font-semibold py-3 px-6 rounded-full transition-all transform hover:scale-105`}>
            <BookOpen className="mr-2 h-5 w-5" /> Check your skill potential with your Github Profile
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-4 mb-8">
          {roles.map((role, index) => (
            <Link key={index} to="/questions">
              <Card className={`${darkMode ? 'bg-gray-800 bg-opacity-90 border-gray-700' : 'bg-white bg-opacity-90 border-purple-200'} transition-all duration-300 transform hover:scale-105 shadow-xl w-full`}>
                <CardContent className="p-6 flex flex-col items-center">
                  <div className={`mb-4 p-4 ${darkMode ? 'bg-gradient-to-r from-pink-500 to-purple-600' : 'bg-gradient-to-r from-pink-500 to-purple-600'} rounded-full`}>
                    {React.cloneElement(role.icon, { className: "h-8 w-8 text-white" })}
                  </div>
                  <h3 className={`text-lg font-semibold text-center ${darkMode ? 'text-gray-100' : 'text-purple-600'}`}>{role.name}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}