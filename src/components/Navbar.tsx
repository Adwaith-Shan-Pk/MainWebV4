import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2 font-mono text-sm font-semibold text-primary">
          <Shield className="h-5 w-5" />
          <span>adwaith@sec</span>
          <span className="text-muted-foreground">~$</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <Button size="sm" className="ml-3 font-mono text-xs" asChild>
            <a href="mailto:mail@shan.is-a.dev">Contact</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-muted-foreground hover:text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 font-mono text-sm text-muted-foreground hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
