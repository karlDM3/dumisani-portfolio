import { useState, useEffect } from 'react';
import { Switch } from '@/components/ui/switch';

interface HeaderProps {
  audioEnabled: boolean;
  onAudioToggle: () => void;
}

export default function Header({ audioEnabled, onAudioToggle }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 80; // Adjust for header height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--dark-secondary)] bg-opacity-90 shadow-lg backdrop-filter backdrop-blur-sm border-b border-[var(--neon-green)]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="font-[var(--font-code)] text-[var(--neon-green)] text-xl">
              D<span className="animate-ping">_</span>Mathabathe
            </span>
          </div>
          
          <div className="flex items-center">
            {/* Sound Toggle */}
            <div className="flex items-center mr-8">
              <span className="mr-2 text-xs text-gray-400">AUDIO</span>
              <Switch 
                checked={audioEnabled} 
                onCheckedChange={onAudioToggle}
                className="data-[state=checked]:bg-[rgba(0,255,65,0.3)]"
              />
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="font-[var(--font-code)] text-gray-300 hover:text-[var(--neon-green)] px-3 py-2 transition-colors uppercase hover:text-shadow-glow"
                >
                  {section}
                </button>
              ))}
            </div>
            
            {/* Mobile Nav Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-[var(--neon-green)]"
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-[var(--dark-tertiary)] border-t border-gray-700 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="block w-full text-left font-[var(--font-code)] text-gray-300 hover:text-[var(--neon-green)] px-3 py-2 transition-colors uppercase hover:text-shadow-glow"
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
