'use client'

import React, { useState, useContext } from 'react'
import { DarkModeContext } from '/src/DarkModeContext'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, ChevronRight, Sun, Moon } from "lucide-react"
import { Link } from "react-router-dom"

export default function ContributePage() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
  const [submissionType, setSubmissionType] = useState('question')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted')
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#0c0a1d] text-white' : 'bg-white text-gray-900'} font-sans`}>
      <header className={`p-4 sticky top-0 z-10 ${darkMode ? 'bg-[#0c0a1d]' : 'bg-white'} bg-opacity-90 backdrop-filter backdrop-blur-lg`}>
        <div className="container mx-auto flex justify-between items-center">
          <span className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
            SkillMetrics
          </span>
          <nav className="hidden md:flex space-x-6">
            <NavButton to="/home" label="Home" />
            <NavButton to="/pricing" label="Pricing" />
            <NavButton to="/resources" label="Resources" />
            <NavButton to="/support" label="Support" />
            <NavButton to="/contribute" label="Contribute" active />
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

      <main className="container mx-auto px-4 py-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
          Share Your Knowledge
        </h1>
        <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-12 max-w-2xl mx-auto text-center`}>
          Help us grow our knowledge base and challenge others!
        </p>

        <Card className={`w-full max-w-2xl mx-auto ${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-100'}`}>
          <CardHeader>
            <CardTitle className={`text-3xl font-bold text-center ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Contribute to SkillMetrics
            </CardTitle>
            <CardDescription className={`text-center text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Choose your contribution type below
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={submissionType} onValueChange={setSubmissionType} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="question" className={darkMode ? 'data-[state=active]:bg-purple-600 data-[state=active]:text-white' : 'data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800'}>Submit a Question</TabsTrigger>
                <TabsTrigger value="resource" className={darkMode ? 'data-[state=active]:bg-purple-600 data-[state=active]:text-white' : 'data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800'}>Share a Resource</TabsTrigger>
              </TabsList>
              <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                <TabsContent value="question" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="question-text" className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Your Question</Label>
                    <Textarea id="question-text" placeholder="Enter your question here..." className={`min-h-[100px] ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'}`} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="question-solution" className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Solution</Label>
                    <Textarea id="question-solution" placeholder="Enter your solution here..." className={`min-h-[100px] ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'}`} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="correct-answer" className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Correct Answer</Label>
                    <Input id="correct-answer" placeholder="Enter the correct answer" className={`${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'}`} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="question-tags" className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Tags</Label>
                    <Input id="question-tags" placeholder="Related Tags" className={`${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'}`} required />
                  </div>
                </TabsContent>
                <TabsContent value="resource" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="resource-title" className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Resource Title</Label>
                    <Input id="resource-title" placeholder="Enter the title of your resource" className={`${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'}`} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="resource-link" className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Resource Link</Label>
                    <Input id="resource-link" type="url" placeholder="https://example.com/resource" className={`${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'}`} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="resource-description" className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Description</Label>
                    <Textarea id="resource-description" placeholder="Briefly describe this resource..." className={`min-h-[100px] ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'}`} required />
                  </div>
                </TabsContent>
                <Button type="submit" className={`w-full ${darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'} text-white`}>
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
      
      <Footer />
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

function Footer() {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <footer className={darkMode ? 'bg-gray-900' : 'bg-gray-100'}>
      <div className="container mx-auto px-4 py-8 flex flex-wrap justify-between items-center">
        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          © 2024 SkillMetrics. All rights reserved.
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <FooterLink href="#" label="Privacy Policy" />
          <FooterLink href="#" label="Terms of Service" />
          <FooterLink href="#" label="Contact Us" />
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, label }) {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <a href={href} className={`text-sm ${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'} transition-colors`}>
      {label}
    </a>
  )
}