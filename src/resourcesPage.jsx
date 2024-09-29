'use client'

import React, { useState, useEffect, useCallback, useContext } from 'react';
import { DarkModeContext } from '/src/DarkModeContext';
import { Button } from "@/components/ui/button";
import { Moon, Sun, Code, Database, Globe, Server, Shield, Brain, Search, X, User} from 'lucide-react';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash';
import { ProfileIcon } from './functions/icons';

const resources = {
  programming: [
    { href: "https://www.freecodecamp.org/", title: "freeCodeCamp", description: "Learn to code for free with interactive tutorials and projects." },
    { href: "https://leetcode.com/", title: "LeetCode", description: "Practice coding skills with a vast collection of programming problems." },
    // ... other programming resources
  ],
  databases: [
    { href: "https://www.mysqltutorial.org/", title: "MySQL Tutorial", description: "Comprehensive MySQL database tutorials for beginners and advanced users." },
    { href: "https://www.postgresql.org/docs/current/tutorial.html", title: "PostgreSQL Tutorial", description: "Official PostgreSQL tutorial covering all aspects of the database system." },
    // ... other database resources
  ],
  webdev: [
    { href: "https://developer.mozilla.org/en-US/", title: "MDN Web Docs", description: "Comprehensive documentation and learning resources for web technologies." },
    { href: "https://www.frontendmentor.io/", title: "Frontend Mentor", description: "Improve your front-end skills by building real projects." },
    // ... other web development resources
  ],
  devops: [
    { href: "https://www.docker.com/get-started", title: "Docker Get Started", description: "Official Docker documentation and tutorials for beginners." },
    { href: "https://kubernetes.io/docs/tutorials/", title: "Kubernetes Tutorials", description: "Learn how to use Kubernetes for container orchestration." },
    // ... other DevOps resources
  ],
  security: [
    { href: "https://www.cybrary.it/", title: "Cybrary", description: "Free online cyber security training and courses." },
    { href: "https://www.hacksplaining.com/", title: "Hacksplaining", description: "Security training for developers with interactive lessons." },
    // ... other security resources
  ],
  aiml: [
    { href: "https://www.coursera.org/learn/machine-learning", title: "Machine Learning by Andrew Ng", description: "Stanford's introductory course to machine learning, deep learning, and AI." },
    { href: "https://www.fast.ai/", title: "fast.ai", description: "Making neural networks uncool again: practical deep learning for coders." },
    // ... other AI/ML resources
  ],
};

export default function ResourcesPage() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [activeTab, setActiveTab] = useState('programming');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const debouncedSearch = useCallback(
    debounce((term) => {
      const allResources = Object.values(resources).flat();
      const suggestions = allResources
        .filter(resource =>
          resource.title.toLowerCase().includes(term.toLowerCase()) ||
          resource.description.toLowerCase().includes(term.toLowerCase())
        )
        .slice(0, 5)
        .map(resource => resource.title);
      setSearchSuggestions(suggestions);
    }, 300),
    []
  );

  useEffect(() => {
    if (searchTerm) {
      debouncedSearch(searchTerm);
    } else {
      setSearchSuggestions([]);
    }
  }, [searchTerm, debouncedSearch]);

  const filteredResources = Object.entries(resources).flatMap(([category, categoryResources]) =>
    categoryResources.filter(resource =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    ).map(resource => ({ ...resource, category }))
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSearchSuggestions([]);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSearchSuggestions([]);
  };

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-[#0c0a1d] text-gray-100' : 'bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 text-gray-900'} font-sans transition-all duration-300`}>
      <header className={`p-4 sticky top-0 z-10 ${darkMode ? 'bg-[#0c0a1d]' : 'bg-white'} bg-opacity-90 backdrop-filter backdrop-blur-lg`}>
        <div className="container mx-auto flex justify-between items-center">
          <span className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
            SkillMetrics
          </span>
          <nav className="hidden md:flex space-x-6">
            <NavButton to="/home" label="Home" />
            <NavButton to="/pricing" label="Pricing" />
            <NavButton to="/resources" label="Resources" active/>
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

      <main className="flex-grow container mx-auto mt-8 px-4">
        <div className={`rounded-lg shadow-xl p-6 ${darkMode ? 'bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-md' : 'bg-white bg-opacity-70 backdrop-filter backdrop-blur'}`}>
          <h1 className={`text-5xl font-extrabold mb-7 text-center ${darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500' : 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500'}`}>
            SDE Resources
          </h1>

          <div className="mb-8">
            <div className="relative w-full mb-4">
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={handleSearchChange}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                className={`w-full p-2 pl-10 pr-10 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
              {isSearchFocused && searchSuggestions.length > 0 && (
                <ul className={`absolute z-10 w-full mt-1 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                  {searchSuggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className={`p-2 cursor-pointer ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'}`}
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {Object.keys(resources).map((tab) => (
                <ResourceTab
                  key={tab}
                  icon={getTabIcon(tab)}
                  label={getTabLabel(tab)}
                  tab={tab}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  darkMode={darkMode}
                />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {searchTerm ? (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredResources.map((resource, index) => (
                  <ResourceLink
                    key={index}
                    href={resource.href}
                    title={resource.title}
                    description={resource.description}
                    darkMode={darkMode}
                    category={resource.category}
                  />
                ))}
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {resources[activeTab].map((resource, index) => (
                  <ResourceLink
                    key={index}
                    href={resource.href}
                    title={resource.title}
                    description={resource.description}
                    darkMode={darkMode}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function ResourceTab({ icon, label, tab, activeTab, setActiveTab, darkMode }) {
  return (
    <Button
      variant={activeTab === tab ? 'default' : 'outline'}
      className={`${activeTab === tab ? (darkMode ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-purple-600 text-white hover:bg-purple-700') : 'bg-transparent'}`}
      onClick={() => setActiveTab(tab)}
    >
      {React.cloneElement(icon, { className: "w-4 h-4 mr-2" })}
      {label}
    </Button>
  );
}

function ResourceLink({ href, title, description, darkMode, category }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`block p-4 rounded-lg transition-all duration-300 ${
        darkMode
          ? 'bg-gray-700 hover:bg-gray-600'
          : 'bg-white hover:bg-gray-100'
      }`}
    >
      <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>{title}</h3>
      <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{description}</p>
      {category && (
        <span className={`inline-block mt-2 px-2 py-1 text-xs rounded ${darkMode ? 'bg-gray-600 text-gray-200' : 'bg-gray-200 text-gray-700'}`}>
          {getTabLabel(category)}
        </span>
      )}
    </a>
  );
}

function NavButton({ to, label, active = false }) {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <Button asChild variant="ghost" className={`text-sm font-medium transition-colors ${darkMode ? 'hover:text-purple-400' : 'hover:text-purple-600'} ${active ? (darkMode ? 'text-purple-400 border-b-2 border-purple-400' : 'text-purple-600 border-b-2 border-purple-600') : (darkMode ? 'text-gray-300' : 'text-gray-600')}`}>
      <Link to={to}>{label}</Link>
    </Button>
  )
}

function getTabIcon(tab) {
  const icons = {
    programming: <Code />,
    databases: <Database />,
    webdev: <Globe />,
    devops: <Server />,
    security: <Shield />,
    aiml: <Brain />,
  };
  return icons[tab] || <Code />;
}

function getTabLabel(tab) {
  const labels = {
    programming: "Programming",
    databases: "Databases",
    webdev: "Web Development",
    devops: "DevOps",
    security: "Cybersecurity",
    aiml: "AI/ML",
  };
  return labels[tab] || tab;
}