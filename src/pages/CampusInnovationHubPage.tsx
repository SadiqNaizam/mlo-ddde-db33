import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import InteractiveBuildingShowcase from '@/components/InteractiveBuildingShowcase';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { Lightbulb, Rocket, Users } from 'lucide-react';

// Placeholder data for student ventures
const studentVentures = [
  {
    icon: Rocket,
    name: "Aetherial Dynamics",
    description: "Developing next-generation ion propulsion systems for interplanetary travel and satellite maneuvering.",
    imageUrl: "https://images.unsplash.com/photo-1614726365902-1815e3b5e4c6?q=80&w=1974&auto=format&fit=crop",
  },
  {
    icon: Lightbulb,
    name: "QuantumLeap AI",
    description: "A novel AI-powered platform for drug discovery, dramatically accelerating pre-clinical research timelines.",
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Users,
    name: "BioSynth Solutions",
    description: "Creating biodegradable polymers from engineered microorganisms to combat plastic pollution.",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
  },
];

const CampusInnovationHubPage = () => {
  console.log('Campus & Innovation Hub Page loaded');

  return (
    <div className="bg-background text-foreground font-body">
      <Header />
      <main className="pt-20">
        {/* Page Hero */}
        <section className="container mx-auto text-center py-16 md:py-24 px-4">
          <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tighter">
            Campus & Innovation Hub
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-lg">
            Discover the ecosystem where theory meets application. Our campus is a living laboratory for the ideas that will shape tomorrow.
          </p>
        </section>

        {/* Interactive Building Showcase */}
        <section>
          <InteractiveBuildingShowcase />
        </section>

        {/* Student Venture Spotlights */}
        <section className="bg-secondary/40 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                Student Venture Spotlights
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
                From dorm room concepts to venture-backed startups, see the innovations born at Aethelred.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {studentVentures.map((venture) => (
                <Card key={venture.name} className="flex flex-col overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img src={venture.imageUrl} alt={venture.name} className="w-full h-48 object-cover"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <CardHeader className="flex-row items-start gap-4 space-y-0">
                    <div className="bg-primary/10 p-3 rounded-lg mt-1">
                      <venture.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="font-heading text-xl">{venture.name}</CardTitle>
                      <CardDescription className="pt-2">{venture.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    {/* Content can be expanded here */}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* On-Campus Startup Center & Get Involved Form */}
        <section className="container mx-auto py-16 md:py-24 px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold">The Aethelred Launchpad</h2>
                    <p className="mt-4 text-muted-foreground text-lg">
                        Our on-campus incubator, The Launchpad, provides students and faculty with the resources, mentorship, and funding needed to transform groundbreaking research into world-changing companies.
                    </p>
                    <div className="mt-6 space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 bg-primary/10 p-2 rounded-full mt-1"><Rocket className="h-5 w-5 text-primary"/></div>
                            <p><strong className="text-foreground">Seed Funding:</strong> Access to capital to get your ideas off the ground.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 bg-primary/10 p-2 rounded-full mt-1"><Users className="h-5 w-5 text-primary"/></div>
                            <p><strong className="text-foreground">Expert Mentorship:</strong> Guidance from industry veterans, successful alumni, and our world-class faculty.</p>
                        </div>
                    </div>
                    <Button asChild size="lg" className="mt-8">
                        <Link to="/admissions">Join Our Community</Link>
                    </Button>
                </div>
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="font-heading text-2xl">Share Your Innovation</CardTitle>
                        <CardDescription>Have an idea or a venture? Get in touch with The Launchpad team.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input id="name" placeholder="Ada Lovelace" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="ada@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="idea">Your Idea / Venture</Label>
                                <Textarea id="idea" placeholder="Describe your innovative concept..." className="min-h-[120px]" />
                            </div>
                            <Button type="submit" className="w-full">Submit Inquiry</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default CampusInnovationHubPage;