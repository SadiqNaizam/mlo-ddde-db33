import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X, Cpu, Atom, Dna, Bot, DraftingCompass, FlaskConical, Microscope, BrainCircuit } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock data for the menu content, reflecting the college's focus
const menuSections = [
  {
    category: 'Engineering & Computer Science',
    items: [
      {
        title: 'Artificial Intelligence',
        href: '/academics-research#ai',
        description: 'Pioneering the future of intelligent systems and machine learning.',
        icon: <BrainCircuit className="h-8 w-8 text-primary" />,
      },
      {
        title: 'Computer Science',
        href: '/academics-research#cs',
        description: 'Advancing computation, algorithms, and secure digital infrastructures.',
        icon: <Cpu className="h-8 w-8 text-primary" />,
      },
      {
        title: 'Robotics',
        href: '/academics-research#robotics',
        description: 'Designing autonomous systems for land, air, and space exploration.',
        icon: <Bot className="h-8 w-8 text-primary" />,
      },
      {
        title: 'Mechanical Engineering',
        href: '/academics-research#me',
        description: 'Innovating in energy, materials, and advanced manufacturing.',
        icon: <DraftingCompass className="h-8 w-8 text-primary" />,
      },
    ],
  },
  {
    category: 'Applied & Natural Sciences',
    items: [
      {
        title: 'Applied Physics',
        href: '/academics-research#physics',
        description: 'Exploring quantum mechanics, optics, and condensed matter.',
        icon: <Atom className="h-8 w-8 text-primary" />,
      },
      {
        title: 'Bioengineering',
        href: '/academics-research#bio',
        description: 'Engineering solutions for health, medicine, and biology.',
        icon: <Dna className="h-8 w-8 text-primary" />,
      },
      {
        title: 'Chemical Engineering',
        href: '/academics-research#chem',
        description: 'Developing sustainable processes and novel materials.',
        icon: <FlaskConical className="h-8 w-8 text-primary" />,
      },
      {
        title: 'Materials Science',
        href: '/academics-research#materials',
        description: 'Discovering and designing materials for next-gen technologies.',
        icon: <Microscope className="h-8 w-8 text-primary" />,
      },
    ],
  },
];

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MegaMenuItem: React.FC<{ title: string; href: string; description: string; icon: React.ReactNode; onClick: () => void; }> = ({ title, href, description, icon, onClick }) => (
    <Link to={href} onClick={onClick} className="group relative block p-6 rounded-lg transition-all duration-300 hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">
        <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 mt-1">{icon}</div>
            <div>
                <h3 className="text-lg font-heading font-semibold text-foreground group-hover:text-primary">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground font-body">{description}</p>
            </div>
        </div>
    </Link>
);


const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
    React.useEffect(() => {
        console.log('MegaMenu loaded');
    }, []);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.1 }}
                        className="absolute top-0 left-0 right-0 border-b bg-background shadow-lg"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
                    >
                        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-2xl font-heading font-bold text-foreground">Academics & Research</h2>
                                <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close menu">
                                    <X className="h-6 w-6" />
                                </Button>
                            </div>
                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
                                {menuSections.map((section) => (
                                    <div key={section.category}>
                                        <h3 className="mb-4 text-sm font-semibold tracking-wider uppercase text-muted-foreground font-body">
                                            {section.category}
                                        </h3>
                                        <div className="flex flex-col space-y-2">
                                            {section.items.map((item) => (
                                                <MegaMenuItem key={item.title} {...item} onClick={onClose} />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-12 border-t pt-8 text-center">
                                 <Link to="/admissions" onClick={onClose} className={cn('text-lg font-body font-medium text-primary hover:underline')}>
                                    Ready to apply? View Admissions
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MegaMenu;