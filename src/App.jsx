import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Search, BookOpen, BarChart, Award, FileText, Users, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-gray-100' : 'bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 text-gray-900'} font-sans transition-all duration-300`}>
      <header className={`p-4 sticky top-0 z-10 backdrop-filter backdrop-blur-lg ${darkMode ? 'bg-gray-900 bg-opacity-40' : 'bg-white bg-opacity-40'} shadow-lg`}>
        <div className="container mx-auto flex justify-between items-center">
          <span className={`text-2xl font-bold ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>
            SkillMetrics
          </span>
          <nav className="space-x-4 flex items-center">
            <Button asChild variant="ghost" className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors`}>
              <Link to="/">Home</Link>
            </Button>
            <Button asChild variant="ghost" className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors`}>
              <Link to="/pricing">Pricing</Link>
            </Button>
            <Button asChild variant="ghost" className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors`}>
              <Link to="/">Resources</Link>
            </Button>
            <Button asChild variant="ghost" className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors`}>
              <Link to="/support">Support</Link>
            </Button>
            <Button asChild variant="ghost" className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors`}>
              <Link to="/login">Login</Link>
            </Button>
            <Button variant="ghost" onClick={toggleDarkMode} className="ml-4">
              {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-indigo-600" />}
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto mt-8 px-4">
        <div className={`rounded-lg shadow-xl p-6 ${darkMode ? 'bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-md ' : 'bg-white bg-opacity-70 backdrop-filter backdrop-blur '}`}>
          <h1 className={`text-5xl font-extrabold mb-6 ${darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300' : 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500'}`}>
            Elevate Your Career with SkillMetrics
          </h1>
          <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Your AI-powered platform for personalized job matching and skill development</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <FeatureCard
              icon={<Search className={`w-8 h-8 ${darkMode ? 'text-pink-400' : 'text-pink-500'}`} />}
              title="AI-Powered Job Matching"
              description="Get personalized job recommendations based on your skills and preferences"
              darkMode={darkMode}
            />
            <FeatureCard
              icon={<BookOpen className={`w-8 h-8 ${darkMode ? 'text-purple-400' : 'text-purple-500'}`} />}
              title="Skill Gap Analysis"
              description="Identify areas for improvement and get tailored course recommendations"
              darkMode={darkMode}
            />
            <FeatureCard
              icon={<BarChart className={`w-8 h-8 ${darkMode ? 'text-indigo-400' : 'text-indigo-500'}`} />}
              title="Job Market Insights"
              description="Access real-time data on trending jobs and skills in demand"
              darkMode={darkMode}
            />
            <FeatureCard
              icon={<Award className={`w-8 h-8 ${darkMode ? 'text-yellow-400' : 'text-yellow-500'}`} />}
              title="Skills Verification"
              description="Earn badges and certifications to showcase your competencies"
              darkMode={darkMode}
            />
            <FeatureCard
              icon={<FileText className={`w-8 h-8 ${darkMode ? 'text-green-400' : 'text-green-500'}`} />}
              title="Resume Wizard"
              description="Build a professional resume automatically based on your profile"
              darkMode={darkMode}
            />
            <FeatureCard
              icon={<Users className={`w-8 h-8 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />}
              title="Community Support"
              description="Connect with peers, mentors, and attend virtual career events"
              darkMode={darkMode}
            />
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" className={`text-lg font-semibold ${darkMode ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white' : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white'}`}>
              <Link to="/login">Get Started</Link>
            </Button>
          </div>
        </div>
      </main>
      
    </div>
  );
}

function FeatureCard({ icon, title, description, darkMode }) {
  return (
    <div className={`rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 ${darkMode ? 'bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm border border-gray-700 hover:border-pink-500' : 'bg-white bg-opacity-60 backdrop-filter backdrop-blur-sm border border-purple-200 hover:border-purple-400'}`}>
      <div className="flex items-center mb-3">
        {icon}
        <h3 className={`text-lg font-semibold ml-2 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{title}</h3>
      </div>
      <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{description}</p>
    </div>
  );
}