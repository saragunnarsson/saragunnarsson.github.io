import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl" style={{ fontWeight: 600 }}>
            SKANDI
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#work" className="text-gray-700 hover:text-gray-900 transition-colors">
              Work
            </a>
            <a 
              href="#contact" 
              className="px-5 py-2.5 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              Start a Conversation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-700 hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 space-y-4">
            <a 
              href="#work" 
              className="block text-gray-700 hover:text-gray-900 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </a>
            <a 
              href="#contact" 
              className="block w-full px-5 py-2.5 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Start a Conversation
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}