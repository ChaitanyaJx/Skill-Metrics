import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Github, Twitter } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <nav className="bg-white p-4 sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-80 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-2xl font-bold text-pink-500">SkillMetrics</span>
          <div className="space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-pink-500 transition-colors">Home</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-gray-600 hover:text-pink-500 transition-colors">Pricing</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <span>For Individuals</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>For Colleges</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>For Businesses</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" className="text-gray-600 hover:text-pink-500 transition-colors">About</Button>
            <Button variant="ghost" className="text-gray-600 hover:text-pink-500 transition-colors">Contact</Button>
          </div>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center p-4 bg-gradient-to-r from-purple-100 to-blue-100">
        <Card className="w-full max-w-md bg-white border-gray-200 shadow-lg scale-125">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
              Welcome to SkillMetrics
            </CardTitle>
            <CardDescription className="text-center text-gray-500">
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
                  <Label htmlFor="email" className="text-gray-600">Email</Label>
                  <Input id="email" type="email" placeholder="m@example.com" className="bg-gray-50 border-gray-300 text-gray-700 focus:ring-pink-400 focus:border-pink-400" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-600">Password</Label>
                  <Input id="password" type="password" className="bg-gray-50 border-gray-300 text-gray-700 focus:ring-pink-400 focus:border-pink-400" />
                </div>
                <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold">
                  Login
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </TabsContent>
              <TabsContent value="register" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="register-email" className="text-gray-600">Email</Label>
                  <Input id="register-email" type="email" placeholder="m@example.com" className="bg-gray-50 border-gray-300 text-gray-700 focus:ring-purple-400 focus:border-purple-400" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-password" className="text-gray-600">Password</Label>
                  <Input id="register-password" type="password" className="bg-gray-50 border-gray-300 text-gray-700 focus:ring-purple-400 focus:border-purple-400" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className="text-gray-600">Confirm Password</Label>
                  <Input id="confirm-password" type="password" className="bg-gray-50 border-gray-300 text-gray-700 focus:ring-purple-400 focus:border-purple-400" />
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
                <span className="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" className="w-full bg-white border-gray-300 text-gray-700 hover:bg-gray-100">
                <Github className="mr-2 h-4 w-4" />
                Github
              </Button>
              <Button variant="outline" className="w-full bg-white border-gray-300 text-gray-700 hover:bg-gray-100">
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

export default LoginPage;
