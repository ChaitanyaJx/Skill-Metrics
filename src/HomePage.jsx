'use client'

import React, { useState, useContext, useEffect } from 'react'
import { DarkModeContext } from '/src/DarkModeContext'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, Cpu, Zap, User, Moon, Sun, ChevronDown, ArrowRight, Briefcase, GraduationCap, TrendingUp, Database, Shield, Cloud, Building, Bolt, Heart, Cog, CheckCircle, Clock, Target } from "lucide-react"
import { Link } from "react-router-dom"
import { ProfileIcon } from './functions/icons'
import { motion, AnimatePresence } from "framer-motion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function HomePage() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const careers = [
    { name: "Electronics and Communication Engineering", icon: <Cpu className="h-6 w-6" />, description: "Design and develop cutting-edge communication systems and electronics" },
    { name: "Mechanical Engineering", icon: <Cog className="h-6 w-6" />, description: "Innovate in design, analysis, and manufacturing of mechanical systems" },
    { name: "Computer Science Engineering", icon: <Code className="h-6 w-6" />, description: "Build the next generation of software and computational systems" },
    { name: "Artificial Intelligence and Data Science", icon: <TrendingUp className="h-6 w-6" />, description: "Drive breakthroughs in AI and harness data to generate insights" },
    { name: "Civil Engineering", icon: <Building className="h-6 w-6" />, description: "Design and oversee infrastructure projects, ensuring safety and sustainability" },
    { name: "Electrical Engineering", icon: <Bolt className="h-6 w-6" />, description: "Power the world with innovative electrical systems and solutions" },
    { name: "Biomedical Engineering", icon: <Heart className="h-6 w-6" />, description: "Integrate technology with healthcare to enhance medical devices and solutions" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'careers', 'skillTest', 'testimonials']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const NavLink = ({ to, children }) => (
    <Link to={to}>
      <Button 
        variant="ghost" 
        className={`${darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'} transition-colors`}
      >
        {children}
      </Button>
    </Link>
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-[#0c0a1d] text-gray-100' : 'bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 text-gray-900'} font-sans transition-all duration-300`}>
      <header className={`p-4 sticky top-0 z-10 ${darkMode ? 'bg-[#0c0a1d]' : 'bg-white'} bg-opacity-90 backdrop-filter backdrop-blur-lg`}>
        <div className="container mx-auto flex justify-between items-center">
          <span className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
            SkillMetrics
          </span>
          <nav className="hidden md:flex space-x-6">
            <NavButton to="/home" label="Home" active/>
            <NavButton to="/pricing" label="Pricing" />
            <NavButton to="/resources" label="Resources"/>
            <NavButton to="/support" label="Support" />
            <NavButton to="/login" label="Login" />
          </nav>
          <div className="flex space-x-2 items-center">
          <ProfileIcon darkMode={darkMode} />
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
              {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-purple-600" />}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <main className={`flex-grow w-full flex flex-col justify-start pt-8`}>
        <motion.section 
          id="home" 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            variants={itemVariants}
            className={`text-5xl font-extrabold mb-4 ${darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500' : 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500'}`}
          >
            Discover Your Career Potential
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}
          >
            Unlock your skills, explore career paths, and find your perfect fit in the tech industry with SkillMetrics.
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="mt-8"
          >
            <Link to="/careertest">
              <Button className={`${darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700'} text-white font-semibold py-3 px-6 rounded-full transition-all transform hover:scale-105`}>
                <GraduationCap className="mr-2 h-5 w-5" /> Start Your Career Assessment
              </Button>
            </Link>
          </motion.div>
        </motion.section>

        <motion.section 
          id="careers" 
          className="mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className={`text-3xl font-bold text-center mb-8 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}
          >
            Explore Tech Careers
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-4"
            variants={containerVariants}
          >
            {careers.map((career, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <Link to="/questions">
                  <Card className={`${darkMode ? 'bg-gray-800 bg-opacity-90 border-gray-700' : 'bg-white bg-opacity-90 border-purple-200'} transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl w-full overflow-hidden`}>
                    <CardContent className="p-6">
                      <div className={`mb-4 p-4 ${darkMode ? 'bg-purple-600' : 'bg-gradient-to-r from-pink-500 to-purple-600'} rounded-full inline-block`}>
                        {React.cloneElement(career.icon, { className: "h-8 w-8 text-white" })}
                      </div>
                      <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-gray-100' : 'text-purple-600'}`}>{career.name}</h3>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{career.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section 
          id="skillTest" 
          className="mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className={`text-3xl font-bold text-center mb-8 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}
          >
            Skill-based Test
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4"
            variants={containerVariants}
          >
            {[
              { title: "Comprehensive Assessment", description: "Evaluate your skills across various tech domains", icon: <CheckCircle className="h-6 w-6" /> },
              { title: "Adaptive Difficulty", description: "Questions adjust based on your performance", icon: <Target className="h-6 w-6" /> },
              { title: "Instant Results", description: "Get immediate feedback on your strengths and areas for improvement", icon: <Clock className="h-6 w-6" /> },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <Card className={`${darkMode ? 'bg-gray-800 bg-opacity-90 border-gray-700' : 'bg-white bg-opacity-90 border-purple-200'} transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl w-full h-full`}>
                  <CardContent className="p-6 flex flex-col items-center h-full">
                    <div className={`mb-4 p-4 ${darkMode ? 'bg-purple-600' : 'bg-gradient-to-r from-pink-500 to-purple-600'} rounded-full`}>
                      {React.cloneElement(feature.icon, { className: "h-8 w-8 text-white" })}
                    </div>
                    <h3 className={`text-lg font-semibold text-center mb-2 ${darkMode ? 'text-gray-100' : 'text-purple-600'}`}>{feature.title}</h3>
                    <p className={`text-sm text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Link to="/skilltest">
              <Button className={`${darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700'} text-white font-semibold py-3 px-6 rounded-full transition-all transform hover:scale-105`}>
                Take the Skill-based Test Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.section>
      </main>

      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={`w-full py-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}
      >
        <div className="container mx-auto text-center">
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>&copy; 2024 SkillMetrics. All rights reserved.</p>
        </div>
      </motion.footer>
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