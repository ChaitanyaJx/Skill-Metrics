import React, { useState, useContext} from 'react'
import { DarkModeContext } from '/src/DarkModeContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Sun, Moon } from "lucide-react"
import { Link } from "react-router-dom"

export default function ContributePage() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
  const [submissionType, setSubmissionType] = useState('question')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted')
  }

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-gray-100' : 'bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 text-gray-900'} font-sans transition-all duration-300`}>
      <nav className={`p-4 sticky top-0 z-10 backdrop-filter backdrop-blur-lg ${darkMode ? 'bg-gray-900 bg-opacity-40' : 'bg-white bg-opacity-40'} shadow-lg`}>
        <div className="container mx-auto flex justify-between items-center">
          <span className={`text-2xl font-bold ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>SkillMetrics</span>
          <div className="space-x-4 flex items-center">
            <Link to="/">
              <Button variant="ghost" className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors`}>
                Home
              </Button>
            </Link>
            <Button variant="ghost" className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors`}>
              <Link to="/profile">
              Profile
              </Link>
            </Button>
            <Button variant="ghost" onClick={toggleDarkMode} className="ml-4">
              {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-indigo-600" />}
            </Button>
          </div>
        </div>
      </nav>

      <main className={`flex-grow flex items-center justify-center p-4 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900' : 'bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100'}`}>
        <Card className={`w-full max-w-2xl ${darkMode ? 'bg-gray-800 bg-opacity-90 border-gray-700' : 'bg-white bg-opacity-90 border-purple-200'} shadow-xl`}>
          <CardHeader className="space-y-1">
            <CardTitle className={`text-3xl font-bold text-center ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Contribute to SkillMetrics
            </CardTitle>
            <CardDescription className={`text-center text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Help us grow our knowledge base and challenge others!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={submissionType} onValueChange={setSubmissionType} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="question" className={darkMode ? 'text-red-400 data-[state=active]:bg-gray-700 data-[state=active]:text-white' : 'text-red-600 data-[state=active]:bg-white'}>Submit a Question</TabsTrigger>
                <TabsTrigger value="resource" className={darkMode ? 'text-purple-400 data-[state=active]:bg-gray-700 data-[state=active]:text-white' : 'text-purple-600 data-[state=active]:bg-white'}>Share a Resource</TabsTrigger>
              </TabsList>
              <form onSubmit={handleSubmit} className="space-y-6">
                <TabsContent value="question" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="question-text" className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Your Question</Label>
                    <Textarea id="question-text" placeholder="Enter your question here..." className={`min-h-[100px] ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-pink-400 focus:border-pink-400' : 'bg-white border-gray-300 text-gray-900 focus:ring-pink-500 focus:border-pink-500'}`} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="question-text" className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Solution</Label>
                    <Textarea id="question-text" placeholder="Enter your solution here..." className={`min-h-[100px] ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-pink-400 focus:border-pink-400' : 'bg-white border-gray-300 text-gray-900 focus:ring-pink-500 focus:border-pink-500'}`} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="correct-answer" className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Correct Answer</Label>
                    <Input id="correct-answer" placeholder="Enter the correct answer" className={`${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-pink-400 focus:border-pink-400' : 'bg-white border-gray-300 text-gray-900 focus:ring-pink-500 focus:border-pink-500'}`} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="correct-answer" className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Tags</Label>
                    <Input id="correct-answer" placeholder="Related Tags" className={`${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-pink-400 focus:border-pink-400' : 'bg-white border-gray-300 text-gray-900 focus:ring-pink-500 focus:border-pink-500'}`} required />
                  </div>
                </TabsContent>
                <TabsContent value="resource" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="resource-title" className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Resource Title</Label>
                    <Input id="resource-title" placeholder="Enter the title of your resource" className={`${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-purple-400 focus:border-purple-400' : 'bg-white border-gray-300 text-gray-900 focus:ring-purple-500 focus:border-purple-500'}`} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="resource-link" className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Resource Link</Label>
                    <Input id="resource-link" type="url" placeholder="https://example.com/resource" className={`${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-purple-400 focus:border-purple-400' : 'bg-white border-gray-300 text-gray-900 focus:ring-purple-500 focus:border-purple-500'}`} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="resource-description" className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Description</Label>
                    <Textarea id="resource-description" placeholder="Briefly describe this resource..." className={`min-h-[100px] ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-purple-400 focus:border-purple-400' : 'bg-white border-gray-300 text-gray-900 focus:ring-purple-500 focus:border-purple-500'}`} required />
                  </div>
                </TabsContent>
                <Button type="submit" className={`w-full text-lg ${darkMode ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white' : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white'} font-semibold`}>
                  Submit Contribution
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <p className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Your contributions help make SkillMetrics better for everyone. Thank you for your support!
            </p>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}