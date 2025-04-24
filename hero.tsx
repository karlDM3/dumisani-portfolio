import { Button } from "@/components/ui/button";
import Terminal from "@/components/ui/terminal";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 80; // Adjust for header height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')", 
        backgroundSize: "cover", 
        backgroundPosition: "center" 
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      
      <div className="container relative z-10 px-6 py-16 mx-auto text-center">
        <Terminal title="terminal@dumisani:~" className="max-w-2xl mx-auto">
          <div className="text-[var(--neon-green)] mb-6">
            <p className="text-sm mb-2">$ whoami</p>
            <div className="overflow-hidden">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 border-r-4 border-[var(--neon-green)] animate-[typing_3.5s_steps(40,end),blink_1s_step-end_infinite]" 
                  style={{
                    animation: 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
                    '@keyframes typing': {
                      'from': { width: '0' },
                      'to': { width: '100%' }
                    },
                    '@keyframes blink-caret': {
                      'from, to': { borderColor: 'transparent' },
                      '50%': { borderColor: 'var(--neon-green)' }
                    }
                  }}
              >
                Dumisani Mathabathe
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white opacity-90">Ethical Hacker & Developer</p>
          </div>
          
          <div className="mt-8">
            <p className="text-sm text-gray-400 mb-2">$ cat bio.txt</p>
            <p className="text-gray-300 mb-6">
              I am passionate about coding and ethical hacking, exploring the digital realm to build secure and innovative solutions.
            </p>
            
            <div className="flex justify-center space-x-6 mt-8">
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('contact')}
                className="border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:bg-opacity-10 font-[var(--font-code)]"
              >
                Contact Me
              </Button>
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-[var(--neon-green)] bg-opacity-10 text-[var(--neon-green)] hover:bg-opacity-20 font-[var(--font-code)]"
              >
                View Projects
              </Button>
            </div>
          </div>
        </Terminal>
      </div>
    </section>
  );
}
