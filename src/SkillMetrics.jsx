import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, Cpu, Zap, User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const SkillMetrics = () => {
  const roles = [
    { name: "Artificial Intelligence", icon: <Cpu className="h-6 w-6" /> },
    { name: "Computer Science", icon: <Code className="h-6 w-6" /> },
    { name: "Mechanical Engineering", icon: <Zap className="h-6 w-6" /> },
    { name: "Electronics & Communication", icon: <BookOpen className="h-6 w-6" /> },
  ]

  return (
    <div className="min-h-screen w-full flex flex-col bg-white text-gray-900">
      <nav className="bg-white p-4 sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-80 shadow-md w-full">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-xl font-bold text-pink-500">SkillMetrics</span>
          <div className="flex items-center space-x-4">
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
            <Button variant="ghost" className="text-gray-600 hover:text-pink-500 transition-colors p-2" aria-label="User Profile">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      <main className="flex-grow w-full bg-gradient-to-r from-purple-100 to-blue-100 flex flex-col justify-start pt-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
            Skill Metrics
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Find out your skills gaps and find your potential using quality questions and resources. Take the test now!
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <Button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-full transition-all transform hover:scale-105">
            <BookOpen className="mr-2 h-5 w-5" /> Check your skill potential with your Github Profile
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-4 mb-8">
          {roles.map((role, index) => (
            <Card key={index} className="bg-white hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 border-gray-200 shadow-md w-full">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="mb-4 p-4 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full">
                  {React.cloneElement(role.icon, { className: "h-8 w-8 text-white" })}
                </div>
                <h3 className="text-lg font-semibold text-center text-purple-500">{role.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

export default SkillMetrics;