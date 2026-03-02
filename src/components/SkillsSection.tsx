import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Shield, Wrench, Code, Brain } from "lucide-react";

interface Skill {
  name: string;
  level: string;
  percent: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  accentClass: string;
}

const categories: SkillCategory[] = [
  {
    title: "Security",
    icon: <Shield className="h-5 w-5" />,
    accentClass: "text-primary",
    skills: [
      { name: "CTF", level: "Advanced", percent: 85 },
      { name: "Vulnerability Assessment", level: "Advanced", percent: 80 },
      { name: "Digital Forensics", level: "Intermediate", percent: 70 },
      { name: "Penetration Testing", level: "Intermediate", percent: 75 },
    ],
  },
  {
    title: "Tools",
    icon: <Wrench className="h-5 w-5" />,
    accentClass: "text-secondary",
    skills: [
      { name: "Linux", level: "Advanced", percent: 90 },
      { name: "Wireshark", level: "Intermediate", percent: 70 },
      { name: "Burp Suite", level: "Intermediate", percent: 65 },
      { name: "Nmap", level: "Intermediate", percent: 72 },
      { name: "Metasploit", level: "Intermediate", percent: 68 },
      { name: "John the Ripper", level: "Intermediate", percent: 65 },
      { name: "Ghidra", level: "Beginner", percent: 50 },
      { name: "Git", level: "Advanced", percent: 85 },
    ],
  },
  {
    title: "Languages",
    icon: <Code className="h-5 w-5" />,
    accentClass: "text-primary",
    skills: [
      { name: "Python", level: "Advanced", percent: 85 },
      { name: "Bash", level: "Intermediate", percent: 75 },
      { name: "JavaScript", level: "Intermediate", percent: 70 },
      { name: "TypeScript", level: "Intermediate", percent: 65 },
      { name: "C", level: "Intermediate", percent: 68 },
      { name: "C++", level: "Intermediate", percent: 65 },
      { name: "HTML/CSS", level: "Intermediate", percent: 70 },
    ],
  },
  {
    title: "AI / LLM",
    icon: <Brain className="h-5 w-5" />,
    accentClass: "text-secondary",
    skills: [
      { name: "Claude API", level: "Intermediate", percent: 70 },
      { name: "Local LLMs", level: "Intermediate", percent: 65 },
      { name: "Prompt Engineering", level: "Advanced", percent: 80 },
    ],
  },
];

const SkillBadge = ({ skill, accentClass }: { skill: Skill; accentClass: string }) => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <Badge
        variant="outline"
        className="cursor-pointer border-border bg-muted/50 text-foreground font-mono text-xs hover:border-primary/60 transition-colors"
      >
        {skill.name}
      </Badge>
    </HoverCardTrigger>
    <HoverCardContent className="w-56 bg-card border-border">
      <div className="space-y-2">
        <p className="font-mono text-sm font-semibold text-foreground">{skill.name}</p>
        <p className={`text-xs font-mono ${accentClass}`}>{skill.level}</p>
        <div className="h-1.5 w-full rounded-full bg-muted">
          <div
            className="h-1.5 rounded-full bg-primary transition-all"
            style={{ width: `${skill.percent}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground">{skill.percent}% proficiency</p>
      </div>
    </HoverCardContent>
  </HoverCard>
);

const SkillsSection = () => (
  <section id="skills" className="py-24">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-primary mb-2 glow-emerald">
        <span className="text-muted-foreground font-normal text-lg mr-2">02.</span>
        Technical Skills
      </h2>
      <div className="h-px w-24 bg-primary/40 mb-10" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl">
        {categories.map((cat) => (
          <Card key={cat.title} className="bg-card border-border hover:border-primary/30 transition-colors">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 font-mono text-sm">
                <span className={cat.accentClass}>{cat.icon}</span>
                {cat.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} accentClass={cat.accentClass} />
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
