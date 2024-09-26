'use client'

import React, { useState, useContext } from 'react'
import { DarkModeContext } from './DarkModeContext'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Label } from "@/components/ui/label"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Moon, Sun, Home, Briefcase, ClipboardList, Book } from "lucide-react"
import { Link } from "react-router-dom"

const QUESTIONS = [
  "Do you enjoy working with circuits and electronics to create communication systems or embedded devices?",
  "Are you more interested in designing mechanical systems and analyzing physical forces in machinery?",
  "Do you find yourself intrigued by chemical processes, materials science, and energy production?",
  "Are you passionate about writing code and developing algorithms to solve complex computational problems?",
  "Does the idea of using data and machine learning to create AI-driven solutions excite you?",
  "Do you prefer designing and managing infrastructure projects like buildings, roads, and bridges?",
  "Do you enjoy working with electrical systems, power grids, and renewable energy sources?",
  "Are you interested in blending healthcare with engineering to design medical devices or improve patient care?"
]

const CAREERS = [
  "Electrical Engineering",
  "Mechanical Engineering",
  "Chemical Engineering",
  "Software Engineering",
  "Data Science / AI Engineering",
  "Civil Engineering",
  "Power Systems Engineering",
  "Biomedical Engineering"
]

export default function CareerTest() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState(new Array(QUESTIONS.length).fill(0))
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (value) => {
    setAnswers(prev => {
      const newAnswers = [...prev]
      newAnswers[currentQuestion] = value
      return newAnswers
    })
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      setShowResult(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const getTopCareers = () => {
    const careerScores = answers.map((score, index) => ({ career: CAREERS[index], score }))
    return careerScores.sort((a, b) => b.score - a.score).slice(0, 3)
  }

  const progressPercentage = ((currentQuestion + 1) / QUESTIONS.length) * 100

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-gray-100' : 'bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 text-gray-900'} font-sans transition-all duration-300`}>
      <nav className={`p-4 sticky top-0 z-10 backdrop-filter backdrop-blur-lg ${darkMode ? 'bg-gray-900 bg-opacity-40' : 'bg-white bg-opacity-40'} shadow-lg`}>
        <div className="container mx-auto flex justify-between items-center">
          <span className={`text-2xl font-bold ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>SkillMetrics</span>
          <div className="space-x-4 flex items-center">
            <Link to="/">
              <Button variant="ghost" className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors`}>
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="ghost" className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors`}>
                <Briefcase className="mr-2 h-4 w-4" />
                Pricing
              </Button>
            </Link>
            <Link to="/support">
              <Button variant="ghost" className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors`}>
                <Book className="mr-2 h-4 w-4" />
                Support
              </Button>
            </Link>
            <Button variant="ghost" onClick={toggleDarkMode} className="ml-4">
              {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-indigo-600" />}
            </Button>
          </div>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center p-4 relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <Card className={`w-full max-w-2xl ${darkMode ? 'bg-gray-800 bg-opacity-90' : 'bg-white bg-opacity-90'} shadow-xl backdrop-blur-sm`}>
          <CardContent className="p-6">
            <h1 className={`text-3xl font-bold mb-6 text-center ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>Career Assessment</h1>
            
            <AnimatePresence mode="wait">
              {!showResult ? (
                <motion.div
                  key="question"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Progress value={progressPercentage} className="mb-6 h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" />
                  <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    {QUESTIONS[currentQuestion]}
                  </h2>
                  <div className="flex flex-col space-y-4">
                    {[7, 6, 5, 4, 3, 2, 1].map((value) => (
                      <Button
                        key={value}
                        onClick={() => handleAnswer(value)}
                        variant={darkMode ? "outline" : "default"}
                        className={`w-full transition-all duration-200 transform hover:scale-105 ${
                          darkMode 
                            ? `hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 hover:text-white ${value === 7 ? 'bg-gradient-to-r from-pink-500 to-purple-500' : value === 1 ? 'bg-gradient-to-r from-indigo-500 to-purple-500' : ''}`
                            : `hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-400 hover:text-white ${value === 7 ? 'bg-gradient-to-r from-pink-200 to-purple-200' : value === 1 ? 'bg-gradient-to-r from-indigo-200 to-purple-200' : ''}`
                        }`}
                      >
                        {value === 7 ? 'Strongly Agree' : 
                         value === 4 ? 'Neutral' : 
                         value === 1 ? 'Strongly Disagree' : 
                         value.toString()}
                      </Button>
                    ))}
                  </div>
                  <div className="flex justify-between mt-6">
                    <Button
                      onClick={handlePrevious}
                      disabled={currentQuestion === 0}
                      variant="ghost"
                      className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-600 hover:text-purple-600'}`}
                    >
                      <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                    </Button>
                    <Label className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Question {currentQuestion + 1} of {QUESTIONS.length}
                    </Label>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-pink-400' : 'text-purple-600'}`}>Your Top Career Matches</h2>
                  <div className="space-y-4">
                    {getTopCareers().map((career, index) => (
                      <div key={index} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-100'} transition-all duration-200 transform hover:scale-105`}>
                        <h3 className={`text-lg font-semibold ${darkMode ? 'text-pink-300' : 'text-purple-700'}`}>{career.career}</h3>
                        <Progress value={(career.score / 7) * 100} className="mt-2 h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" />
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={() => {
                      setCurrentQuestion(0)
                      setAnswers(new Array(QUESTIONS.length).fill(0))
                      setShowResult(false)
                    }}
                    className={`w-full mt-6 ${darkMode ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700' : 'bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600'} text-white transition-all duration-200 transform hover:scale-105`}
                  >
                    Retake Assessment
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}