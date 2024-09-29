"use client"

import React, { useState, useContext } from 'react'
import { DarkModeContext } from './DarkModeContext'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ChevronRight, RefreshCw, Home, DollarSign, HelpCircle, Moon, Sun } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const questions = [
  {
    question: "Which activity do you enjoy the most?",
    options: [
      { value: "tech", label: "Working with computers and technology" },
      { value: "creative", label: "Creating art or designs" },
      { value: "people", label: "Helping and interacting with people" },
      { value: "analytical", label: "Analyzing data and solving complex problems" },
    ],
  },
  {
    question: "What kind of work environment do you prefer?",
    options: [
      { value: "office", label: "A structured office environment" },
      { value: "remote", label: "Working remotely from anywhere" },
      { value: "outdoors", label: "Working outdoors or in nature" },
      { value: "varied", label: "A varied environment with new challenges" },
    ],
  },
  {
    question: "Which skill do you think is your strongest?",
    options: [
      { value: "communication", label: "Communication and interpersonal skills" },
      { value: "technical", label: "Technical and problem-solving skills" },
      { value: "creativity", label: "Creativity and innovation" },
      { value: "leadership", label: "Leadership and decision-making" },
    ],
  },
  {
    question: "What's your preferred way of learning?",
    options: [
      { value: "hands-on", label: "Hands-on experience and practice" },
      { value: "reading", label: "Reading and researching" },
      { value: "visual", label: "Visual aids and demonstrations" },
      { value: "discussion", label: "Group discussions and collaboration" },
    ],
  },
  {
    question: "What motivates you the most in a job?",
    options: [
      { value: "impact", label: "Making a positive impact on society" },
      { value: "growth", label: "Personal growth and learning opportunities" },
      { value: "stability", label: "Job security and stability" },
      { value: "challenge", label: "Challenging work and problem-solving" },
    ],
  },
]

const careerRecommendations = {
  tech: "Software Developer",
  creative: "Graphic Designer",
  people: "Human Resources Manager",
  analytical: "Data Scientist",
  office: "Accountant",
  remote: "Digital Marketer",
  outdoors: "Environmental Scientist",
  varied: "Management Consultant",
  communication: "Public Relations Specialist",
  technical: "Systems Analyst",
  creativity: "UX/UI Designer",
  leadership: "Project Manager",
  "hands-on": "Mechanical Engineer",
  reading: "Research Analyst",
  visual: "Multimedia Artist",
  discussion: "Teacher",
  impact: "Non-profit Program Manager",
  growth: "Entrepreneur",
  stability: "Government Administrator",
  challenge: "Cybersecurity Specialist",
}

export default function CareerTest() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [result, setResult] = useState(null)
  const navigate = useNavigate()

  const handleAnswer = (value) => {
    const newAnswers = [...answers, value]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate result
      const mostFrequent = newAnswers.sort((a, b) =>
        newAnswers.filter(v => v === a).length - newAnswers.filter(v => v === b).length
      ).pop()
      setResult(careerRecommendations[mostFrequent ])
    }
  }

  const resetTest = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setResult(null)
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-[#0c0a1d] text-gray-100' : 'bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 text-gray-900'} font-sans transition-all duration-300`}>
      <header className={`p-4 sticky top-0 z-10 ${darkMode ? 'bg-[#0c0a1d]' : 'bg-white'} bg-opacity-90 backdrop-filter backdrop-blur-lg`}>
        <div className="container mx-auto flex justify-between items-center">
          <span className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
            SkillMetrics
          </span>
          <nav className="hidden md:flex space-x-6">
            <NavButton to="/home" label="Home" icon={<Home className="w-4 h-4" />} />
            <NavButton to="/pricing" label="Pricing" icon={<DollarSign className="w-4 h-4" />} />
            <NavButton to="/support" label="Support" icon={<HelpCircle className="w-4 h-4" />} />
            <NavButton to="/career-test" label="Career Test" active icon={<ChevronRight className="w-4 h-4" />} />
          </nav>
          <div className="flex space-x-2 items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className={`rounded-full ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-4">
        <Card className={`w-full max-w-4xl ${darkMode ? 'bg-gray-800 bg-opacity-90 border-gray-700' : 'bg-white bg-opacity-90 border-purple-200'} shadow-2xl transition-all duration-300 hover:shadow-purple-300/30`}>
          <CardHeader>
            <CardTitle className={`text-3xl font-bold text-center ${darkMode ? 'text-purple-400' : 'text-purple-800'}`}>Career Test</CardTitle>
            <CardDescription className={`text-center text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Discover your ideal career path
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            {result ? (
              <div className="text-center space-y-6">
                <h3 className={`text-2xl font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>Your Recommended Career:</h3>
                <p className={`text-4xl font-bold ${darkMode ? 'text-purple-300' : 'text-purple-900'}`}>{result}</p>
                <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Based on your answers, this career path might be a great fit for you. 
                  Remember, this is just a suggestion – explore more about this career and others that interest you!
                </p>
              </div>
            ) : (
              <>
                <Progress value={progress} className={`mb-6 h-2 ${darkMode ? 'bg-gray-700' : 'bg-purple-200'}`} />
                <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-purple-400' : 'text-purple-800'}`}>
                  {questions[currentQuestion].question}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {questions[currentQuestion].options.map((option) => (
                    <Button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className={`h-auto py-6 px-4 text-left transition-all duration-300 ${
                        darkMode
                          ? 'bg-gray-700 hover:bg-purple-700 text-gray-200'
                          : 'bg-purple-100 hover:bg-purple-200 text-gray-800'
                      } rounded-lg shadow-md hover:shadow-lg`}
                    >
                      <span className="text-lg font-medium">{option.label}</span>
                    </Button>
                  ))}
                </div>
              </>
            )}
          </CardContent>
          <CardFooter className="flex justify-center p-6">
            {result ? (
              <Button onClick={resetTest} className={`${darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'} text-white text-lg px-8 py-3`}>
                <RefreshCw className="mr-2 h-5 w-5" />
                Retake Test
              </Button>
            ) : (
              <Button 
                onClick={() => handleAnswer(questions[currentQuestion].options[0].value)} 
                className={`${darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'} text-white text-lg px-8 py-3`}
              >
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Result'}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            )}
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}

function NavButton({ to, label, icon, active = false }) {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <Button asChild variant="ghost" className={`text-sm font-medium transition-colors ${darkMode ? 'hover:text-purple-400' : 'hover:text-purple-600'} ${active ? (darkMode ? 'text-purple-400 border-b-2 border-purple-400' : 'text-purple-600 border-b-2 border-purple-600') : (darkMode ? 'text-gray-300' : 'text-gray-600')}`}>
      <Link to={to} className="flex items-center gap-2">
        {icon}
        {label}
      </Link>
    </Button>
  )
}