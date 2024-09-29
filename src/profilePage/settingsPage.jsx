'use client'

import React, { useState, useContext } from 'react'
import { DarkModeContext } from '/src/DarkModeContext'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { ChevronDown, ChevronRight, Sun, Moon, User, Bell, Lock, Upload, Globe, CreditCard, HelpCircle } from "lucide-react"
import { Link } from "react-router-dom"

export default function SettingsPage() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
  const [profileImage, setProfileImage] = useState(null)

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfileImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#0c0a1d] text-white' : 'bg-white text-gray-900'} font-sans`}>
      <header className={`p-4 sticky top-0 z-10 ${darkMode ? 'bg-[#0c0a1d]' : 'bg-white'} bg-opacity-90 backdrop-filter backdrop-blur-lg`}>
        <div className="container mx-auto flex justify-between items-center">
          <span className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
            SkillMetrics
          </span>
          <nav className="hidden md:flex space-x-6">
            <NavButton to="/home" label="Home" />
            <NavButton to="/pricing" label="Pricing" />
            <NavButton to="/resources" label="Resources" />
            <NavButton to="/support" label="Support" />
            <NavButton to="/settings" label="Settings" active />
          </nav>
          <div className="flex space-x-2 items-center">
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

      <main className="container mx-auto px-4 py-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
          Account Settings
        </h1>
        <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-12 max-w-2xl mx-auto text-center`}>
          Customize your SkillMetrics experience
        </p>

        <Card className={`w-full max-w-4xl mx-auto ${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-100'}`}>
          <CardHeader>
            <CardTitle className={`text-3xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Profile Settings
            </CardTitle>
            <CardDescription className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Manage your account information and preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="flex items-center space-x-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src={profileImage || undefined} alt="Profile" />
                <AvatarFallback>{profileImage ? '' : 'SM'}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Profile Picture</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Upload a new profile picture</p>
                <Label htmlFor="picture" className="cursor-pointer">
                  <div className={`mt-2 flex items-center space-x-2 px-4 py-2 rounded-md ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-200'}`}>
                    <Upload className="h-5 w-5" />
                    <span>Choose file</span>
                  </div>
                  <Input id="picture" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                </Label>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className={`text-2xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullname" className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Full Name</Label>
                  <Input id="fullname" placeholder="John Doe" className={`${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'}`} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className={`${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'}`} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio" className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Bio</Label>
                <textarea id="bio" placeholder="Tell us about yourself" className={`w-full min-h-[100px] rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'}`} />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className={`text-2xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Notification Preferences</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="email-notifications" className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Email Notifications</Label>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Receive email updates about your account</p>
                  </div>
                  <Switch id="email-notifications" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="push-notifications" className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Push Notifications</Label>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Receive push notifications on your devices</p>
                  </div>
                  <Switch id="push-notifications" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className={`text-2xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Security</h3>
              <div className="space-y-2">
                <Label htmlFor="current-password" className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Current Password</Label>
                <Input id="current-password" type="password" className={`${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'}`} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password" className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>New Password</Label>
                <Input id="new-password" type="password" className={`${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'}`} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password" className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Confirm New Password</Label>
                <Input id="confirm-password" type="password" className={`${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'}`} />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className={`text-2xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Additional Settings</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="language" className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Language</Label>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Choose your preferred language</p>
                  </div>
                  <select id="language" className={`rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'}`}>
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="timezone" className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Timezone</Label>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Set your local timezone</p>
                  </div>
                  <select id="timezone" className={`rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'}`}>
                    <option>UTC</option>
                    <option>EST</option>
                    <option>PST</option>
                  </select>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className={`w-full ${darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'} text-white`}>
              Save Changes
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </CardFooter>
        </Card>
      </main>
      
      <Footer />
    </div>
  )
}

function NavButton({ to, label, active = false }) {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <Button asChild variant="ghost" className={`text-sm font-medium transition-colors ${darkMode ? 'hover:text-purple-400' : 'hover:text-purple-600'} ${active ? (darkMode ? 'text-purple-400 border-b-2 border-purple-400' : 'text-purple-600 border-b-2 border-purple-600') : (darkMode ? 'text-gray-300' : 'text-gray-600')}`}>
      <Link to={to}>{label}</Link>
    </Button>
  )
}

function Footer() {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <footer className={darkMode ? 'bg-gray-900' : 'bg-gray-100'}>
      <div className="container mx-auto px-4 py-8 flex flex-wrap justify-between items-center">
        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          © 2024 SkillMetrics. All rights reserved.
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <FooterLink href="#" label="Privacy Policy" />
          <FooterLink href="#" label="Terms of Service" />
          <FooterLink href="#" label="Contact Us" />
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, label }) {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <a href={href} className={`text-sm ${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'} transition-colors`}>
      {label}
    </a>
  )
}