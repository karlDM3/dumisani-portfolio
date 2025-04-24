import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Terminal from "@/components/ui/terminal";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";
import profilePic from "../../assets/profile-pic.jpg";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[var(--dark-secondary)]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold font-[var(--font-heading)] text-center mb-12">
            <span className="text-white">ABOUT <span className="text-[var(--neon-green)]">ME</span></span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-2/5">
              <Terminal title="profile@dumisani:~" className="h-full">
                <div className="w-40 h-40 rounded-full mx-auto overflow-hidden border-2 border-[var(--neon-green)]" 
                     style={{ boxShadow: '0 0 15px rgba(0, 255, 65, 0.5)' }}>
                  <img 
                    src={profilePic} 
                    alt="Dumisani Mathabathe" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="mt-6">
                  <p className="text-sm text-gray-400">$ cat contact_info.json</p>
                  <pre className="text-[var(--neon-green)] text-sm mt-2 text-left">
{`{
  "name": "${CONTACT_INFO.name}",
  "phone": "${CONTACT_INFO.phone}",
  "email": "${CONTACT_INFO.email}",
  "github": "${SOCIAL_LINKS.github.replace('https://', '')}"
}`}
                  </pre>
                </div>
              </Terminal>
            </div>
            
            <div className="w-full md:w-3/5">
              <Terminal title="about@dumisani:~" command="./display_about.sh" className="h-full">
                <div className="space-y-4 text-gray-300">
                  <p>
                    I'm a passionate and curious person who loves learning new things. I play chess, solve Rubik's cubes, and spend most of my time exploring the world of technology.
                  </p>
                  <p>
                    I'm a self-taught developer with a growing interest in cybersecurity and ethical hacking. I enjoy building projects, breaking systems (ethically), and learning how to make them better and more secure. When I'm not coding or solving puzzles, you'll probably find me listening to music or reading. Right now, I'm reading Ghost in the Wires by Kevin Mitnick — a true story about one of the world's most famous hackers.
                  </p>
                  <p>
                    I believe in staying curious, creating, and constantly improving. Life is a puzzle, and I'm here to solve it.
                  </p>
                  
                  <div className="pt-4">
                    <div className="inline-flex items-center gap-2 text-sm text-[var(--neon-green)]">
                      <span>$</span>
                      <span className="animate-[blink_1s_infinite]">|</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex gap-4">
                  <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--neon-green)] transition-colors">
                    <FaGithub className="text-2xl" />
                  </a>
                  <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--neon-green)] transition-colors">
                    <FaLinkedin className="text-2xl" />
                  </a>
                  <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--neon-green)] transition-colors">
                    <FaTwitter className="text-2xl" />
                  </a>
                </div>
              </Terminal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
