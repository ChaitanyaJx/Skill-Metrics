import React, { useState, useContext} from 'react'
import { DarkModeContext } from '/src/DarkModeContext';
import { Button } from "@/components/ui/button";
import { Moon, Sun, User, Building, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProfileIcon } from './functions/icons';


export default function SupportPage() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const [activeTab, setActiveTab] = useState('individual');

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-gray-100' : 'bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 text-gray-900'} font-sans transition-all duration-300`}>
      <header className={`p-4 sticky top-0 z-10 backdrop-filter backdrop-blur-lg ${darkMode ? 'bg-gray-900 bg-opacity-40' : 'bg-white bg-opacity-40'} shadow-lg`}>
        <div className="container mx-auto flex justify-between items-center">
          <span className={`text-2xl font-bold ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>
            SkillMetrics
          </span>
          <nav className="space-x-4 flex items-center">
            <Button asChild variant="ghost" className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors`}>
              <Link to="/home">Home</Link>
            </Button>
            <Button asChild variant="ghost" className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors`}>
              <Link to="/pricing">Pricing</Link>
            </Button>
            <Button asChild variant="ghost" className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors`}>
              <Link to="/resources">Resources</Link>
            </Button>
            <Button asChild variant="ghost" className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors`}>
              <Link to="/support">Support</Link>
            </Button>
            <ProfileIcon darkMode={darkMode} />
            <Button variant="ghost" onClick={toggleDarkMode} className="ml-4">
              {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-indigo-600" />}
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto mt-8 px-4">
        <div className={`rounded-lg shadow-xl p-6 ${darkMode ? 'bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-md' : 'bg-white bg-opacity-70 backdrop-filter backdrop-blur'}`}>
          <h1 className={`text-5xl font-extrabold mb-6 text-center ${darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300' : 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500'}`}>
            Support Center
          </h1>

          <div className="flex justify-center space-x-4 mb-8">
            <Button
              variant={activeTab === 'individual' ? 'default' : 'outline'}
              className={`${activeTab === 'individual' ? (darkMode ? 'bg-pink-500 text-white hover:bg-pink-600' : 'bg-purple-600 text-white hover:bg-purple-700') : 'bg-transparent'}`}
              onClick={() => setActiveTab('individual')}
            >
              <User className="w-4 h-4 mr-2" />
              Individual
            </Button>
            <Button
              variant={activeTab === 'college' ? 'default' : 'outline'}
              className={`${activeTab === 'college' ? (darkMode ? 'bg-pink-500 text-white hover:bg-pink-600' : 'bg-purple-600 text-white hover:bg-purple-700') : 'bg-transparent'}`}
              onClick={() => setActiveTab('college')}
            >
              <GraduationCap className="w-4 h-4 mr-2" />
              College/University
            </Button>
            <Button
              variant={activeTab === 'corporate' ? 'default' : 'outline'}
              className={`${activeTab === 'corporate' ? (darkMode ? 'bg-pink-500 text-white hover:bg-pink-600' : 'bg-purple-600 text-white hover:bg-purple-700') : 'bg-transparent'}`}
              onClick={() => setActiveTab('corporate')}
            >
              <Building className="w-4 h-4 mr-2" />
              Corporate
            </Button>
          </div>

          {activeTab === 'individual' && <IndividualForm darkMode={darkMode} />}
          {activeTab === 'college' && <CollegeForm darkMode={darkMode} />}
          {activeTab === 'corporate' && <CorporateForm darkMode={darkMode} />}
        </div>
      </main>
    </div>
  );
}

function IndividualForm({ darkMode }) {
  return (
    <form className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 bg-opacity-50 text-gray-200' : 'bg-white bg-opacity-70 text-gray-900'} shadow-md`}>
      <h2 className="text-2xl font-bold mb-6 text-center">Individual Support</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block font-medium">Name</label>
        <input id="name" type="text" className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-300 text-gray-900'}`} placeholder="Enter your name" required />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block font-medium">Email</label>
        <input id="email" type="email" className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-300 text-gray-900'}`} placeholder="Enter your email" required />
      </div>

      <div className="mb-4">
        <label htmlFor="issue" className="block font-medium">Issue</label>
        <select id="issue" className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-300 text-gray-900'}`} required>
          <option value="">Select an issue</option>
          <option value="account">Account related</option>
          <option value="technical">Technical support</option>
          <option value="billing">Billing inquiry</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block font-medium">Message</label>
        <textarea id="message" className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-300 text-gray-900'}`} placeholder="Describe your issue" rows="4" required></textarea>
      </div>

      <Button className={`w-full ${darkMode ? 'bg-pink-500 text-white hover:bg-pink-600' : 'bg-purple-600 text-white hover:bg-purple-700'}`}>
        Submit
      </Button>
    </form>
  );
}

function CollegeForm({ darkMode }) {
  return (
    <form className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 bg-opacity-50 text-gray-200' : 'bg-white bg-opacity-70 text-gray-900'} shadow-md`}>
      <h2 className="text-2xl font-bold mb-6 text-center">College/University Support</h2>

      <div className="mb-4">
        <label htmlFor="institutionName" className="block font-medium">Institution Name</label>
        <input id="institutionName" type="text" className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-300 text-gray-900'}`} placeholder="Enter institution name" required />
      </div>

      <div className="mb-4">
        <label htmlFor="contactPerson" className="block font-medium">Contact Person</label>
        <input id="contactPerson" type="text" className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-300 text-gray-900'}`} placeholder="Enter contact person's name" required />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block font-medium">Email</label>
        <input id="email" type="email" className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-300 text-gray-900'}`} placeholder="Enter your email" required />
      </div>

      <div className="mb-4">
        <label htmlFor="inquiry" className="block font-medium">Inquiry Type</label>
        <select id="inquiry" className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-300 text-gray-900'}`} required>
          <option value="">Select inquiry type</option>
          <option value="partnership">Partnership opportunities</option>
          <option value="demo">Request a demo</option>
          <option value="pricing">Pricing information</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block font-medium">Message</label>
        <textarea id="message" className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-300 text-gray-900'}`} placeholder="Provide details about your inquiry" rows="4" required></textarea>
      </div>

      <Button className={`w-full ${darkMode ? 'bg-pink-500 text-white hover:bg-pink-600' : 'bg-purple-600 text-white hover:bg-purple-700'}`}>
        Submit Inquiry
      </Button>
    </form>
  );
}

function CorporateForm({ darkMode }) {
  return (
    <form className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 bg-opacity-50 text-gray-200' : 'bg-white bg-opacity-70 text-gray-900'} shadow-md`}>
      <h2 className="text-2xl font-bold mb-6 text-center">Corporate Support</h2>

      <div className="mb-4">
        <label htmlFor="companyName" className="block font-medium">Company Name</label>
        <input id="companyName" type="text" className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-300 text-gray-900'}`} placeholder="Enter company name" required />
      </div>

      <div className="mb-4">
        <label htmlFor="contactPerson" className="block font-medium">Contact Person</label>
        <input id="contactPerson" type="text" className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-300 text-gray-900'}`} placeholder="Enter contact person's name" required />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block font-medium">Email</label>
        <input id="email" type="email" className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-300 text-gray-900'}`} placeholder="Enter your email" required />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block font-medium">Phone</label>
        <input id="phone" type="tel" className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-300 text-gray-900'}`} placeholder="Enter your phone number" required />
      </div>

      <div className="mb-4">
        <label htmlFor="inquiry" className="block font-medium">Inquiry Type</label>
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
        <label htmlFor="message" className="block font-medium">Message</label>
        <textarea id="message" className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-300 text-gray-900'}`} placeholder="Provide details about your inquiry" rows="4" required></textarea>
      </div>

      <Button className={`w-full ${darkMode ? 'bg-pink-500 text-white hover:bg-pink-600' : 'bg-purple-600 text-white hover:bg-purple-700'}`}>
        Submit Inquiry
      </Button>
    </form>
  );
}