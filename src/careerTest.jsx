'use client'

import React, { useState, useContext } from 'react'
import { DarkModeContext } from '/src/DarkModeContext'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { Moon, Sun, ChevronDown } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ProfileIcon } from './functions/icons'

const questions = [
    "Do you enjoy working with circuits and electronics to create communication systems or embedded devices?",
    "Are you more interested in designing mechanical systems and analyzing physical forces in machinery?",
    "Do you find yourself intrigued by chemical processes, materials science, and energy production?",
    "Are you passionate about writing code and developing algorithms to solve complex computational problems?",
    "Does the idea of using data and machine learning to create AI-driven solutions excite you?",
    "Do you prefer designing and managing infrastructure projects like buildings, roads, and bridges?",
    "Do you enjoy working with electrical systems, power grids, and renewable energy sources?",
    "Are you interested in blending healthcare with engineering to design medical devices or improve patient care?"
  ];
  

export default function CareerTest() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
  const [answers, setAnswers] = useState(new Array(questions.length).fill(0))
  const [showResult, setShowResult] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleAnswer = (questionIndex, value) => {
    const newAnswers = [...answers]
    newAnswers[questionIndex] = value
    setAnswers(newAnswers)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowResult(true)
  }

  const getResult = () => {
    const sum = answers.reduce((a, b) => a + b, 0)
    const average = sum / answers.length
    if (average < 3) return "You might excel in analytical and technical roles."
    if (average < 5) return "You seem well-suited for balanced roles that involve both people and technical skills."
    return "You might thrive in roles that involve frequent social interaction and creative thinking."
  }

  const NavLink = ({ to, children }) => (
    <Link to={to}>
      <Button 
        variant="ghost" 
        className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors`}
      >
        {children}
      </Button>
    </Link>
  )

  return (
    <div className={`min-h-screen w-full flex flex-col ${darkMode ? 'bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-gray-100' : 'bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 text-gray-900'} font-sans transition-all duration-300`}>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`p-4 sticky top-0 z-10 backdrop-filter backdrop-blur-lg ${darkMode ? 'bg-gray-900 bg-opacity-40' : 'bg-white bg-opacity-40'} shadow-lg w-full`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <span className={`text-xl font-bold ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>SkillMetrics</span>
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/careers">Careers</NavLink>
            <NavLink to="/assessments">Assessments</NavLink>
            <NavLink to="/resources">Resources</NavLink>
            <ProfileIcon darkMode={darkMode} />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" onClick={toggleDarkMode} className="ml-4">
                    {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-indigo-600" />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <ChevronDown className={`h-5 w-5 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
            </Button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 100 }}
            className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} p-4`}
          >
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/careers">Careers</NavLink>
            <NavLink to="/assessments">Assessments</NavLink>
            <NavLink to="/resources">Resources</NavLink>
            <ProfileIcon darkMode={darkMode} />
            <Button variant="ghost" onClick={toggleDarkMode} className="mt-2">
              {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-indigo-600" />}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="container mx-auto p-4 max-w-2xl flex-grow">
        <h1 className={`text-3xl font-bold mb-6 text-center ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Career Assessment Test</h1>
        <form onSubmit={handleSubmit}>
          {questions.map((question, index) => (
            <Card key={index} className={`mb-6 ${darkMode ? 'bg-gray-800 bg-opacity-90' : 'bg-white bg-opacity-90'}`}>
              <CardContent className="p-6">
                <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>{question}</h2>
                <RadioGroup
                  onValueChange={(value) => handleAnswer(index, parseInt(value))}
                  className="flex flex-col sm:flex-row justify-between items-center"
                >
                  <div className="flex flex-col items-center mb-4 sm:mb-0">
                    <Label htmlFor={`q${index}-agree`} className={`mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Agree</Label>
                    <div className="flex space-x-2">
                      {[7, 6, 5, 4, 3, 2, 1].map((value) => (
                        <div key={value} className="flex items-center space-x-2">
                          <RadioGroupItem
                            value={value.toString()}
                            id={`q${index}-${value}`}
                            className={`${darkMode ? 'text-green-400 border-green-400' : 'text-green-600 border-green-600'}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <Label htmlFor={`q${index}-disagree`} className={`mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Disagree</Label>
                </RadioGroup>
              </CardContent>
            </Card>
          ))}
          <Button type="submit" className={`w-full ${darkMode ? 'bg-pink-600 hover:bg-pink-700' : 'bg-purple-600 hover:bg-purple-700'} text-white`}>Submit</Button>
        </form>
      </main>

      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 left-4 right-4 mx-auto max-w-md"
          >
            <Card className={`${darkMode ? 'bg-gray-800' : 'bg-white'} ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Your Career Assessment Result</h3>
                <p>{getResult()}</p>
                <Button onClick={() => setShowResult(false)} className={`mt-4 ${darkMode ? 'bg-pink-600 hover:bg-pink-700' : 'bg-purple-600 hover:bg-purple-700'} text-white`}>
                  Close
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}