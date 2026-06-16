import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, MessageCircle, Mountain } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold">
            <Mountain className="h-6 w-6" />
            Your Pokhara Friend
          </Link>
          <p className="mt-4 text-sm text-primary-foreground/70 max-w-sm leading-relaxed">
            Helping solo travelers discover Pokhara like a local, not a tourist. Cafés, hidden viewpoints,
            authentic food, and warm conversations — the way a friend would show you their city.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold mb-4 uppercase tracking-wider">Explore</h3>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/about" className="hover:text-accent transition-smooth">About</Link></li>
            <li><Link to="/experiences" className="hover:text-accent transition-smooth">Experiences</Link></li>
            <li><Link to="/gallery" className="hover:text-accent transition-smooth">Gallery</Link></li>
            <li><Link to="/blog" className="hover:text-accent transition-smooth">Blog</Link></li>
            <li><Link to="/faqs" className="hover:text-accent transition-smooth">FAQs</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-smooth">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold mb-4 uppercase tracking-wider">Say Hi</h3>
          <div className="flex items-center gap-3">
            <a href="https://wa.me/9779800000000" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="p-2.5 rounded-full border border-primary-foreground/20 hover:bg-accent hover:border-accent transition-smooth">
              <MessageCircle className="h-4 w-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2.5 rounded-full border border-primary-foreground/20 hover:bg-accent hover:border-accent transition-smooth">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="p-2.5 rounded-full border border-primary-foreground/20 hover:bg-accent hover:border-accent transition-smooth">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="mailto:hello@yourpokharafriend.com" aria-label="Email" className="p-2.5 rounded-full border border-primary-foreground/20 hover:bg-accent hover:border-accent transition-smooth">
              <Mail className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-5 text-xs text-primary-foreground/60">Pokhara, Nepal · Open daily</p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 text-xs text-primary-foreground/60 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Your Pokhara Friend. Made with love in Pokhara.</p>
          <p>Not a tour. A friendship.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
