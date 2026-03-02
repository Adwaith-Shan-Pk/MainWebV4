import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, GraduationCap } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-primary mb-2 glow-emerald">
        <span className="text-muted-foreground font-normal text-lg mr-2">01.</span>
        About Me
      </h2>
      <div className="h-px w-24 bg-primary/40 mb-10" />

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
        <Card className="bg-card border-border hover:border-primary/40 transition-colors">
          <CardContent className="p-6">
            <ShieldCheck className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-mono text-lg font-semibold text-foreground mb-3">Mission</h3>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              Dedicated to preventing cyber breaches through proactive security research, 
              vulnerability assessment, and community building. I believe in strengthening 
              the cybersecurity ecosystem by developing challenging CTFs, sharing knowledge, 
              and fostering collaboration among security enthusiasts.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border hover:border-secondary/40 transition-colors">
          <CardContent className="p-6">
            <GraduationCap className="h-8 w-8 text-secondary mb-4" />
            <h3 className="font-mono text-lg font-semibold text-foreground mb-3">Education</h3>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              Currently pursuing <span className="text-foreground font-medium">M.Tech Integrated</span> in 
              Cyber Security &amp; Digital Forensics  at <span className="text-foreground font-medium">SRMIST</span> (2024–2029). 
              Building a strong foundation in digital forensics, network security, 
              and counterterrorism methodologies while actively participating in CTF competitions 
              and security research.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default AboutSection;
