import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Terminal, Linkedin, Mail, FileDown, Github, Twitter  } from "lucide-react";

const skills = [
  "Vulnerability Assessment",
  "Penetration Testing",
  "Digital Forensics",
  "CTF Development",
  "Threat Analysis",
];

const HeroSection = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const skill = skills[currentSkill];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < skill.length) {
            setDisplayText(skill.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentSkill((prev) => (prev + 1) % skills.length);
          }
        }
      },
      isDeleting ? 30 : 70
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentSkill]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          {/* Terminal prompt */}
          <div className="mb-6 flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <Terminal className="h-4 w-4 text-primary" />
            <span className="text-primary">root@soc</span>
            <span>:</span>
            <span className="text-secondary">~/portfolio</span>
            <span>$ ./identify.sh</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight glow-emerald text-primary mb-4">
            Adwaith Shan Pk
          </h1>

          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl font-sans">
            M.Tech(Int) in Cyber Security &amp; Digital | CTF Developer | Security Researcher
          </p>

          {/* Typing animation */}
          <div className="mb-10 rounded-md border border-border bg-card p-4 font-mono text-sm">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-secondary inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary inline-block" />
              <span className="ml-2 text-xs">skills.sh</span>
            </div>
            <div>
              <span className="text-primary">→ </span>
              <span className="text-secondary">{displayText}</span>
              <span className="terminal-cursor text-primary">█</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild className="font-mono text-xs">
              <a href="https://linkedin.com/in/adwaith-shan" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild className="font-mono text-xs border-border hover:border-primary hover:text-primary">
              <a href="https://github.com/adwaith-shan-pk" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild className="font-mono text-xs border-border hover:border-primary hover:text-primary">
              <a href="https://x.com/lordlinux69" target="_blank" rel="noopener noreferrer">
                <Twitter className="mr-2 h-4 w-4" />
                X
              </a>
            </Button>
            <Button variant="outline" asChild className="font-mono text-xs border-border hover:border-primary hover:text-primary">
              <a href="mailto:mail@shan.is-a.dev">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
            <Button variant="outline" asChild className="font-mono text-xs border-border hover:border-secondary hover:text-secondary">
              <a href="/adwaithshanpk.pdf" download>
                <FileDown className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
