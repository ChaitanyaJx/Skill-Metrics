import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Button } from "@/components/ui/button";
  import { Moon, Sun, User, GraduationCap, Building, Check } from 'lucide-react';
  import { Link } from 'react-router-dom';
export const ProfileIcon = ({ darkMode }) => {
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
          <span>
            <Link to="/profile/contribute">
            Contribute
            </Link>
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem className={darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}>
          <Link to="/profile/settings">
          <span>Settings</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className={darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}>
          <Link to="/login">
            <span>Logout</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};



