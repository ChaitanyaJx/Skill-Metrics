import React, { useState, useContext} from 'react'
import { DarkModeContext } from '/src/DarkModeContext';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Moon, Sun, MapPin, Clock, Eye, MessageSquare, HelpCircle, Award, Users, Tag, Star, Book, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProfileIcon } from './functions/icons';
export default function ProfilePage() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

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
              <Link to="/resources">Resources</Link>
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
          <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
            <img src="src/assets/profilePicDefault.jpg" alt="Profile" className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-6" />
            <div>
              <h1 className={`text-4xl font-bold mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Chaitanya</h1>
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
                  <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Stats</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <StatCard icon={<Award />} value="1,743" label="points" darkMode={darkMode} />
                    <StatCard icon={<Eye />} value="169k" label="reached" darkMode={darkMode} />
                    <StatCard icon={<MessageSquare />} value="75" label="answers" darkMode={darkMode} />
                    <StatCard icon={<HelpCircle />} value="6" label="questions" darkMode={darkMode} />
                  </div>
                </div>
                <div>
                  <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Roles of Interest</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <RoleCard role="Data Scientist" darkMode={darkMode} />
                    <RoleCard role="Machine Learning Engineer" darkMode={darkMode} />
                    <RoleCard role="AI Researcher" darkMode={darkMode} />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Recent Test Scores</h2>
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
    </div>
  );
}

function StatCard({ icon, value, label, darkMode }) {
  return (
    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
      <div className="flex items-center mb-2">
        {React.cloneElement(icon, { className: `w-5 h-5 mr-2 ${darkMode ? 'text-pink-400' : 'text-pink-600'}` })}
        <span className={`text-xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{value}</span>
      </div>
      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{label}</span>
    </div>
  );
}

function RoleCard({ role, darkMode }) {
  return (
    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
      <div className="flex items-center">
        <Briefcase className={`w-5 h-5 mr-2 ${darkMode ? 'text-pink-400' : 'text-pink-600'}`} />
        <span className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{role}</span>
      </div>
    </div>
  );
}

function TagScoreCard({ name, score, lastTested, darkMode }) {
  return (
    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
      <div className="flex items-center justify-between mb-2">
        <Badge className={`${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}>
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
  );
}

function ContributionCard({ type, title, date, points, darkMode }) {
  const iconMap = {
    'Question': <HelpCircle className={`w-5 h-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />,
    'Answer': <MessageSquare className={`w-5 h-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />,
    'Resource': <Book className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />,
  };

  return (
    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          {iconMap[type]}
          <span className={`ml-2 font-medium ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{type}</span>
        </div>
        <Badge className={darkMode ? 'bg-pink-600' : 'bg-pink-100 text-pink-800'}>+{points} points</Badge>
      </div>
      <h3 className={`text-lg font-semibold mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>{title}</h3>
      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{date}</span>
    </div>
  );
}