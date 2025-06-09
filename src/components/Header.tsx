import React from 'react';
import { Bolt } from 'lucide-react'; // Using Bolt icon for logo

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface bg-opacity-90 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Bolt size={32} className="text-primary" />
          <span className="ml-2 text-xl font-bold text-text">Bolt Landing</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="text-textSecondary hover:text-primary transition-colors duration-300">Features</a>
          <a href="#pricing" className="text-textSecondary hover:text-primary transition-colors duration-300">Pricing</a>
          <a href="#contact" className="text-textSecondary hover:text-primary transition-colors duration-300">Contact</a>
        </nav>
        <a href="#signup" className="px-6 py-2 bg-primary text-text font-semibold rounded-xl hover:bg-opacity-90 transition-colors duration-300">Sign Up</a>
      </div>
    </header>
  );
};

export default Header;
