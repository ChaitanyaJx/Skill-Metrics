import React from 'react'
import { Button } from "@/components/ui/button"
import { Home, LogIn, HelpCircle } from 'lucide-react'
import { Link } from 'react-router-dom';


export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-blue-100 flex flex-col">
      <header className="bg-white p-4 sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-80 shadow-md">
        <div className="container mx-auto">
          <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
            SkillMetrics
          </span>
        </div>
      </header>

      <main className="flex-grow container mx-auto mt-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Welcome to SkillMetrics! For Checking Pages only!!!</h1>
          <p className="text-gray-600 mb-8">Choose an option to get started:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button asChild variant="outline" className="h-32 text-lg font-semibold">
              <Link to="/home" className="flex flex-col items-center justify-center">
                <Home className="w-8 h-8 mb-2" />
                Home
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-32 text-lg font-semibold">
              <Link to="/login" className="flex flex-col items-center justify-center">
                <LogIn className="w-8 h-8 mb-2" />
                Login
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-32 text-lg font-semibold">
              <Link to="/questions" className="flex flex-col items-center justify-center">
                <HelpCircle className="w-8 h-8 mb-2" />
                Questions
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
