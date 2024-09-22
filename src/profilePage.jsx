import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Moon, Sun, MapPin, Clock, Eye, MessageSquare, HelpCircle, Award, Users, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProfilePage() {
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
              <Link to="/home">Home</Link>
            </Button>
            <Button asChild variant="ghost" className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors`}>
              <Link to="/resources">Resources</Link>
            </Button>
            <Button variant="ghost" onClick={toggleDarkMode} className="ml-4">
              {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-indigo-600" />}
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto mt-8 px-4">
        <div className={`rounded-lg shadow-xl p-6 ${darkMode ? 'bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-md' : 'bg-white bg-opacity-70 backdrop-filter backdrop-blur'}`}>
          <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
            <img src="/placeholder.svg?height=150&width=150" alt="Profile" className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-6" />
            <div>
              <h1 className={`text-4xl font-bold mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Fnguyen</h1>
              <div className="flex items-center mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Germany</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Member for 5 years, 1 month</span>
              </div>
              <div className="flex items-center mt-2">
                <Eye className="w-4 h-4 mr-2" />
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Last seen more than a month ago</span>
              </div>
            </div>
          </div>

          <Tabs defaultValue="profile" className="w-full">
            <TabsList>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="activity">Contributions</TabsTrigger>
            </TabsList>
            <TabsContent value="profile">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Stats</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <StatCard icon={<Award />} value="1,743" label="reputation" darkMode={darkMode} />
                    <StatCard icon={<Eye />} value="169k" label="reached" darkMode={darkMode} />
                    <StatCard icon={<MessageSquare />} value="75" label="answers" darkMode={darkMode} />
                    <StatCard icon={<HelpCircle />} value="6" label="questions" darkMode={darkMode} />
                  </div>
                </div>
                <div>
                  <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Badges</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <BadgeCard type="gold" count={0} darkMode={darkMode} />
                    <BadgeCard type="silver" count={6} darkMode={darkMode} />
                    <BadgeCard type="bronze" count={15} darkMode={darkMode} />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Communities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <CommunityCard name="Data Science" members="1.7k" darkMode={darkMode} />
                  <CommunityCard name="Stack Overflow" members="1.2k" darkMode={darkMode} />
                  <CommunityCard name="Artificial Intelligence" members="880" darkMode={darkMode} />
                  <CommunityCard name="Parenting" members="335" darkMode={darkMode} />
                  <CommunityCard name="Cross Validated" members="275" darkMode={darkMode} />
                </div>
              </div>

              <div className="mt-8">
                <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Top tags</h2>
                <div className="space-y-4">
                  <TagCard name="machine-learning" score={59} posts={28} percentage={35} darkMode={darkMode} />
                  <TagCard name="python" score={24} posts={13} percentage={16} darkMode={darkMode} />
                  <TagCard name="classification" score={15} posts={12} percentage={15} darkMode={darkMode} />
                  <TagCard name="r" score={14} posts={12} percentage={15} darkMode={darkMode} />
                  <TagCard name="predictive-modeling" score={14} posts={9} percentage={11} darkMode={darkMode} />
                  <TagCard name="regression" score={13} posts={11} percentage={14} darkMode={darkMode} />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="activity">
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Activity content goes here.</p>
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

function BadgeCard({ type, count, darkMode }) {
  const badgeColor = type === 'gold' ? 'bg-yellow-400' : type === 'silver' ? 'bg-gray-300' : 'bg-yellow-600';
  return (
    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
      <div className="flex items-center mb-2">
        <div className={`w-6 h-6 rounded-full ${badgeColor} mr-2`}></div>
        <span className={`text-xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{count}</span>
      </div>
      <span className={`text-sm capitalize ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{type} badges</span>
    </div>
  );
}

function CommunityCard({ name, members, darkMode }) {
  return (
    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
      <div className="flex items-center justify-between">
        <span className={`font-medium ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{name}</span>
        <Badge variant="secondary" className="flex items-center">
          <Users className="w-3 h-3 mr-1" />
          {members}
        </Badge>
      </div>
    </div>
  );
}

function TagCard({ name, score, posts, percentage, darkMode }) {
  return (
    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
      <div className="flex items-center justify-between mb-2">
        <Badge className={`${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}>
          <Tag className="w-3 h-3 mr-1" />
          {name}
        </Badge>
        <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{score} score</span>
      </div>
      <div className="flex items-center justify-between">
        <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{posts} posts</span>
        <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{percentage}%</span>
      </div>
      <Progress value={percentage} className="mt-2" />
    </div>
  );
}