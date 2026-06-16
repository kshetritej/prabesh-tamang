import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experiences", label: "Experiences" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-smooth",
        transparent
          ? "bg-transparent"
          : "bg-background/70 backdrop-blur-xl border-b border-border/60"
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link
          to="/"
          className={cn(
            "flex items-center gap-2 font-display text-lg font-semibold tracking-tight transition-smooth",
            transparent ? "text-white" : "text-foreground"
          )}
          aria-label="Your Pokhara Friend home"
        >
          <Mountain className="h-6 w-6" />
          <span className="hidden sm:inline">Your Pokhara Friend</span>
          <span className="sm:hidden">YPF</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <RouterNavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-smooth hover:opacity-100",
                  transparent ? "text-white/85 hover:text-white" : "text-foreground/70 hover:text-foreground",
                  isActive && (transparent ? "text-white" : "text-foreground")
                )
              }
            >
              {l.label}
            </RouterNavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-5">
            <Link to="/contact">Say Hello</Link>
          </Button>
        </div>

        <button
          className={cn("lg:hidden p-2 -mr-2", transparent ? "text-white" : "text-foreground")}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container flex flex-col gap-1 py-4">
            {links.map((l) => (
              <RouterNavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "py-3 text-base font-medium border-b border-border/40 last:border-0",
                    isActive ? "text-accent" : "text-foreground"
                  )
                }
              >
                {l.label}
              </RouterNavLink>
            ))}
            <Button asChild className="mt-3 rounded-full bg-accent text-accent-foreground">
              <Link to="/contact">Say Hello</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
