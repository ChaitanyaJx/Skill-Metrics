import React, { useContext } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { User, Settings, LogOut, FileText } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '/src/api.cjs';
import { DarkModeContext } from '/src/DarkModeContext';

export const ProfileIcon = () => {
  const navigate = useNavigate();
  const { darkMode } = useContext(DarkModeContext);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
      // You could add a toast notification here for error feedback
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={`${darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'} transition-colors`}>
          <User className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}>
        <DropdownMenuItem className={darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}>
          <Link to="/profile" className="flex items-center w-full">
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className={darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}>
          <Link to="/profile/contribute" className="flex items-center w-full">
            <FileText className="mr-2 h-4 w-4" />
            <span>Contribute</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className={darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}>
          <Link to="/profile/settings" className="flex items-center w-full">
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem 
          className={darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}
          onSelect={handleLogout}
        >
          <div className="flex items-center w-full">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Logout</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};