import React, { useState, useContext } from 'react'
import { DarkModeContext } from './DarkModeContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Github, Twitter, Moon, Sun } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { login, register } from './api.cjs' // Import the login and register functions from api.js

export default function LoginPage() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('login');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      navigate('/home');
    } catch (err) {
      setError(err.message || 'Login failed');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await register(email, password);
      setError('Registration successful. Please log in.');
      setActiveTab('login');
      setPassword('');
      setConfirmPassword('');
    } catch (err) {
      setError(err.message || 'Registration failed');
    }
  }


  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-gray-100' : 'bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 text-gray-900'} font-sans transition-all duration-300`}>
      <nav className={`p-4 sticky top-0 z-10 backdrop-filter backdrop-blur-lg ${darkMode ? 'bg-gray-900 bg-opacity-40' : 'bg-white bg-opacity-40'} shadow-lg`}>
        <div className="container mx-auto flex justify-between items-center">
          <span className={`text-2xl font-bold ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>SkillMetrics</span>
          <div className="space-x-4 flex items-center">
            <Link to="/">
              <Button variant="ghost" className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors`}>
                Home
              </Button>
            </Link>
            <Button asChild variant="ghost" className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors`}>
              <Link to="/pricing">Pricing</Link>
            </Button>
            <Button variant="ghost" className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors`}>
            <Link to="/support">Support</Link>
              </Button>
            <Button variant="ghost" onClick={toggleDarkMode} className="ml-4">
              {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-indigo-600" />}
            </Button>
          </div>
        </div>
      </nav>

      <main className={`flex-grow flex items-center justify-center p-4 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900' : 'bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100'}`}>
        <Card className={`w-full max-w-md ${darkMode ? 'bg-gray-800 bg-opacity-90 border-gray-700' : 'bg-white bg-opacity-90 border-purple-200'} shadow-xl scale-125`}>
          <CardHeader className="space-y-1">
            <CardTitle className={`text-2xl font-bold text-center ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Welcome to SkillMetrics
            </CardTitle>
            <CardDescription className={`text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Login or create an account to access your personalized skill metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login" className={darkMode ? 'text-red-400 data-[state=active]:bg-gray-700 data-[state=active]:text-white' : 'text-red-600 data-[state=active]:bg-white'}>Login</TabsTrigger>
                <TabsTrigger value="register" className={darkMode ? 'text-purple-400 data-[state=active]:bg-gray-700 data-[state=active]:text-white' : 'text-purple-600 data-[state=active]:bg-white'}>Register</TabsTrigger>
              </TabsList>
              <TabsContent value="login" className="space-y-4">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className={darkMode ? 'text-gray-200' : 'text-gray-700'}>Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="m@example.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-pink-400 focus:border-pink-400' : 'bg-white border-gray-300 text-gray-900 focus:ring-pink-500 focus:border-pink-500'}`} 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className={darkMode ? 'text-gray-200' : 'text-gray-700'}>Password</Label>
                    <Input 
                      id="password" 
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-pink-400 focus:border-pink-400' : 'bg-white border-gray-300 text-gray-900 focus:ring-pink-500 focus:border-pink-500'}`} 
                    />
                  </div>
                  <Button type="submit" className={`w-full ${darkMode ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-white text-white' : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white'} font-semibold`}>
                    Login
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="register" className="space-y-4">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-email" className={darkMode ? 'text-gray-200' : 'text-gray-700'}>Email</Label>
                    <Input 
                      id="register-email" 
                      type="email" 
                      placeholder="m@example.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-purple-400 focus:border-purple-400' : 'bg-white border-gray-300 text-gray-900 focus:ring-purple-500 focus:border-purple-500'}`} 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password" className={darkMode ? 'text-gray-200' : 'text-gray-700'}>Password</Label>
                    <Input 
                      id="register-password" 
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-purple-400 focus:border-purple-400' : 'bg-white border-gray-300 text-gray-900 focus:ring-purple-500 focus:border-purple-500'}`} 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password" className={darkMode ? 'text-gray-200' : 'text-gray-700'}>Confirm Password</Label>
                    <Input 
                      id="confirm-password" 
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className={`${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-purple-400 focus:border-purple-400' : 'bg-white border-gray-300 text-gray-900 focus:ring-purple-500 focus:border-purple-500'}`} 
                    />
                  </div>
                  <Button type="submit" className={`w-full ${darkMode ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white' : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white'} font-semibold`}>
                    Create Account
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
            {error && (
              <div className={`mt-4 p-2 text-center ${darkMode ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800'} rounded`}>
                {error}
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className={`w-full border-t ${darkMode ? 'border-gray-600' : 'border-gray-300'}`} />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className={`px-2 ${darkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-500'}`}>Or continue with</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" className={`w-full ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100'}`}>
                <Github className="mr-2 h-4 w-4" />
                Github
              </Button>
              <Button variant="outline" className={`w-full ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100'}`}>
                <Twitter className="mr-2 h-4 w-4" />
                Twitter
              </Button>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}