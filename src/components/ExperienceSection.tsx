import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Experience {
  role: string;
  org: string;
  period: string;
  description: string;
  tags: string[];
}

const experiences: Experience[] = [
  {
    role: "Cybersec Team Member",
    org: "Hack The Box Chennai",
    period: "Present",
    description:
      "Developing CTF challenges in Cryptography & Web Exploitation. Contributing to the cybersecurity community through competitive challenge design and knowledge sharing.",
    tags: ["CTF", "Cryptography", "Web Exploitation"],
  },
  {
    role: "Technical Member",
    org: "FOSS Club SRM",
    period: "Present",
    description:
      "Managing infrastructure and conducting FOSS workshops. Promoting open-source tools and methodologies within the student community.",
    tags: ["Infrastructure", "FOSS", "Workshops"],
  },
  {
    role: "Technical Head",
    org: "Founderfie",
    period: "3+ Years",
    description:
      "Led technical divisions and startup initiatives. Oversaw product development, technical strategy, and mentored team members across multiple projects.",
    tags: ["Leadership", "Startups", "Strategy"],
  },
  {
    role: "Operations Team Member",
    org: "TEDxSRMIST",
    period: "Present",
    description:
      "Coordinated operational logistics for TEDx events, ensuring seamless execution of one of the most prestigious events on campus.",
    tags: ["Operations", "Events", "TEDx"],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-primary mb-2 glow-emerald">
        <span className="text-muted-foreground font-normal text-lg mr-2">03.</span>
        Experience
      </h2>
      <div className="h-px w-24 bg-primary/40 mb-10" />

      <div className="relative max-w-3xl">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div key={exp.org} className="relative pl-12">
              {/* Dot */}
              <div className="absolute left-[11px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />

              <Card className="bg-card border-border hover:border-primary/30 transition-colors">
                <CardContent className="p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-mono text-sm font-semibold text-foreground">{exp.role}</h3>
                    <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="font-mono text-xs text-secondary mb-3">{exp.org}</p>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-3">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-[10px] font-mono border-border text-muted-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
