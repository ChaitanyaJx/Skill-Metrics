import React, { useState, useContext, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Search, BookOpen, BarChart, Award, FileText, Users, Moon, Sun, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from './DarkModeContext';
import { getImages } from './APIs/ImageAPI';

export default function App() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [heroImage, setHeroImage] = useState(null);
  const [testimonialImages, setTestimonialImages] = useState([null, null, null]);

  useEffect(() => {
    async function loadImages() {
      const heroImg = await getImages('office workspace', 500, 300);
      setHeroImage(heroImg);


      const testimonialImgs = await Promise.all([
        getImages('professional headshot', 40, 40),
        getImages('professional headshot', 40, 40),
        getImages('professional headshot', 40, 40),
      ]);
      setTestimonialImages(testimonialImgs);
    }

    loadImages();
  }, []);



  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 text-gray-100' : 'bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 text-gray-900'} font-sans transition-all duration-300`}>
      <header className={`p-4 sticky top-0 z-10 backdrop-filter backdrop-blur-lg ${darkMode ? 'bg-gray-900 bg-opacity-40' : 'bg-white bg-opacity-40'} shadow-lg`}>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <span className={`text-3xl font-bold ${darkMode ? 'text-pink-400' : 'text-pink-600'} mb-4 md:mb-0`}>
            SkillMetrics
          </span>
          <nav className="space-x-2 md:space-x-4 flex flex-wrap justify-center items-center">
            <NavButton to="/" label="Home" darkMode={darkMode} />
            <NavButton to="/pricing" label="Pricing" darkMode={darkMode} />
            <NavButton to="/resources" label="Resources" darkMode={darkMode} />
            <NavButton to="/support" label="Support" darkMode={darkMode} />
            <NavButton to="/login" label="Login" darkMode={darkMode} />
            <Button variant="ghost" onClick={toggleDarkMode} className="ml-2 md:ml-4">
              {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-indigo-600" />}
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto mt-8 px-4">
        <div className={`rounded-lg shadow-xl p-6 ${darkMode ? 'bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-md' : 'bg-white bg-opacity-70 backdrop-filter backdrop-blur'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className={`text-4xl md:text-5xl font-extrabold mb-6 ${darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300' : 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500'}`}>
                Elevate Your Career with SkillMetrics
              </h1>
              <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Your AI-powered platform for personalized job matching and skill development
              </p>
              <Button asChild size="lg" className={`text-lg font-semibold ${darkMode ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white' : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white'}`}>
                <Link to="/login" className="flex items-center">
                  Get Started <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="hidden md:block">
              {heroImage ? (
                <img src={heroImage} alt="SkillMetrics Dashboard Preview" className="rounded-lg shadow-2xl w-full h-auto" />
              ) : (
                <div className="rounded-lg shadow-2xl w-full h-[300px] bg-gray-300 animate-pulse flex items-center justify-center">
                  <span className={`text-lg ${darkMode ? 'text-gray-600' : 'text-gray-500'}`}>Loading image...</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <FeatureCard
              icon={<Search className={`w-8 h-8 ${darkMode ? 'text-pink-400' : 'text-pink-500'}`} />}
              title="AI-Powered Job Matching"
              description="Get personalized job recommendations based on your skills and preferences"
              darkMode={darkMode}
            />
            <FeatureCard
              icon={<BookOpen className={`w-8 h-8 ${darkMode ? 'text-purple-400' : 'text-purple-500'}`} />}
              title="Skill Gap Analysis"
              description="Identify areas for improvement and get tailored course recommendations"
              darkMode={darkMode}
            />
            <FeatureCard
              icon={<BarChart className={`w-8 h-8 ${darkMode ? 'text-indigo-400' : 'text-indigo-500'}`} />}
              title="Job Market Insights"
              description="Access real-time data on trending jobs and skills in demand"
              darkMode={darkMode}
            />
            <FeatureCard
              icon={<Award className={`w-8 h-8 ${darkMode ? 'text-yellow-400' : 'text-yellow-500'}`} />}
              title="Skills Verification"
              description="Earn badges and certifications to showcase your competencies"
              darkMode={darkMode}
            />
            <FeatureCard
              icon={<FileText className={`w-8 h-8 ${darkMode ? 'text-green-400' : 'text-green-500'}`} />}
              title="Resume Wizard"
              description="Build a professional resume automatically based on your profile"
              darkMode={darkMode}
            />
            <FeatureCard
              icon={<Users className={`w-8 h-8 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />}
              title="Community Support"
              description="Connect with peers, mentors, and attend virtual career events"
              darkMode={darkMode}
            />
          </div>
        </div>

        <TestimonialSection darkMode={darkMode} testimonialImages={testimonialImages} />
      </main>
      
      <Footer darkMode={darkMode} />
    </div>
  );
}

function NavButton({ to, label, darkMode }) {
  return (
    <Button asChild variant="ghost" className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors`}>
      <Link to={to}>{label}</Link>
    </Button>
  );
}

function FeatureCard({ icon, title, description, darkMode }) {
  return (
    <div className={`rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${darkMode ? 'bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm border border-gray-700 hover:border-pink-500' : 'bg-white bg-opacity-60 backdrop-filter backdrop-blur-sm border border-purple-200 hover:border-purple-400'}`}>
      <div className="flex items-center mb-4">
        {icon}
        <h3 className={`text-xl font-semibold ml-3 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{title}</h3>
      </div>
      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>{description}</p>
    </div>
  );
}

function TestimonialSection({ darkMode, testimonialImages }) {
  return (
    <section className={`mt-16 p-8 rounded-lg ${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-white bg-opacity-60'}`}>
      <h2 className={`text-3xl font-bold mb-8 text-center ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TestimonialCard
          name="Alex Johnson"
          role="Software Engineer"
          content="SkillMetrics helped me land my dream job by identifying the exact skills I needed to improve."
          darkMode={darkMode}
          image={testimonialImages[0]}
        />
        <TestimonialCard
          name="Samantha Lee"
          role="Data Analyst"
          content="The job market insights feature gave me a competitive edge in my job search. Highly recommended!"
          darkMode={darkMode}
          image={testimonialImages[1]}
        />
        <TestimonialCard
          name="Michael Chen"
          role="UX Designer"
          content="The AI-powered job matching is spot-on. I found opportunities I wouldn't have discovered otherwise."
          darkMode={darkMode}
          image={testimonialImages[2]}
        />
      </div>
    </section>
  );
}

function TestimonialCard({ name, role, content, darkMode, image }) {
  return (
    <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-700 bg-opacity-50' : 'bg-gray-100 bg-opacity-50'}`}>
      <p className={`mb-4 italic ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>"{content}"</p>
      <div className="flex items-center">
        {image ? (
          <img src={image} alt={name} className="w-10 h-10 rounded-full mr-3 object-cover" />
        ) : (
          <div className="w-10 h-10 rounded-full mr-3 bg-gray-300 flex items-center justify-center">
            <span className={`text-sm ${darkMode ? 'text-gray-600' : 'text-gray-500'}`}>{name[0]}</span>
          </div>
        )}
        <div>
          <p className={`font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{name}</p>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{role}</p>
        </div>
      </div>
    </div>
  );
}
function Footer(darkMode) {
  return (
    <footer className={`mt-16 py-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          © 2024 SkillMetrics. All rights reserved.
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <FooterLink href="#" label="Privacy Policy" darkMode={darkMode} />
          <FooterLink href="#" label="Terms of Service" darkMode={darkMode} />
          <FooterLink href="#" label="Contact Us" darkMode={darkMode} />
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label, darkMode }) {
  return (
    <a href={href} className={`text-sm ${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'} transition-colors`}>
      {label}
    </a>
  );
}