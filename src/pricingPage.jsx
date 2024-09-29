'use client'

import React, { useContext } from 'react'
import { DarkModeContext } from '/src/DarkModeContext'
import { Button } from "@/components/ui/button"
import { Moon, Sun, User, GraduationCap, Building, Check, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function PricingPage() {
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
            <NavButton to="/pricing" label="Pricing" active />
            <NavButton to="/resources" label="Resources" />
            <NavButton to="/support" label="Support" />
            <NavButton to="/login" label="Login" />
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
          Select the perfect plan<br />to elevate your career
        </h1>
        <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-12 max-w-2xl mx-auto text-center`}>
          Unlock the full potential of SkillMetrics with our tailored pricing options
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            icon={<User className="w-12 h-12" />}
            title="Personal"
            price="Free"
            description="Perfect for individual job seekers"
            features={[
              "Unlimited access to all features contributed by community",
              "AI-powered job matching",
              "Basic skill gap analysis",
              "Personalized job market insights",
              "Standard resume builder"
            ]}
            ctaText="Get Started"
            ctaLink="/login"
            darkMode={darkMode}
          />
          <PricingCard
            icon={<GraduationCap className="w-12 h-12" />}
            title="College/Universities"
            price="Donations and Affiliates"
            description="Ideal for educational institutions"
            features={[
              "All Personal features",
              "Bulk student accounts",
              "Advanced analytics dashboard",
              "Integration with LMS",
              "Career fair organization tools"
            ]}
            ctaText="Contact Sales"
            ctaLink="/support"
            darkMode={darkMode}
          />
          <PricingCard
            icon={<Building className="w-12 h-12" />}
            title="Corporates"
            price="Custom"
            description="Tailored for businesses of all sizes"
            features={[
              "All College/Universities features",
              "Custom branding",
              "API access",
              "Dedicated account manager",
              "Employee skill mapping",
              "Talent pool analytics"
            ]}
            ctaText="Get a Quote"
            ctaLink="/support"
            darkMode={darkMode}
          />
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

function PricingCard({ icon, title, price, description, features, ctaText, ctaLink, darkMode }) {
  return (
    <Card 
      className={`flex flex-col h-full ${
        darkMode
          ? 'bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm border-gray-700'
          : 'bg-gray-100 border-purple-200'
      } transition-all duration-300 hover:shadow-xl`}
    >
      <CardHeader>
        <div className="flex justify-center mb-4">
          {React.cloneElement(icon, {
            className: `w-16 h-16 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`,
          })}
        </div>
        <CardTitle className={`text-2xl font-bold text-center ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{title}</CardTitle>
        <CardDescription className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className={`text-3xl font-bold text-center mb-6 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{price}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className={`w-5 h-5 mr-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
              <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className={`w-full ${
          darkMode
            ? 'bg-purple-600 hover:bg-purple-700'
            : 'bg-purple-500 hover:bg-purple-600'
        } text-white`}>
          <Link to={ctaLink}>{ctaText}</Link>
        </Button>
      </CardFooter>
    </Card>
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