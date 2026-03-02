import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "ISO/IEC 27001:2022 Lead Auditor",
    issuer: "Certified",
    accent: "text-primary",
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    accent: "text-secondary",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Certified",
    accent: "text-primary",
  },
  {
    title: "Computer Hardware Basics",
    issuer: "Certified",
    accent: "text-secondary",
  },
];

const CertificationsSection = () => (
  <section id="certifications" className="py-24">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-primary mb-2 glow-emerald">
        <span className="text-muted-foreground font-normal text-lg mr-2">04.</span>
        Certifications
      </h2>
      <div className="h-px w-24 bg-primary/40 mb-10" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl">
        {certifications.map((cert) => (
          <Card
            key={cert.title}
            className="bg-card border-border hover:border-primary/30 transition-colors group"
          >
            <CardContent className="p-5">
              <Award className={`h-6 w-6 ${cert.accent} mb-3 group-hover:scale-110 transition-transform`} />
              <h3 className="font-mono text-sm font-semibold text-foreground mb-1">{cert.title}</h3>
              <p className="font-mono text-xs text-muted-foreground">{cert.issuer}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
