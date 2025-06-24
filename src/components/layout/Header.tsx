import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { BrainCircuit, Menu, Search, X } from 'lucide-react';
import { MegaMenu } from '@/components/MegaMenu'; // Assuming this component exists as specified

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    console.log('Header loaded');
  }, []);

  const navLinks = [
    { name: 'Academics & Research', href: '/academics-research' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Campus & Innovation', href: '/campus-innovation-hub' },
    { name: 'Faculty', href: '/faculty' },
  ];

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
        <div className="container flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2" onClick={() => setSearchOpen(false)}>
            <BrainCircuit className="h-8 w-8 text-primary" />
            <span className="font-heading text-xl font-bold">Aethelred</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => setMenuOpen(true)}
                className="font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2">
              {isSearchOpen ? (
                <div className="relative">
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-64 pr-10"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full"
                    onClick={() => setSearchOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)}>
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Open Search</span>
                </Button>
              )}
            </div>

            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-sidebar">
                  <div className="flex flex-col h-full p-6">
                    <nav className="flex flex-col gap-4 mt-8">
                      {navLinks.map((link) => (
                        <SheetClose asChild key={link.name}>
                          <NavLink
                            to={link.href}
                            className={({ isActive }) =>
                              `text-lg font-medium transition-colors hover:text-primary ${
                                isActive ? 'text-primary' : 'text-sidebar-foreground'
                              }`
                            }
                          >
                            {link.name}
                          </NavLink>
                        </SheetClose>
                      ))}
                    </nav>
                    <div className="mt-auto">
                       <Input type="search" placeholder="Search..." />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
      {/* The MegaMenu is positioned absolutely or fixed by its own styles */}
      <MegaMenu isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Header;