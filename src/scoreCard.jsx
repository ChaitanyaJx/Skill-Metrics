'use client'

import React, { useState, useEffect, useContext } from 'react'
import { DarkModeContext } from '/src/DarkModeContext'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Moon, Sun, BookOpen, ArrowRight, Trophy, Target, Info, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ScoreCard() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

  const overallScore = 75
  const skills = [
    { name: "JavaScript", score: 80, required: 85, description: "Core language for web development" },
    { name: "React", score: 70, required: 80, description: "Popular library for building user interfaces" },
    { name: "Node.js", score: 65, required: 75, description: "JavaScript runtime for server-side development" },
    { name: "SQL", score: 85, required: 70, description: "Language for managing relational databases" },
    { name: "Git", score: 90, required: 80, description: "Version control system for tracking changes in code" },
  ]

  const recommendedResources = [
    { 
      title: "Advanced JavaScript Techniques", 
      link: "https://example.com/js-advanced", 
      difficulty: "Advanced",
      category: "Course",
      description: "Deep dive into advanced JavaScript concepts and patterns"
    },
    { 
      title: "React Hooks Mastery", 
      link: "https://example.com/react-hooks", 
      difficulty: "Intermediate",
      category: "Tutorial",
      description: "Comprehensive guide to mastering React Hooks"
    },
    { 
      title: "Node.js Fundamentals", 
      link: "https://example.com/nodejs-basics", 
      difficulty: "Beginner",
      category: "Documentation",
      description: "Official Node.js documentation for beginners"
    },
  ]

  const strengths = skills.filter(skill => skill.score >= skill.required).map(skill => skill.name)
  const areasForImprovement = skills.filter(skill => skill.score < skill.required).map(skill => skill.name)

  useEffect(() => {
    const progressBars = document.querySelectorAll('[role="progressbar"]')
    progressBars.forEach((bar) => {
      const value = bar.getAttribute('aria-valuenow')
      bar.style.width = '0%'
      setTimeout(() => {
        bar.style.transition = 'width 1s ease-in-out'
        bar.style.width = `${value}%`
      }, 100)
    })
  }, [])

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
            <NavButton to="/scorecard" label="Scorecard" active />
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
          Your Skill Scorecard
        </h1>
        <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-12 max-w-2xl mx-auto text-center`}>
          Track your progress and identify areas for growth
        </p>

        <Card className={`w-full ${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-100'}`}>
          <CardHeader>
            <CardTitle className={`text-3xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Overall Skill Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <Progress value={overallScore} className="flex-grow" />
              <span className={`text-4xl font-bold ${overallScore >= 70 ? 'text-green-500' : 'text-yellow-500'}`}>{overallScore}%</span>
            </div>
            <p className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Your overall skill score is calculated based on your performance across all assessed skills.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <Card className={`${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-100'}`}>
            <CardHeader>
              <CardTitle className={`text-2xl font-bold flex items-center ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                <Trophy className="w-6 h-6 mr-2 text-yellow-500" />
                Your Strengths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {strengths.map((strength, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-2"></span>
                    <div>
                      <span className="font-medium">{strength}</span>
                      <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {skills.find(skill => skill.name === strength)?.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className={`${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-100'}`}>
            <CardHeader>
              <CardTitle className={`text-2xl font-bold flex items-center ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                <Target className="w-6 h-6 mr-2 text-red-500" />
                Areas for Improvement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {areasForImprovement.map((area, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-red-500 mt-2 mr-2"></span>
                    <div>
                      <span className="font-medium">{area}</span>
                      <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {skills.find(skill => skill.name === area)?.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className={`mt-8 ${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-100'}`}>
          <CardHeader>
            <CardTitle className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Detailed Skills Assessment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{skill.name}</span>
                    <span className={`${skill.score >= skill.required ? 'text-green-500' : 'text-yellow-500'} font-semibold`}>
                      {skill.score}/{skill.required}
                    </span>
                  </div>
                  <Progress value={(skill.score / skill.required) * 100} className="w-full" />
                  <div className="flex justify-between items-center text-sm">
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>{skill.description}</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{skill.score >= skill.required 
                            ? `Great job! You've met or exceeded the required score for ${skill.name}.` 
                            : `Keep practicing ${skill.name} to reach the required score.`}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className={`mt-8 ${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-100'}`}>
          <CardHeader>
            <CardTitle className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Recommended Learning Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {recommendedResources.map((resource, index) => (
                <li key={index} className={`border-b last:border-b-0 pb-4 last:pb-0 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block group ${darkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-500'} transition-colors`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        <span className="font-medium">{resource.title}</span>
                      </div>
                      <div className="flex items-center">
                        <Badge variant="secondary" className="mr-2">
                          {resource.difficulty}
                        </Badge>
                        <Badge variant="secondary" className="mr-2">
                          {resource.category}
                        </Badge>
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {resource.description}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
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