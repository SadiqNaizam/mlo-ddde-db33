import React from 'react';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Custom Page-specific Components
import InteractiveDisciplineCard from '@/components/InteractiveDisciplineCard';
import ResearchHighlightCard from '@/components/ResearchHighlightCard';

// shadcn/ui Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Icons from lucide-react
import { BrainCircuit, Cpu, Bot, DraftingCompass, Atom, Dna, FlaskConical, Microscope, University, BookOpen } from 'lucide-react';

// Placeholder Data
const disciplines = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description: "Pioneering the future of intelligent systems, neural networks, and machine learning.",
    slug: "artificial-intelligence",
  },
  {
    icon: Cpu,
    title: "Computer Science",
    description: "Advancing computation, algorithms, and the secure digital infrastructures of tomorrow.",
    slug: "computer-science",
  },
  {
    icon: Bot,
    title: "Robotics",
    description: "Designing autonomous systems for land, air, space, and medical applications.",
    slug: "robotics",
  },
  {
    icon: Dna,
    title: "Bioengineering",
    description: "Engineering novel solutions for global challenges in health, medicine, and biology.",
    slug: "bioengineering",
  },
  {
    icon: Atom,
    title: "Applied Physics",
    description: "Exploring the fundamental principles of the universe, from quantum mechanics to cosmology.",
    slug: "applied-physics",
  },
  {
    icon: Microscope,
    title: "Materials Science",
    description: "Discovering and designing next-generation materials for technology and sustainability.",
    slug: "materials-science",
  },
];

const researchCenters = [
  {
    title: "Center for Large Language Model Research",
    description: "Dedicated to advancing the state-of-the-art in foundational models and their ethical applications."
  },
  {
    title: "Quantum Computing Initiative",
    description: "Building the next generation of quantum hardware and algorithms to solve intractable problems."
  },
  {
    title: "Institute for Sustainable Energy Systems",
    description: "Innovating in renewable energy generation, storage, and grid modernization."
  },
  {
    title: "Center for Human-Compatible AI",
    description: "Ensuring that artificial intelligence remains a beneficial force for all of humanity."
  },
];

const publications = [
  {
    title: "A Generative Pre-trained Transformer for Protein Folding",
    authors: ["Dr. Evelyn Reed", "Dr. Kenji Tanaka"],
    abstract: "We introduce a novel architecture, Proteus-3, that leverages transformer-based models to predict complex protein structures with unprecedented accuracy, significantly accelerating drug discovery.",
    publicationLink: "#"
  },
  {
    title: "Scalable Photonic Qubits for Fault-Tolerant Quantum Computation",
    authors: ["Prof. Alistair Finch", "Dr. Lena Petrova"],
    abstract: "This paper demonstrates a breakthrough in creating stable, interconnected photonic qubits at room temperature, paving the way for scalable, fault-tolerant quantum computers.",
    publicationLink: "#"
  },
  {
    title: "Autonomous Swarm Robotics for Subterranean Exploration",
    authors: ["Dr. Samuel Carter", "Dr. Priya Singh"],
    abstract: "Our research showcases a decentralized control algorithm for robotic swarms, enabling effective and resilient exploration of complex, unknown subterranean environments without a central command.",
    publicationLink: "#"
  }
];

const faqs = [
  {
    question: "How can undergraduate students get involved in research?",
    answer: "Our Undergraduate Research Opportunities Program (UROP) connects students with faculty-led research projects starting from their first year. Opportunities are posted on the UROP portal, and students are encouraged to directly contact faculty whose work interests them."
  },
  {
    question: "What are the flagship research centers at Aethelred?",
    answer: "Aethelred is home to several world-renowned centers, including the Center for LLM Research, the Quantum Computing Initiative, and the Institute for Sustainable Energy Systems. Each center fosters interdisciplinary collaboration to tackle grand challenges."
  },
  {
    question: "How does the college support patent applications for student and faculty research?",
    answer: "The Technology Licensing Office (TLO) provides comprehensive support for the patenting and commercialization process, including legal assistance, market analysis, and connecting inventors with industry partners. We are proud of our track record in translating research into real-world impact."
  }
];

const AcademicsResearchPage = () => {
  console.log('Academics & Research Page loaded');

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="pt-20">
        {/* Page Hero Section */}
        <section className="text-center py-16 md:py-24 bg-secondary/40">
          <div className="container">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary">Academics & Research</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground font-body">
              Explore our world-class departments, pioneering research centers, and the groundbreaking discoveries that define the future of technology and science.
            </p>
          </div>
        </section>

        {/* Tabbed Content Section */}
        <section className="container py-12 md:py-16">
          <Tabs defaultValue="departments" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
              <TabsTrigger value="departments" className="py-2">Departments</TabsTrigger>
              <TabsTrigger value="research-centers" className="py-2">Research Centers</TabsTrigger>
              <TabsTrigger value="publications" className="py-2">Publications</TabsTrigger>
              <TabsTrigger value="faqs" className="py-2">FAQs</TabsTrigger>
            </TabsList>

            {/* Departments Tab */}
            <TabsContent value="departments" className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {disciplines.map((discipline) => (
                  <InteractiveDisciplineCard key={discipline.slug} {...discipline} />
                ))}
              </div>
            </TabsContent>

            {/* Research Centers Tab */}
            <TabsContent value="research-centers" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {researchCenters.map((center) => (
                        <Card key={center.title} className="hover:border-primary transition-colors">
                            <CardHeader>
                                <CardTitle className="font-heading flex items-start gap-4">
                                    <span className="bg-primary/10 p-2 rounded-md mt-1"><University className="h-6 w-6 text-primary" /></span>
                                    <span>{center.title}</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{center.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </TabsContent>

            {/* Publications Tab */}
            <TabsContent value="publications" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {publications.map((pub) => (
                        <ResearchHighlightCard key={pub.title} {...pub} />
                    ))}
                </div>
            </TabsContent>

            {/* FAQs Tab */}
            <TabsContent value="faqs" className="mt-8">
                <div className="max-w-4xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger className="text-left font-heading text-lg">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </TabsContent>

          </Tabs>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AcademicsResearchPage;