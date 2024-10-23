import React, { useState, useContext, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { DarkModeContext } from '/src/DarkModeContext'
import { getQuestions } from '/src/APIs/api.cjs'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ChevronRight, Code, Clock, BookOpen, User, Moon, Sun, Pencil } from "lucide-react"
import { Label } from "@/components/ui/label"
import { ProfileIcon } from './functions/icons'

export default function Questions() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
  const navigate = useNavigate() // Add this
  const { field } = useParams()
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [selectedField, setSelectedField] = useState(field || 'ece')

  const handleFieldChange = (newField) => {
    navigate(`/questions/${newField}`)
  }

  

  useEffect(() => {
    const fetchQuestions = async () => {
      if (!field) {
        setError('Please select a field');
        setLoading(false);
        return;
      }
  
      setLoading(true);
      setError(null);
      try {
        console.log('Fetching questions for field:', field);
        const fetchedQuestions = await getQuestions(field);
        if (!fetchedQuestions || fetchedQuestions.length === 0) {
          setError('No questions available for this field yet.');
          return;
        }
        setQuestions(fetchedQuestions);
        setCurrentQuestionIndex(0); // Reset to first question when field changes
      } catch (error) {
        console.error('Error fetching questions:', error);
        setError('Failed to load questions. Please try again.');
      } finally {
        setLoading(false);
      }
    };
  
    fetchQuestions();
  }, [field]); // Depend on field parameter

  const currentQuestion = questions[currentQuestionIndex]

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      // Handle next question logic
      setCurrentQuestionIndex(prevIndex => prevIndex + 1)
    } else {
      // Navigate to score page when finished
      navigate('/score')
    }
  }


  const getFieldTitle = (field) => {
    const fieldMap = {
      ece: "Electrical and Computer Engineering",
      mech: "Mechanical Engineering",
      cse: "Computer Science Engineering",
      aids: "Artificial Intelligence and Data Science"
    }
    return fieldMap[field] || field.toUpperCase()
  }

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>
  }

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-gray-100' : 'bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 text-gray-900'} font-sans transition-all duration-300`}>
      <header className={`p-4 sticky top-0 z-10 ${darkMode ? 'bg-gray-900 bg-opacity-90' : 'bg-white bg-opacity-90'} shadow-lg`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className={`text-2xl font-bold ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>
              Skill Challenge
            </span>
          </div>
          <nav className="space-x-4 flex items-center">
            <NavButton to="/home" label="Home" active/>
            <NavButton to="/pricing" label="Pricing" />
            <NavButton to="/resources" label="Resources"/>
            <ProfileIcon darkMode={darkMode} />
            <Button variant="ghost" onClick={toggleDarkMode} className="ml-4">
              {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-indigo-600" />}
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto mt-8 px-4 flex items-center justify-center">
        {currentQuestion && (
          <Card className={`w-full max-w-4xl ${darkMode ? 'bg-gray-800 bg-opacity-90 border-gray-700' : 'bg-white bg-opacity-90 border-gray-200'} shadow-xl scale-125`}>
            <CardHeader className="space-y-1">
              <div className="flex justify-between items-center">
                <CardTitle className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  {currentQuestion.title}
                </CardTitle>
                <span className={`${darkMode ? 'bg-green-600 text-white' : 'bg-green-500 text-white'} text-xs font-medium px-2.5 py-0.5 rounded-full`}>
                  {currentQuestion.difficulty}
                </span>
              </div>
              <CardDescription className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Tags: {currentQuestion.tags.join(', ')}
              </CardDescription>
              <CardDescription className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Contributed by: {currentQuestion.contributor}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="description" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description" className={darkMode ? 'text-pink-400 data-[state=active]:bg-gray-700 data-[state=active]:text-cyan-300' : 'text-pink-600 data-[state=active]:bg-white'}>
                    <BookOpen className="w-4 h-4 mr-2" />
                    Description
                  </TabsTrigger>
                  <TabsTrigger value="options" className={darkMode ? 'text-indigo-400 data-[state=active]:bg-gray-700 data-[state=active]:text-pink-500' : 'text-indigo-600 data-[state=active]:bg-white'}>
                    <Clock className="w-4 h-4 mr-2" />
                    Options
                  </TabsTrigger>
                  <TabsTrigger value="solution" className={darkMode ? 'text-purple-400 data-[state=active]:bg-gray-700 data-[state=active]:text-purple-300' : 'text-purple-600 data-[state=active]:bg-white'}>
                    <Pencil className="w-4 h-4 mr-2" />
                    Your Solution
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="space-y-4">
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{currentQuestion.description}</p>
                  {currentQuestion.code && (
                    <pre className={`${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-800'} p-4 rounded-md text-sm overflow-x-auto`}>
                      {currentQuestion.code}
                    </pre>
                  )}
                </TabsContent>
                <TabsContent value="options" className="space-y-4">
                  <RadioGroup defaultValue="option-1">
                    {currentQuestion.options.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <RadioGroupItem value={`option-${index + 1}`} id={`option-${index + 1}`} className={darkMode ? 'border-white text-white' : ''} />
                        <Label htmlFor={`option-${index + 1}`} className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{option}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </TabsContent>
                <TabsContent value="solution" className="space-y-4">
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Implement your solution here:</p>
                  <textarea
                    className={`w-full h-64 p-4 border rounded-md ${darkMode ? 'bg-gray-900 border-gray-700 text-gray-300 focus:ring-pink-500 focus:border-pink-500' : 'bg-white border-gray-300 text-gray-900 focus:ring-pink-500 focus:border-pink-500'}`}
                    placeholder="//Write your reasoning here"
                  ></textarea>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Success Rate: {currentQuestion.successRate}% • Attempts: {currentQuestion.attempts}
              </div>
              <Button 
                className={`${darkMode ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white' : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white'} font-semibold`}
                onClick={handleNextQuestion}
              >
                {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish'}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}
      </main>
    </div>
  )
}

function NavButton({ to, label, active = false }) {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <Button asChild variant="ghost" className={`text-sm font-medium transition-colors ${darkMode ? 'hover:text-purple-400' : 'hover:text-purple-600'} ${active ? (darkMode ? 'text-purple-400 border-b-2 border-purple-400' : 'text-purple-600 border-b-2 border-purple-600') : (darkMode ? 'text-gray-300' : 'text-gray-600')}`}>
      <Link to={to}>{label}</Link>
    </Button>
  )
}