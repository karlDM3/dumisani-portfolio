import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";
import MatrixBackground from "@/components/ui/matrix-background";
import AudioPlayer from "@/components/ui/audio-player";
import { useState } from "react";

export default function Home() {
  const [audioEnabled, setAudioEnabled] = useState(true);

  return (
    <div className="bg-[var(--dark)] text-gray-200 font-sans min-h-screen relative">
      <MatrixBackground />
      <AudioPlayer isEnabled={audioEnabled} />
      <Header audioEnabled={audioEnabled} onAudioToggle={() => setAudioEnabled(!audioEnabled)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
