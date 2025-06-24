import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FacultyProfileCard from '@/components/FacultyProfileCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from 'lucide-react';

// Mock data for faculty profiles
const allFaculty = [
  {
    name: 'Dr. Evelyn Reed',
    title: 'Professor & Director of AI Research',
    department: 'Artificial Intelligence',
    imageUrl: 'https://images.unsplash.com/photo-1580852300654-03c803a15e75?q=80&w=1974&auto=format&fit=crop',
    profileSlug: 'evelyn-reed',
    researchInterests: ['Machine Learning', 'Neural Networks', 'Ethics in AI'],
  },
  {
    name: 'Prof. Kenji Tanaka',
    title: 'Associate Professor',
    department: 'Robotics',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop',
    profileSlug: 'kenji-tanaka',
    researchInterests: ['Autonomous Systems', 'Human-Robot Interaction', 'Drone Swarms'],
  },
  {
    name: 'Dr. Alistair Finch',
    title: 'Distinguished Professor',
    department: 'Applied Physics',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
    profileSlug: 'alistair-finch',
    researchInterests: ['Quantum Computing', 'Condensed Matter', 'Optics'],
  },
  {
    name: 'Dr. Lena Petrova',
    title: 'Assistant Professor',
    department: 'Bioengineering',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    profileSlug: 'lena-petrova',
    researchInterests: ['Genomic Engineering', 'Synthetic Biology', 'Therapeutics'],
  },
  {
    name: 'Prof. Samuel Chen',
    title: 'Professor',
    department: 'Computer Science',
    imageUrl: 'https://images.unsplash.com/photo-1522529599102-4b3245c75153?q=80&w=2070&auto=format&fit=crop',
    profileSlug: 'samuel-chen',
    researchInterests: ['Cybersecurity', 'Distributed Systems', 'Cryptography'],
  },
  {
    name: 'Dr. Isabella Rossi',
    title: 'Professor',
    department: 'Artificial Intelligence',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    profileSlug: 'isabella-rossi',
    researchInterests: ['Natural Language Processing', 'Computer Vision', 'Reinforcement Learning'],
  },
   {
    name: 'Dr. Marcus Thorne',
    title: 'Department Head',
    department: 'Mechanical Engineering',
    imageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop',
    profileSlug: 'marcus-thorne',
    researchInterests: ['Fluid Dynamics', 'Thermodynamics', 'Additive Manufacturing'],
  },
   {
    name: 'Dr. Anya Sharma',
    title: 'Research Scientist',
    department: 'Materials Science',
    imageUrl: 'https://images.unsplash.com/photo-1521146764736-56c929d59c83?q=80&w=1974&auto=format&fit=crop',
    profileSlug: 'anya-sharma',
    researchInterests: ['Nanomaterials', 'Polymer Science', 'Energy Storage'],
  }
];

const FacultyPage = () => {
    useEffect(() => {
        console.log('FacultyPage loaded');
    }, []);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('all');
    const [filteredFaculty, setFilteredFaculty] = useState(allFaculty);

    const departments = ['all', ...Array.from(new Set(allFaculty.map(f => f.department)))];

    useEffect(() => {
        const lowercasedTerm = searchTerm.toLowerCase();
        const results = allFaculty.filter(faculty => {
            const matchesDepartment = selectedDepartment === 'all' || faculty.department === selectedDepartment;
            
            const matchesSearch = lowercasedTerm === '' ||
                faculty.name.toLowerCase().includes(lowercasedTerm) ||
                faculty.researchInterests.some(interest => interest.toLowerCase().includes(lowercasedTerm));
            
            return matchesDepartment && matchesSearch;
        });
        setFilteredFaculty(results);
    }, [searchTerm, selectedDepartment]);

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <section className="py-16 lg:py-24 bg-secondary/40">
          <div className="container text-center">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-primary">Our Faculty</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground font-body">
              Meet the brilliant minds shaping the future of technology and science. Our faculty are leaders in their fields, dedicated to both groundbreaking research and mentorship.
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="container">
            {/* Filter and Search Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-card border rounded-lg shadow-sm sticky top-20 z-10">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  type="text"
                  placeholder="Search by name or research area..."
                  className="pl-10 font-body"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger className="w-full md:w-[280px] font-body">
                  <SelectValue placeholder="Filter by Department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map(dept => (
                    <SelectItem key={dept} value={dept} className="font-body">{dept === 'all' ? 'All Departments' : dept}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Faculty Grid */}
            {filteredFaculty.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                {filteredFaculty.map(faculty => (
                    <FacultyProfileCard key={faculty.profileSlug} {...faculty} />
                ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <h3 className="font-heading text-2xl">No Faculty Found</h3>
                    <p className="text-muted-foreground mt-2 font-body">Try adjusting your search or filter criteria.</p>
                </div>
            )}
            
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FacultyPage;