import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Moon, Sun, User, GraduationCap, Building, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProfileIcon } from './functions/icons';

export default function PricingPage() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-gray-100' : 'bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 text-gray-900'} font-sans transition-all duration-300`}>
      <header className={`p-4 sticky top-0 z-10 backdrop-filter backdrop-blur-lg ${darkMode ? 'bg-gray-900 bg-opacity-40' : 'bg-white bg-opacity-40'} shadow-lg`}>
        <div className="container mx-auto flex justify-between items-center">
          <span className={`text-2xl font-bold ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>
            SkillMetrics
          </span>
          <nav className="space-x-4 flex items-center">
            <Button asChild variant="ghost" className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors`}>
              <Link to="/home">Home</Link>
            </Button>
            <Button asChild variant="ghost" className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors`}>
              <Link to="/pricing">Pricing</Link>
            </Button>
            <Button asChild variant="ghost" className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors`}>
              <Link to="/resources">Resources</Link>
            </Button>
            <Button asChild variant="ghost" className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors`}>
              <Link to="/support">Support</Link>
            </Button>
            <ProfileIcon darkMode={darkMode} />
            <Button variant="ghost" onClick={toggleDarkMode} className="ml-4">
              {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-indigo-600" />}
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto mt-8 px-4">
        <div className={`rounded-lg shadow-xl p-6 ${darkMode ? 'bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-md' : 'bg-white bg-opacity-70 backdrop-filter backdrop-blur'}`}>
          <h1 className={`text-5xl font-extrabold mb-6 text-center ${darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300' : 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500'}`}>
            Choose Your Plan
          </h1>
          <p className={`text-xl mb-12 text-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Select the perfect plan to elevate your career with SkillMetrics
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              icon={<User className="w-12 h-12" />}
              title="Personal"
              price="Free"
              description="Perfect for individual job seekers"
              features={[
                "Unlimited access to all features contributed by community",
                "AI-powered job matching",
                "Basic skill gap analysis",
                "Personalized job market insights",
                "Standard resume builder"
              ]}
              ctaText="Get Started"
              ctaLink="/signup"
              darkMode={darkMode}
            />
            <PricingCard
              icon={<GraduationCap className="w-12 h-12" />}
              title="College/Universities"
              price="Donations and Affiliates"
              description="Ideal for educational institutions"
              features={[
                "All Personal features",
                "Bulk student accounts",
                "Advanced analytics dashboard",
                "Integration with LMS",
                "Career fair organization tools"
              ]}
              ctaText="Contact Sales"
              ctaLink="/contact"
              darkMode={darkMode}
            />
            <PricingCard
              icon={<Building className="w-12 h-12" />}
              title="Corporates"
              price="Custom"
              description="Tailored for businesses of all sizes"
              features={[
                "All College/Universities features",
                "Custom branding",
                "API access",
                "Dedicated account manager",
                "Employee skill mapping",
                "Talent pool analytics"
              ]}
              ctaText="Get a Quote"
              ctaLink="/quote"
              darkMode={darkMode}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

function PricingCard({ icon, title, price, description, features, ctaText, ctaLink, darkMode }) {
  return (
    <Card 
      className={`flex flex-col h-full cursor-pointer ${
        darkMode
          ? 'bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm border-gray-700'
          : 'bg-white bg-opacity-60 backdrop-filter backdrop-blur-sm border-purple-200'
      } transition-all duration-300 hover:shadow-xl`}
    >
      <CardHeader>
        <div className="flex justify-center mb-4">
          {React.cloneElement(icon, {
            className: `w-16 h-16 ${darkMode ? 'text-pink-400' : 'text-pink-600'}`,
          })}
        </div>
        <CardTitle className={`text-2xl font-bold text-center ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{title}</CardTitle>
        <CardDescription className={`text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className={`text-3xl font-bold text-center mb-6 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{price}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className={`w-5 h-5 mr-2 ${darkMode ? 'text-green-400' : 'text-green-500'}`} />
              <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className={`w-full ${
          darkMode
            ? 'bg-pink-500 text-white hover:bg-pink-600'
            : 'bg-purple-600 text-white hover:bg-purple-700'
        }`}>
          <Link to={ctaLink}>{ctaText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

