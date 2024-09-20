import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Github, Twitter, Sun, Moon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const App = () => {
  // Set the default theme to 'light'
  const [theme, setTheme] = useState('light');

  // Check for the saved theme in local storage when the app loads
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Toggle between light and dark theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save preference in localStorage
  };

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'} flex flex-col`}>
      <nav className={`p-4 sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-80 shadow-md ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-2xl font-bold text-pink-500">SkillMetrics</span>
          <div className="space-x-4 flex items-center">
            <Button variant="ghost" className={`transition-colors ${theme === 'light' ? 'text-gray-600 hover:text-pink-500' : 'text-gray-300 hover:text-pink-400'}`}>Home</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={`transition-colors ${theme === 'light' ? 'text-gray-600 hover:text-pink-500' : 'text-gray-300 hover:text-pink-400'}`}>Pricing</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>For Individuals</DropdownMenuItem>
                <DropdownMenuItem>For Colleges</DropdownMenuItem>
                <DropdownMenuItem>For Businesses</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" className={`transition-colors ${theme === 'light' ? 'text-gray-600 hover:text-pink-500' : 'text-gray-300 hover:text-pink-400'}`}>About</Button>
            <Button variant="ghost" className={`transition-colors ${theme === 'light' ? 'text-gray-600 hover:text-pink-500' : 'text-gray-300 hover:text-pink-400'}`}>Contact</Button>
            {/* Theme Toggle Button */}
            <Button variant="ghost" onClick={toggleTheme} className={`transition-colors ${theme === 'light' ? 'text-gray-600 hover:text-pink-500' : 'text-gray-300 hover:text-pink-400'}`}>
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center p-4 bg-gradient-to-r from-purple-100 to-blue-100">
        <Card className={`w-full max-w-md border-gray-200 shadow-lg ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
          <CardHeader className="space-y-1">
            <CardTitle className={`text-2xl font-bold text-center bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text`}>
              Welcome to SkillMetrics
            </CardTitle>
            <CardDescription className={`text-center ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
              Login or create an account to access your personalized skill metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login" className="text-pink-500">Login</TabsTrigger>
                <TabsTrigger value="register" className="text-purple-500">Register</TabsTrigger>
              </TabsList>
              <TabsContent value="login" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className={theme === 'light' ? 'text-gray-600' : 'text-gray-300'}>Email</Label>
                  <Input id="email" type="email" placeholder="m@example.com" className={`bg-gray-50 border-gray-300 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} focus:ring-pink-400 focus:border-pink-400`} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className={theme === 'light' ? 'text-gray-600' : 'text-gray-300'}>Password</Label>
                  <Input id="password" type="password" className={`bg-gray-50 border-gray-300 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} focus:ring-pink-400 focus:border-pink-400`} />
                </div>
                <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold">
                  Login
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </TabsContent>
              <TabsContent value="register" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="register-email" className={theme === 'light' ? 'text-gray-600' : 'text-gray-300'}>Email</Label>
                  <Input id="register-email" type="email" placeholder="m@example.com" className={`bg-gray-50 border-gray-300 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} focus:ring-purple-400 focus:border-purple-400`} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-password" className={theme === 'light' ? 'text-gray-600' : 'text-gray-300'}>Password</Label>
                  <Input id="register-password" type="password" className={`bg-gray-50 border-gray-300 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} focus:ring-purple-400 focus:border-purple-400`} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className={theme === 'light' ? 'text-gray-600' : 'text-gray-300'}>Confirm Password</Label>
                  <Input id="confirm-password" type="password" className={`bg-gray-50 border-gray-300 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} focus:ring-purple-400 focus:border-purple-400`} />
                </div>
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold">
                  Create Account
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className={`px-2 ${theme === 'light' ? 'bg-white text-gray-500' : 'bg-gray-900 text-gray-400'}`}>Or continue with</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" className={`w-full border-gray-300 ${theme === 'light' ? 'bg-white text-gray-700 hover:bg-gray-100' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
                <Github className="mr-2 h-4 w-4" />
                Github
              </Button>
              <Button variant="outline" className={`w-full border-gray-300 ${theme === 'light' ? 'bg-white text-gray-700 hover:bg-gray-100' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
                <Twitter className="mr-2 h-4 w-4" />
                Twitter
              </Button>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
};

export default App;
