import React, { useState, useEffect, useContext} from 'react'
import { DarkModeContext } from '/src/DarkModeContext';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Moon, Sun, BookOpen, ArrowRight, Trophy, Target, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ScoreCard() {

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const overallScore = 75;
  const skills = [
    { name: "JavaScript", score: 80, required: 85, description: "Core language for web development" },
    { name: "React", score: 70, required: 80, description: "Popular library for building user interfaces" },
    { name: "Node.js", score: 65, required: 75, description: "JavaScript runtime for server-side development" },
    { name: "SQL", score: 85, required: 70, description: "Language for managing relational databases" },
    { name: "Git", score: 90, required: 80, description: "Version control system for tracking changes in code" },
  ];

  const recommendedResources = [
    { 
      title: "Advanced JavaScript Techniques", 
      link: "https://example.com/js-advanced", 
      difficulty: "Advanced",
      category: "Course",
      description: "Deep dive into advanced JavaScript concepts and patterns"
    },
    { 
      title: "React Hooks Mastery", 
      link: "https://example.com/react-hooks", 
      difficulty: "Intermediate",
      category: "Tutorial",
      description: "Comprehensive guide to mastering React Hooks"
    },
    { 
      title: "Node.js Fundamentals", 
      link: "https://example.com/nodejs-basics", 
      difficulty: "Beginner",
      category: "Documentation",
      description: "Official Node.js documentation for beginners"
    },
  ];

  const strengths = skills.filter(skill => skill.score >= skill.required).map(skill => skill.name);
  const areasForImprovement = skills.filter(skill => skill.score < skill.required).map(skill => skill.name);

  useEffect(() => {
    const progressBars = document.querySelectorAll('[role="progressbar"]');
    progressBars.forEach((bar) => {
      const value = bar.getAttribute('aria-valuenow');
      bar.style.width = '0%';
      setTimeout(() => {
        bar.style.transition = 'width 1s ease-in-out';
        bar.style.width = `${value}%`;
      }, 100);
    });
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} font-sans transition-all duration-300`}>
      <header className={`p-4 sticky top-0 z-10 backdrop-filter backdrop-blur-lg ${darkMode ? 'bg-gray-800 bg-opacity-80' : 'bg-white bg-opacity-80'} shadow-lg`}>
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

      <main className="flex-grow container mx-auto mt-8 px-4 pb-8">
        <Card className={`rounded-lg shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <CardHeader>
            <CardTitle className={`text-4xl font-extrabold mb-2 text-center ${darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300' : 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500'}`}>
              Your Skill Scorecard
            </CardTitle>
            <CardDescription className="text-center text-lg">
              Track your progress and identify areas for growth
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Overall Skill Score */}
            <Card className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} overflow-hidden`}>
              <CardHeader>
                <CardTitle className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Overall Skill Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Progress value={overallScore} className="flex-grow mr-4" />
                  <span className={`text-4xl font-bold ${overallScore >= 70 ? 'text-green-500' : 'text-yellow-500'}`}>{overallScore}%</span>
                </div>
                <p className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Your overall skill score is calculated based on your performance across all assessed skills.
                </p>
              </CardContent>
            </Card>

            {/* Strengths and Areas for Improvement */}
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mt-8`}>
              <Card className={`${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} shadow-lg rounded-lg overflow-hidden`}>
                <CardHeader className="bg-gradient-to-r from-yellow-400 to-yellow-600 pb-2">
                  <CardTitle className="flex items-center text-white">
                    <Trophy className="w-6 h-6 mr-2" />
                    Your Strengths
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3">
                    {strengths.map((strength, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-2"></span>
                        <div>
                          <span className="font-medium">{strength}</span>
                          <p className={`text-sm mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            {skills.find(skill => skill.name === strength)?.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className={`${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} shadow-lg rounded-lg overflow-hidden`}>
                <CardHeader className="bg-gradient-to-r from-red-400 to-red-600 pb-2">
                  <CardTitle className="flex items-center text-white">
                    <Target className="w-6 h-6 mr-2" />
                    Areas for Improvement
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3">
                    {areasForImprovement.map((area, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-red-500 mt-2 mr-2"></span>
                        <div>
                          <span className="font-medium">{area}</span>
                          <p className={`text-sm mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            {skills.find(skill => skill.name === area)?.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Skills Assessment */}
            <Card className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} overflow-hidden`}>
              <CardHeader>
                <CardTitle className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Detailed Skills Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{skill.name}</span>
                        <span className={`${skill.score >= skill.required ? 'text-green-500' : 'text-yellow-500'} font-semibold`}>
                          {skill.score}/{skill.required}
                        </span>
                      </div>
                      <Progress value={(skill.score / skill.required) * 100} className="w-full" />
                      <div className="flex justify-between items-center text-sm">
                        <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>{skill.description}</span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.score >= skill.required 
                                ? `Great job! You've met or exceeded the required score for ${skill.name}.` 
                                : `Keep practicing ${skill.name} to reach the required score.`}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recommended Learning Resources */}
            <Card className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} overflow-hidden`}>
              <CardHeader>
                <CardTitle className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Recommended Learning Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {recommendedResources.map((resource, index) => (
                    <li key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block group ${darkMode ? 'text-pink-400 hover:text-pink-300' : 'text-purple-600 hover:text-purple-500'} transition-colors`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            <span className="font-medium">{resource.title}</span>
                          </div>
                          <div className="flex items-center">
                            <Badge variant="secondary" className="mr-2">
                              {resource.difficulty}
                            </Badge>
                            <Badge variant="secondary" className="mr-2">
                              {resource.category}
                            </Badge>
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {resource.description}
                        </p>
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}