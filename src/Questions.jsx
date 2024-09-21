import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Code, Clock, BookOpen, User } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Questions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-blue-100 flex flex-col">
      <nav className="bg-white p-4 sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-80 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">Coding Challenge</span>
          <div className="space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-pink-500 transition-colors">Problems</Button>
            <Button variant="ghost" className="text-gray-600 hover:text-pink-500 transition-colors">Resources</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-gray-600 hover:text-pink-500 transition-colors">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>My Contributions</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-4xl bg-white border-gray-200 shadow-lg scale-125">
          <CardHeader className="space-y-1">
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                Nested for Loops
              </CardTitle>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Easy</span>
            </div>
            <CardDescription className="text-gray-500">
              Programming • Time Complexity
            </CardDescription>
            <CardDescription className="text-sm text-gray-400">
              Contributed by: Chaitanya
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description" className="text-pink-500">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Description
                </TabsTrigger>
                <TabsTrigger value="code" className="text-purple-500">
                  <Code className="w-4 h-4 mr-2" />
                  Code
                </TabsTrigger>
                <TabsTrigger value="submission" className="text-blue-500">
                  <Clock className="w-4 h-4 mr-2" />
                  Submission
                </TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="space-y-4">
                <p className="text-gray-700">What is the time, space complexity of following code:</p>
                <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
                  {`int a = 0, b = 0;
for (i = 0; i < N; i++) {
    for (j = 0; j < N; j++) {
        a = a + j;
    }
}
for (k = 0; k < N; k++) {
    b = b + k;
}`}
                </pre>
              </TabsContent>
              <TabsContent value="code" className="space-y-4">
                <p className="text-gray-700">Implement your solution here:</p>
                <textarea
                  className="w-full h-64 p-4 border rounded-md focus:ring-2 focus:ring-pink-500"
                  placeholder="// Write your code here"
                ></textarea>
              </TabsContent>
              <TabsContent value="submission" className="space-y-4">
                <RadioGroup defaultValue="option-1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-1" id="option-1" />
                    <Label htmlFor="option-1">O(N * N) time, O(1) space</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-2" id="option-2" />
                    <Label htmlFor="option-2">O(N) time, O(N) space</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-3" id="option-3" />
                    <Label htmlFor="option-3">O(N * N * N) time, O(1) space</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-4" id="option-4" />
                    <Label htmlFor="option-4">O(N * N) time, O(N) space</Label>
                  </div>
                </RadioGroup>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="text-sm text-gray-500">
              Success Rate: 67.0% • Attempts: 429
            </div>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold">
              Submit
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}

export default Questions;