import Terminal from "@/components/ui/terminal";
import SkillBar from "@/components/ui/skill-bar";
import { SKILLS, CERTIFICATIONS } from "@/lib/constants";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[var(--dark)]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-[var(--font-heading)] text-center mb-12">
          <span className="text-white">MY <span className="text-[var(--neon-green)]">SKILLS</span></span>
        </h2>
        
        <Terminal title="skills@dumisani:~" command="./analyze_skills.sh" className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
            ))}
          </div>
          
          <div className="mt-8">
            <p className="text-sm text-gray-400 mb-2">$ cat certifications.txt</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {CERTIFICATIONS.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>
        </Terminal>
      </div>
    </section>
  );
}
