import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Code, Clock, BookOpen, User, Moon, Sun, Search } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"

export default function Questions() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-gray-100' : 'bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 text-gray-900'} font-sans transition-all duration-300`}>
      <header className={`p-4 sticky top-0 z-10 ${darkMode ? 'bg-gray-900 bg-opacity-90' : 'bg-white bg-opacity-90'} shadow-lg`}>
        <div className="container mx-auto flex justify-between items-center">
          <span className={`text-2xl font-bold ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>Coding Challenge</span>
          <nav className="space-x-4 flex items-center">
            <Button variant="ghost" className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors`}>Problems</Button>
            <Button variant="ghost" className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors`}>Resources</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors`}>
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className={darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}>
                <DropdownMenuItem className={darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}>
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className={darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}>
                  <span>My Contributions</span>
                </DropdownMenuItem>
                <DropdownMenuItem className={darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}>
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem className={darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}>
                  <Link to="/login">
                    <span>Logout</span>
                  </Link>                  
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" onClick={toggleDarkMode} className="ml-4">
              {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-indigo-600" />}
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto mt-8 px-4 flex items-center justify-center">
        <Card className={`w-full max-w-4xl ${darkMode ? 'bg-gray-800 bg-opacity-90 border-gray-700' : 'bg-white bg-opacity-90 border-gray-200'} shadow-xl scale-125`}>
          <CardHeader className="space-y-1">
            <div className="flex justify-between items-center">
              <CardTitle className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                Nested for Loops
              </CardTitle>
              <span className={`${darkMode ? 'bg-green-600 text-white' : 'bg-green-500 text-white'} text-xs font-medium px-2.5 py-0.5 rounded-full`}>Easy</span>
            </div>
            <CardDescription className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              Tags: Basic Programming, Time Complexity, Space Complexity
            </CardDescription>
            <CardDescription className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Contributed by: Chaitanya
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description" className={darkMode ? 'text-pink-400 data-[state=active]:bg-gray-700 data-[state=active]:text-cyan-300' : 'text-pink-600 data-[state=active]:bg-white'}>
                  <BookOpen className="w-4 h-4 mr-2" />
                  Description
                </TabsTrigger>
                <TabsTrigger value="code" className={darkMode ? 'text-purple-400 data-[state=active]:bg-gray-700 data-[state=active]:text-purple-300' : 'text-purple-600 data-[state=active]:bg-white'}>
                  <Code className="w-4 h-4 mr-2" />
                  Code
                </TabsTrigger>
                <TabsTrigger value="submission" className={darkMode ? 'text-indigo-400 data-[state=active]:bg-gray-700 data-[state=active]:text-pink-500' : 'text-indigo-600 data-[state=active]:bg-white'}>
                  <Clock className="w-4 h-4 mr-2" />
                  Submission
                </TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="space-y-4">
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>What is the time, space complexity of following code:</p>
                <pre className={`${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-800'} p-4 rounded-md text-sm overflow-x-auto`}>
                  {`int a = 0, b = 0;
for (i = 0; i < N; i++) {
  for (j = 0; j < N; j++) {
      a = a + j;
  }
}
for (k = 0; k < N; k++) {
  b = b + k;
}`}
                </pre>
              </TabsContent>
              <TabsContent value="code" className="space-y-4">
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Implement your solution here:</p>
                <textarea
                  className={`w-full h-64 p-4 border rounded-md ${darkMode ? 'bg-gray-900 border-gray-700 text-gray-300 focus:ring-pink-500 focus:border-pink-500' : 'bg-white border-gray-300 text-gray-900 focus:ring-pink-500 focus:border-pink-500'}`}
                  placeholder="// Write your code here"
                ></textarea>
              </TabsContent>
              <TabsContent value="submission" className="space-y-4">
                <RadioGroup defaultValue="option-1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-1" id="option-1" className={darkMode ? 'border-white text-white' : ''} />
                    <Label htmlFor="option-1" className={darkMode ? 'text-gray-300' : 'text-gray-700'}>O(N * N) time, O(1) space</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-2" id="option-2" className={darkMode ? 'border-white text-white' : ''} />
                    <Label htmlFor="option-2" className={darkMode ? 'text-gray-300' : 'text-gray-700'}>O(N) time, O(N) space</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-3" id="option-3" className={darkMode ? 'border-white text-white' : ''} />
                    <Label htmlFor="option-3" className={darkMode ? 'text-gray-300' : 'text-gray-700'}>O(N * N * N) time, O(1) space</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-4" id="option-4" className={darkMode ? 'border-white text-white' : ''} />
                    <Label htmlFor="option-4" className={darkMode ? 'text-gray-300' : 'text-gray-700'}>O(N * N) time, O(N) space</Label>
                  </div>
                </RadioGroup>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Success Rate: 67.0% • Attempts: 429
            </div>
            <Button className={`${darkMode ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white' : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white'} font-semibold`}>
              Submit
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}