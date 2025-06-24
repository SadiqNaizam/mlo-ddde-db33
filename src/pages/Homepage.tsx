import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import InteractiveBuildingShowcase from '@/components/InteractiveBuildingShowcase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, Award, Users, FlaskConical } from 'lucide-react';

const Homepage = () => {
  console.log('Homepage loaded');

  const newsItems = [
    {
      title: "Aethelred Team Wins Global AI Challenge",
      description: "Our researchers have developed a new reinforcement learning model that outperforms all current benchmarks.",
      imageUrl: "https://images.unsplash.com/photo-1674027444485-cd9b6f633fa0?q=80&w=2070&auto=format&fit=crop",
      link: "/academics-research#ai"
    },
    {
      title: "Breakthrough in Quantum Material Science",
      description: "A new stable superconductor has been synthesized at our Nanotechnology Institute, paving the way for energy revolution.",
      imageUrl: "https://images.unsplash.com/photo-1518104593124-ac2e82a03e65?q=80&w=2070&auto=format&fit=crop",
      link: "/academics-research#materials"
    },
    {
      title: "Announcing the Center for Bio-Inspired Robotics",
      description: "A new interdisciplinary hub focused on creating robots that mimic natural systems for complex environments.",
      imageUrl: "https://images.unsplash.com/photo-1581092580433-cdf5869161af?q=80&w=2070&auto=format&fit=crop",
      link: "/campus-innovation-hub"
    }
  ];

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-center text-white">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            src="https://videos.pexels.com/video-files/8064923/8064923-hd_1920_1080_25fps.mp4"
          />
          <div className="relative z-20 container px-4">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight shadow-lg">
              Engineering the Future, Today.
            </h1>
            <p className="font-body mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
              Welcome to Aethelred, where the world's brightest minds converge to solve the greatest challenges in technology and science.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="text-lg py-7 px-8">
                <Link to="/admissions">Apply Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg py-7 px-8 bg-transparent border-white text-white hover:bg-white hover:text-primary">
                <Link to="/academics-research">Explore Research</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Statistics Section */}
        <section className="py-16 bg-secondary/40">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-4">
                        <Award className="h-12 w-12 mx-auto text-primary mb-2" />
                        <p className="font-heading text-4xl font-bold">#1</p>
                        <p className="text-muted-foreground">in AI & Robotics Research</p>
                    </div>
                    <div className="p-4">
                        <Users className="h-12 w-12 mx-auto text-primary mb-2" />
                        <p className="font-heading text-4xl font-bold">12</p>
                        <p className="text-muted-foreground">Nobel Laureates Affiliated</p>
                    </div>
                    <div className="p-4">
                        <FlaskConical className="h-12 w-12 mx-auto text-primary mb-2" />
                        <p className="font-heading text-4xl font-bold">500+</p>
                        <p className="text-muted-foreground">Active Research Projects</p>
                    </div>
                </div>
            </div>
        </section>


        {/* Interactive Building Showcase Section */}
        <section className="py-20">
          <InteractiveBuildingShowcase />
        </section>

        {/* News & Highlights Section */}
        <section className="py-20 bg-secondary/40">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl font-bold">Latest News & Breakthroughs</h2>
              <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay informed about the pioneering work and achievements from our community.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item, index) => (
                <Card key={index} className="overflow-hidden flex flex-col group hover:shadow-xl transition-shadow duration-300">
                    <div className="overflow-hidden">
                        <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <CardHeader>
                        <CardTitle className="font-heading text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <CardDescription>{item.description}</CardDescription>
                    </CardContent>
                    <div className="p-6 pt-0">
                        <Button asChild variant="link" className="p-0 h-auto">
                            <Link to={item.link}>
                                Learn More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 text-center">
                 <h2 className="font-heading text-4xl font-bold">Begin Your Journey</h2>
                 <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Ready to join the next generation of innovators and leaders? Our admissions process is the first step towards an unparalleled education.
                 </p>
                 <Button asChild size="lg" className="mt-8 text-lg py-7 px-8">
                    <Link to="/admissions">View Admission Details</Link>
                 </Button>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Homepage;