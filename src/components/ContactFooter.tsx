import { Linkedin, Mail, Shield, FileDown, Github, Twitter } from "lucide-react";

const ContactFooter = () => (
  <footer id="contact" className="border-t border-border py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
          <Shield className="h-4 w-4 text-primary" />
          <span>© 2025 Adwaith Shan Pk. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-4 flex-wrap justify-center">
          <a href="https://linkedin.com/in/adwaith-shan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-4 w-4" />
            adwaith-shan
          </a>
          <span className="text-border">|</span>
          <a href="https://github.com/adwaith-shan-pk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-4 w-4" />
            adwaith-shan-pk
          </a>
          <span className="text-border">|</span>
          <a href="https://x.com/lordlinux69" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="h-4 w-4" />
            lordlinux69
          </a>
          <span className="text-border">|</span>
          <a href="mailto:mail@shan.is-a.dev" className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-secondary transition-colors">
            <Mail className="h-4 w-4" />
            mail@shan.is-a.dev
          </a>
          <span className="text-border">|</span>
          <a href="/adwaithshanpk.pdf" download className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors">
            <FileDown className="h-4 w-4" />
              
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default ContactFooter;