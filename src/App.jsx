import React, { useState, useContext, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Search, BookOpen, BarChart, Award, FileText, Users, Moon, Sun, ChevronRight, ChevronDown } from 'lucide-react';
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
    <div className={`min-h-full h-full ${darkMode ? 'bg-[#0c0a1d] text-white' : 'bg-white text-gray-900'} font-sans`}>
      <header className={`p-4 sticky top-0 z-10 ${darkMode ? 'bg-[#0c0a1d]' : 'bg-white'} bg-opacity-90 backdrop-filter backdrop-blur-lg`}>
        <div className="container mx-auto flex justify-between items-center">
          <span className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>SkillMetrics</span>
          <nav className="hidden md:flex space-x-6">
            <NavButton to="/" label="Home" active />
            <NavButton to="/pricing" label="Pricing" />
            <NavButton to="/resources" label="Resources" />
            <NavButton to="/support" label="Support" />
            <NavButton to="/login" label="Login" />
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
          Unleash the true power of<br />AI and Career Development
        </h1>
        <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-12 max-w-2xl mx-auto text-center`}>
          Your AI-powered platform for personalized job matching and skill development
        </p>
        <div className="flex justify-center space-x-4 mb-20">
          <Button asChild size="lg" className={`${darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'} text-white px-8 py-3 rounded-full text-lg`}>
            <Link to="/login" className="flex items-center">
              Join Us! 
            </Link>
          </Button>
          <Button variant="outline" size="lg" className={`${darkMode ? 'text-black border-white hover:bg-white hover:text-[#0c0a1d] hover:border-[#0c0a1d]' : 'text-purple-600 border-purple-600 hover:bg-purple-600 hover:text-white'} px-8 py-3 rounded-full text-lg`}>
            <Link to="/support" className="flex items-center">
            Talk to Us 👋
            </Link>
          </Button>
        </div>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Search className={`w-8 h-8 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />}
              title="AI-Powered Job Matching"
              description="Get personalized job recommendations based on your skills and preferences"
            />
            <FeatureCard
              icon={<BookOpen className={`w-8 h-8 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />}
              title="Skill Gap Analysis"
              description="Identify areas for improvement and get tailored course recommendations"
            />
            <FeatureCard
              icon={<BarChart className={`w-8 h-8 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />}
              title="Job Market Insights"
              description="Access real-time data on trending jobs and skills in demand"
            />
            <FeatureCard
              icon={<Award className={`w-8 h-8 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />}
              title="Skills Verification"
              description="Earn badges and certifications to showcase your competencies"
            />
            <FeatureCard
              icon={<FileText className={`w-8 h-8 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />}
              title="Resume Wizard"
              description="Build a professional resume automatically based on your profile"
            />
            <FeatureCard
              icon={<Users className={`w-8 h-8 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />}
              title="Community Support"
              description="Connect with peers, mentors, and attend virtual career events"
            />
          </div>
        </section>

        <TestimonialSection testimonialImages={testimonialImages} />
      </main>
      
      <Footer />
    </div>
  );
}

function NavButton({ to, label, active = false }) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <Button asChild variant="ghost" className={`text-sm font-medium transition-colors ${darkMode ? 'hover:text-purple-400' : 'hover:text-purple-600'} ${active ? (darkMode ? 'text-purple-400 border-b-2 border-purple-400' : 'text-purple-600 border-b-2 border-purple-600') : (darkMode ? 'text-gray-300' : 'text-gray-600')}`}>
      <Link to={to}>{label}</Link>
    </Button>
  );
}

function FeatureCard({ icon, title, description }) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-100'} rounded-lg p-6 backdrop-filter backdrop-blur-sm`}>
      <div className="flex items-center mb-4">
        {icon}
        <h3 className={`text-xl font-semibold ml-3 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{title}</h3>
      </div>
      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>{description}</p>
    </div>
  );
}

function TestimonialSection({ testimonialImages }) {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold mb-12 text-center">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <TestimonialCard
          name="Alex Johnson"
          role="Software Engineer"
          content="SkillMetrics helped me land my dream job by identifying the exact skills I needed to improve."
          image={testimonialImages[0]}
        />
        <TestimonialCard
          name="Samantha Lee"
          role="Data Analyst"
          content="The job market insights feature gave me a competitive edge in my job search. Highly recommended!"
          image={testimonialImages[1]}
        />
        <TestimonialCard
          name="Michael Chen"
          role="UX Designer"
          content="The AI-powered job matching is spot-on. I found opportunities I wouldn't have discovered otherwise."
          image={testimonialImages[2]}
        />
      </div>
    </section>
  );
}

function TestimonialCard({ name, role, content, image }) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-100'} rounded-lg p-6 backdrop-filter backdrop-blur-sm`}>
      <p className={`mb-4 italic ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>"{content}"</p>
      <div className="flex items-center">
        {image ? (
          <img src={image} alt={name} className="w-10 h-10 rounded-full mr-3 object-cover" />
        ) : (
          <div className={`w-10 h-10 rounded-full mr-3 ${darkMode ? 'bg-gray-600' : 'bg-gray-300'} flex items-center justify-center`}>
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{name[0]}</span>
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

function Footer() {
  const { darkMode } = useContext(DarkModeContext);

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
  );
}

function FooterLink({ href, label }) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <a href={href} className={`text-sm ${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'} transition-colors`}>
      {label}
    </a>
  );
}