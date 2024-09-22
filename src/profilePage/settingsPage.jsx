import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { ChevronRight, Sun, Moon, User, Bell, Lock, Upload } from "lucide-react"
import { Link } from "react-router-dom"

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [profileImage, setProfileImage] = useState(null)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfileImage(reader.result)
      }
      reader.readAsDataURL(file)
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
                <Link to="/home">
                Home
                </Link>
              </Button>
            </Link>
            <Button variant="ghost" className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors`}>
              <Link to="/profile">
              Dashboard
              </Link>
            </Button>
            <Button variant="ghost" onClick={toggleDarkMode} className="ml-4">
              {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-indigo-600" />}
            </Button>
          </div>
        </div>
      </nav>

      <main className={`flex-grow flex items-center justify-center p-4 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900' : 'bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100'}`}>
        <Card className={`w-full max-w-4xl ${darkMode ? 'bg-gray-800 bg-opacity-90 border-gray-700' : 'bg-white bg-opacity-90 border-purple-200'} shadow-xl`}>
          <CardHeader className="space-y-1">
            <CardTitle className={`text-3xl font-bold text-center ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Account Settings
            </CardTitle>
            <CardDescription className={`text-center text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Customize your SkillMetrics experience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="profile" className={darkMode ? 'text-red-400 data-[state=active]:bg-gray-700 data-[state=active]:text-white' : 'text-red-600 data-[state=active]:bg-white'}>Profile</TabsTrigger>
                <TabsTrigger value="notifications" className={darkMode ? 'text-red-400 data-[state=active]:bg-gray-700 data-[state=active]:text-white' : 'text-red-600 data-[state=active]:bg-white'}>Notifications</TabsTrigger>
                <TabsTrigger value="security" className={darkMode ? 'text-purple-400 data-[state=active]:bg-gray-700 data-[state=active]:text-white' : 'text-purple-600 data-[state=active]:bg-white'}>Security</TabsTrigger>
              </TabsList>
              <TabsContent value="profile" className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={profileImage} alt="Profile" />
                    <AvatarFallback>{profileImage ? '' : 'SM'}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className={`text-xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Profile Picture</h3>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Upload a new profile picture</p>
                    <Label htmlFor="picture" className="cursor-pointer">
                      <div className={`mt-2 flex items-center space-x-2 px-4 py-2 rounded-md ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}>
                        <Upload className="h-5 w-5" />
                        <span>Choose file</span>
                      </div>
                      <Input id="picture" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                    </Label>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fullname" className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Full Name</Label>
                  <Input id="fullname" placeholder="John Doe" className={`${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-pink-400 focus:border-pink-400' : 'bg-white border-gray-300 text-gray-900 focus:ring-pink-500 focus:border-pink-500'}`} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio" className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Bio</Label>
                  <textarea id="bio" placeholder="Tell us about yourself" className={`w-full min-h-[100px] rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-pink-400 focus:border-pink-400' : 'bg-white border-gray-300 text-gray-900 focus:ring-pink-500 focus:border-pink-500'}`} />
                </div>
              </TabsContent>
              <TabsContent value="notifications" className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className={`text-xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Email Notifications</h3>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Receive email updates about your account</p>
                  </div>
                  <Switch />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notification-frequency" className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Notification Frequency</Label>
                  <Slider defaultValue={[50]} max={100} step={25} className={`${darkMode ? 'text-pink-400' : 'text-pink-600'}`} />
                </div>
              </TabsContent>
              <TabsContent value="security" className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="current-password" className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Current Password</Label>
                  <Input id="current-password" type="password" className={`${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-indigo-400 focus:border-indigo-400' : 'bg-white border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500'}`} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password" className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>New Password</Label>
                  <Input id="new-password" type="password" className={`${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-indigo-400 focus:border-indigo-400' : 'bg-white border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500'}`} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Confirm New Password</Label>
                  <Input id="confirm-password" type="password" className={`${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-indigo-400 focus:border-indigo-400' : 'bg-white border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500'}`} />
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <Button className={`w-full text-lg ${darkMode ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white' : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white'} font-semibold`}>
              Save Changes
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}