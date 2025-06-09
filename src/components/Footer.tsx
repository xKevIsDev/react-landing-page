import React from 'react';
import { Bolt, Twitter, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface text-textSecondary py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
            <Bolt size={28} className="text-primary" />
            <span className="ml-2 text-lg font-bold text-text">Bolt Landing</span>
          </div>
          <p className="text-sm">&copy; 2025 Bolt. All rights reserved.</p>
        </div>
        <div className="flex flex-col items-start md:items-center">
          <h4 className="text-text font-semibold mb-4">Quick Links</h4>
          <nav className="flex flex-col space-y-2">
            <a href="#features" className="hover:text-primary transition-colors duration-300">Features</a>
            <a href="#pricing" className="hover:text-primary transition-colors duration-300">Pricing</a>
            <a href="#contact" className="hover:text-primary transition-colors duration-300">Contact</a>
          </nav>
        </div>
        <div className="flex flex-col items-start md:items-end">
          <h4 className="text-text font-semibold mb-4">Connect</h4>
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors duration-300"><Twitter size={24} /></a>
            <a href="#" aria-label="Github" className="hover:text-primary transition-colors duration-300"><Github size={24} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors duration-300"><Linkedin size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
