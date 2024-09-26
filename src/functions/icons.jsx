import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '/src/api.cjs'; // Import the logout function from api.js

export const ProfileIcon = ({ darkMode }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout(); // This will remove the token from localStorage
      navigate('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error('Logout failed:', error);
      // Optionally, you can show an error message to the user here
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={`${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'} transition-colors`}>
          <User className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}>
        <DropdownMenuItem className={darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}>
          <Link to="/profile">
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className={darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}>
          <Link to="/profile/contribute">
            <span>Contribute</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className={darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}>
          <Link to="/profile/settings">
            <span>Settings</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem 
          className={darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}
          onSelect={handleLogout} // Use onSelect instead of onClick for DropdownMenuItem
        >
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};