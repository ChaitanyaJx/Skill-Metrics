'use client'

import React, { useState, useContext } from 'react'
import { DarkModeContext } from '/src/DarkModeContext'
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, TrendingUp, Users, Briefcase, Moon, Sun, ChevronDown } from "lucide-react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ProfileIcon } from './functions/icons'

const skills = [
  { name: "JavaScript", relatedJobs: ["Frontend Developer", "Full Stack Developer"], testTakers: 15000, trending: true },
  { name: "Python", relatedJobs: ["Data Scientist", "Backend Developer"], testTakers: 20000, trending: true },
  { name: "React", relatedJobs: ["Frontend Developer", "UI Engineer"], testTakers: 12000, trending: true },
  { name: "Machine Learning", relatedJobs: ["Data Scientist", "AI Engineer"], testTakers: 8000, trending: true },
  { name: "Java", relatedJobs: ["Backend Developer", "Android Developer"], testTakers: 18000, trending: true },
  { name: "SQL", relatedJobs: ["Database Administrator", "Data Analyst"], testTakers: 10000, trending: true },
  { name: "Node.js", relatedJobs: ["Backend Developer", "Full Stack Developer"], testTakers: 9000, trending: true },
  { name: "Docker", relatedJobs: ["DevOps Engineer", "Cloud Engineer"], testTakers: 7000, trending: true },
  { name: "AWS", relatedJobs: ["Cloud Architect", "DevOps Engineer"], testTakers: 11000, trending: true },
  { name: "TypeScript", relatedJobs: ["Frontend Developer", "Full Stack Developer"], testTakers: 8500 },
  { name: "C++", relatedJobs: ["Game Developer", "Systems Programmer"], testTakers: 7500 },
  { name: "Ruby", relatedJobs: ["Web Developer", "DevOps Engineer"], testTakers: 6000 },
]

export default function SkillPage() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
  const [searchTerm, setSearchTerm] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const filteredSkills = skills.filter(skill =>
    skill.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const trendingSkills = skills.filter(skill => skill.trending).slice(0, 9)

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

      <main className="container mx-auto py-8 px-4">
        <h1 className={`text-4xl font-bold mb-8 text-center ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
          Explore Skills
        </h1>

        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {searchTerm === '' && (
          <div className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Trending Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trendingSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} darkMode={darkMode} />
              ))}
            </div>
          </div>
        )}

        {searchTerm !== '' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} darkMode={darkMode} />
            ))}
          </div>
        )}

        {searchTerm !== '' && filteredSkills.length === 0 && (
          <p className={`text-center text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            No skills found. Try a different search term.
          </p>
        )}
      </main>
    </div>
  )
}

function SkillCard({ skill, darkMode }) {
  return (
    <Link to="/questions" className="block">
      <Card className={`h-full transition-all duration-300 transform hover:scale-105 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}`}>
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>{skill.name}</h3>
            {skill.trending && (
              <Badge variant="secondary" className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                Trending
              </Badge>
            )}
          </div>
          <div className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <div className="flex items-center mb-2">
              <Briefcase className="w-5 h-5 mr-2" />
              <span>Related Jobs:</span>
            </div>
            <ul className="list-disc list-inside pl-5">
              {skill.relatedJobs.map((job, index) => (
                <li key={index}>{job}</li>
              ))}
            </ul>
          </div>
          <div className={`flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <Users className="w-5 h-5 mr-2" />
            <span>{skill.testTakers.toLocaleString()} test takers</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}