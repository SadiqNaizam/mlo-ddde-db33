import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  const exploreLinks = [
    { name: 'Academics & Research', href: '/academics-research' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Campus & Innovation', href: '/campus-innovation-hub' },
    { name: 'Faculty', href: '/faculty' },
  ];

  const infoLinks = [
    { name: 'Contact', href: '/contact' },
    { name: 'Maps & Directions', href: '/maps' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Careers', href: '/careers' },
  ];

  return (
    <footer className="bg-secondary/40 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Branding */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2 w-fit">
              <BrainCircuit className="h-8 w-8 text-primary" />
              <span className="font-heading text-xl font-bold">Aethelred</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              The world's premier institution for engineering and technology research.
            </p>
          </div>

          {/* Column 2: Explore Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Information Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              {infoLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center gap-4">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Aethelred College of Technology. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;