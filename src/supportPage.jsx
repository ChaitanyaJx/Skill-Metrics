'use client'

import React, { useState, useContext } from 'react'
import { DarkModeContext } from '/src/DarkModeContext'
import { Button } from "@/components/ui/button"
import { Moon, Sun, User, Building, GraduationCap, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SupportPage() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
  const [activeTab, setActiveTab] = useState('individual')

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
            <NavButton to="/support" label="Support" active />
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
          How can we help you?
        </h1>
        <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-12 max-w-2xl mx-auto text-center`}>
          Choose your category and let us assist you with your inquiry
        </p>

        <div className="flex justify-center space-x-4 mb-8">
          <Button
            variant={activeTab === 'individual' ? 'default' : 'outline'}
            className={`${activeTab === 'individual' ? (darkMode ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-purple-500 hover:bg-purple-600 text-black') : 'bg-transparent'} `}
            onClick={() => setActiveTab('individual')}
          >
            <User className="w-4 h-4 mr-2" />
            Individual
          </Button>
          <Button
            variant={activeTab === 'college' ? 'default' : 'outline'}
            className={`${activeTab === 'college' ? (darkMode ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-purple-500 hover:bg-purple-600 text-black') : 'bg-transparent'} `}
            onClick={() => setActiveTab('college')}
          >
            <GraduationCap className="w-4 h-4 mr-2" />
            College/University
          </Button>
          <Button
            variant={activeTab === 'corporate' ? 'default' : 'outline'}
            className={`${activeTab === 'corporate' ? (darkMode ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-purple-500 hover:bg-purple-600 text-black') : 'bg-transparent '} `}
            onClick={() => setActiveTab('corporate')}
          >
            <Building className="w-4 h-4 mr-2" />
            Corporate
          </Button>
        </div>

        {activeTab === 'individual' && <IndividualForm darkMode={darkMode} />}
        {activeTab === 'college' && <CollegeForm darkMode={darkMode} />}
        {activeTab === 'corporate' && <CorporateForm darkMode={darkMode} />}
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

function IndividualForm({ darkMode }) {
  return (
    <form className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 bg-opacity-50 text-gray-200' : 'bg-gray-100 text-gray-900'} shadow-md`}>
      <h2 className="text-2xl font-bold mb-6 text-center">Individual Support</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block font-medium mb-1">Name</label>
        <input id="name" type="text" className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-300 text-gray-900'}`} placeholder="Enter your name" required />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block font-medium mb-1">Email</label>
        <input id="email" type="email" className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-300 text-gray-900'}`} placeholder="Enter your email" required />
      </div>

      <div className="mb-4">
        <label htmlFor="issue" className="block font-medium mb-1">Issue</label>
        <select id="issue" className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-300 text-gray-900'}`} required>
          <option value="">Select an issue</option>
          <option value="account">Account related</option>
          <option value="technical">Technical support</option>
          <option value="billing">Billing inquiry</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block font-medium mb-1">Message</label>
        <textarea id="message" className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-300 text-gray-900'}`} placeholder="Describe your issue" rows={4} required></textarea>
      </div>

      <Button className={`w-full ${darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'} text-white`}>
        Submit
      </Button>
    </form>
  )
}

function CollegeForm({ darkMode }) {
  return (
    <form className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 bg-opacity-50 text-gray-200' : 'bg-gray-100 text-gray-900'} shadow-md`}>
      <h2 className="text-2xl font-bold mb-6 text-center">College/University Support</h2>

      <div className="mb-4">
        <label htmlFor="institutionName" className="block font-medium mb-1">Institution Name</label>
        <input id="institutionName" type="text" className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-300 text-gray-900'}`} placeholder="Enter institution name" required />
      </div>

      <div className="mb-4">
        <label htmlFor="contactPerson" className="block font-medium mb-1">Contact Person</label>
        <input id="contactPerson" type="text" className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-300 text-gray-900'}`} placeholder="Enter contact person's name" required />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block font-medium mb-1">Email</label>
        <input id="email" type="email" className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-300 text-gray-900'}`} placeholder="Enter your email" required />
      </div>

      <div className="mb-4">
        <label htmlFor="inquiry" className="block font-medium mb-1">Inquiry Type</label>
        <select id="inquiry" className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-300 text-gray-900'}`} required>
          <option value="">Select inquiry type</option>
          <option value="partnership">Partnership opportunities</option>
          <option value="demo">Request a demo</option>
          <option value="pricing">Pricing information</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block font-medium mb-1">Message</label>
        <textarea id="message" className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-300 text-gray-900'}`} placeholder="Provide details about your inquiry" rows={4} required></textarea>
      </div>

      <Button className={`w-full ${darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'} text-white`}>
        Submit Inquiry
      </Button>
    </form>
  )
}

function CorporateForm({ darkMode }) {
  return (
    <form className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 bg-opacity-50 text-gray-200' : 'bg-gray-100 text-gray-900'} shadow-md`}>
      <h2 className="text-2xl font-bold mb-6 text-center">Corporate Support</h2>

      <div className="mb-4">
        <label htmlFor="companyName" className="block font-medium mb-1">Company Name</label>
        <input id="companyName" type="text" className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-300 text-gray-900'}`} placeholder="Enter company name" required />
      </div>

      <div className="mb-4">
        <label htmlFor="contactPerson" className="block font-medium mb-1">Contact Person</label>
        <input id="contactPerson" type="text" className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-300 text-gray-900'}`} placeholder="Enter contact person's name" required />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block font-medium mb-1">Email</label>
        <input id="email" type="email" className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-300 text-gray-900'}`} placeholder="Enter your email" required />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block font-medium mb-1">Phone</label>
        <input id="phone" type="tel" className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-300 text-gray-900'}`} placeholder="Enter your phone number" required />
      </div>

      <div className="mb-4">
        <label htmlFor="inquiry" className="block font-medium mb-1">Inquiry Type</label>
        <select id="inquiry" className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-300 text-gray-900'}`} required>
          <option value="">Select inquiry type</option>
          <option value="enterprise">Enterprise solutions</option>
          <option value="customization">Customization options</option>
          <option value="pricing">Pricing information</option>
          <option value="demo">Request a demo</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block font-medium mb-1">Message</label>
        <textarea id="message" className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-300 text-gray-900'}`} placeholder="Provide details about your inquiry" rows={4} required></textarea>
      </div>

      <Button className={`w-full ${darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'} text-white`}>
        Submit Inquiry
      </Button>
    </form>
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