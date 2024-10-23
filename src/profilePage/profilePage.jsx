'use client'

import React, { useContext } from 'react'
import { DarkModeContext } from '/src/DarkModeContext'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Moon, Sun, MapPin, Clock, Eye, MessageSquare, HelpCircle, Award, Users, Tag, Star, Book, Briefcase, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProfilePage() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

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
            <NavButton to="/profile" label="Profile" active />
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
          Welcome, Chaitanya
        </h1>
        <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-12 max-w-2xl mx-auto text-center`}>
          Track your progress and contributions
        </p>
        <div className={`rounded-lg shadow-xl p-6 ${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-100'}`}>
          <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
            <img src="/src/assets/profilePicDefault.jpg?height=128&width=128" alt="Profile" className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-6" />
            <div>
              <h2 className={`text-4xl font-bold mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Chaitanya</h2>
              <div className="flex items-center mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>India</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Member for 5 years, 1 month</span>
              </div>
              <div className="flex items-center mt-2">
                <Star className="w-4 h-4 mr-2" />
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Level 12 - Advanced User</span>
              </div>
            </div>
          </div>

          <Tabs defaultValue="profile" className="w-full">
            <TabsList>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="contributions">Contributions</TabsTrigger>
            </TabsList>
            <TabsContent value="profile">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Stats</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <StatCard icon={<Award />} value="1,743" label="points" darkMode={darkMode} />
                    <StatCard icon={<Eye />} value="169k" label="reached" darkMode={darkMode} />
                    <StatCard icon={<MessageSquare />} value="75" label="answers" darkMode={darkMode} />
                    <StatCard icon={<HelpCircle />} value="6" label="questions" darkMode={darkMode} />
                  </div>
                </div>
                <div>
                  <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Roles of Interest</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <RoleCard role="Data Scientist" darkMode={darkMode} />
                    <RoleCard role="Machine Learning Engineer" darkMode={darkMode} />
                    <RoleCard role="AI Researcher" darkMode={darkMode} />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Recent Test Scores</h3>
                <div className="space-y-4">
                  <TagScoreCard name="machine-learning" score={85} lastTested="2 days ago" darkMode={darkMode} />
                  <TagScoreCard name="python" score={92} lastTested="1 week ago" darkMode={darkMode} />
                  <TagScoreCard name="data-analysis" score={78} lastTested="2 weeks ago" darkMode={darkMode} />
                  <TagScoreCard name="deep-learning" score={70} lastTested="1 month ago" darkMode={darkMode} />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="contributions">
              <div className="space-y-6">
                <ContributionCard 
                  type="Question"
                  title="How to implement K-means clustering in Python?"
                  date="2023-09-15"
                  points={25}
                  darkMode={darkMode}
                />
                <ContributionCard 
                  type="Answer"
                  title="Explanation of backpropagation in neural networks"
                  date="2023-08-22"
                  points={50}
                  darkMode={darkMode}
                />
                <ContributionCard 
                  type="Resource"
                  title="Comprehensive guide to Natural Language Processing"
                  date="2023-07-10"
                  points={100}
                  darkMode={darkMode}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
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

function StatCard({ icon, value, label, darkMode }) {
  return (
    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
      <div className="flex items-center mb-2">
        {React.cloneElement(icon, { className: `w-5 h-5 mr-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}` })}
        <span className={`text-xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{value}</span>
      </div>
      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{label}</span>
    </div>
  )
}

function RoleCard({ role, darkMode }) {
  return (
    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
      <div className="flex items-center">
        <Briefcase className={`w-5 h-5 mr-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
        <span className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{role}</span>
      </div>
    </div>
  )
}

function TagScoreCard({ name, score, lastTested, darkMode }) {
  return (
    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
      <div className="flex items-center justify-between mb-2">
        <Badge className={`${darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-100 text-purple-800 hover:bg-purple-200'}`}>
          <Tag className="w-3 h-3 mr-1" />
          {name}
        </Badge>
        <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Score: {score}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Last tested: {lastTested}</span>
      </div>
      <Progress value={score} className="mt-2" />
    </div>
  )
}

function ContributionCard({ type, title, date, points, darkMode }) {
  const iconMap = {
    'Question': <HelpCircle className={`w-5 h-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />,
    'Answer': <MessageSquare className={`w-5 h-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />,
    'Resource': <Book className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />,
  }

  return (
    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          {iconMap[type]}
          <span className={`ml-2 font-medium ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{type}</span>
        </div>
        <Badge className={darkMode ? 'bg-purple-600' : 'bg-purple-100 text-purple-800'}>+{points} points</Badge>
      </div>
      <h4 className={`text-lg font-semibold mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>{title}</h4>
      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{date}</span>
    </div>
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