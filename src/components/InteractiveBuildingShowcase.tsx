import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Building, Network, ChevronRight } from 'lucide-react';

interface BuildingData {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  hasDataViz: boolean;
}

const campusBuildings: BuildingData[] = [
  {
    id: 'ai_robotics',
    name: 'AI & Robotics Center',
    description: 'The epicenter of research in artificial intelligence, machine learning, and autonomous systems. Home to groundbreaking innovations.',
    imageUrl: 'https://images.unsplash.com/photo-1554469384-e58fac177232?q=80&w=2070&auto=format&fit=crop',
    hasDataViz: true,
  },
  {
    id: 'nanotech_institute',
    name: 'Nanotechnology Institute',
    description: 'Exploring the future of materials and medicine at the atomic scale. A world-class facility for nano-fabrication.',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723a9ce6890?q=80&w=2070&auto=format&fit=crop',
    hasDataViz: false,
  },
  {
    id: 'bio_engineering_hall',
    name: 'Bio-Engineering Hall',
    description: 'Where biology meets technology. This facility leads research in genomics, synthetic biology, and therapeutic design.',
    imageUrl: 'https://images.unsplash.com/photo-1587329828741-9439b33a2a7a?q=80&w=1974&auto=format&fit=crop',
    hasDataViz: true,
  },
];

const DataFlowPoint: React.FC<{ delay: number }> = ({ delay }) => (
  <motion.div
    className="absolute w-2 h-2 bg-primary rounded-full"
    style={{ top: `${Math.random() * 80 + 10}%`, left: '-4px' }}
    initial={{ x: 0, opacity: 0 }}
    animate={{ x: '100%', opacity: [0, 1, 1, 0] }}
    transition={{
      duration: 3 + Math.random() * 2,
      delay,
      repeat: Infinity,
      ease: 'linear',
    }}
  />
);

const InteractiveBuildingShowcase: React.FC = () => {
  console.log('InteractiveBuildingShowcase loaded');
  const [selectedBuilding, setSelectedBuilding] = useState<BuildingData>(campusBuildings[0]);
  const [showDataViz, setShowDataViz] = useState(false);

  useEffect(() => {
    // Reset viz toggle when building changes
    setShowDataViz(false);
  }, [selectedBuilding]);

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Building Selection */}
        <aside className="lg:col-span-4 xl:col-span-3">
          <h2 className="text-2xl font-heading mb-4 text-foreground">Explore Our Campus</h2>
          <div className="space-y-2">
            {campusBuildings.map((building) => (
              <Button
                key={building.id}
                variant={selectedBuilding.id === building.id ? 'secondary' : 'ghost'}
                className="w-full justify-start text-left h-auto py-3"
                onClick={() => setSelectedBuilding(building)}
              >
                <Building className="mr-3 h-5 w-5 flex-shrink-0" />
                <span className="flex-grow font-body font-medium">{building.name}</span>
                {selectedBuilding.id === building.id && (
                  <ChevronRight className="ml-2 h-5 w-5 text-primary" />
                )}
              </Button>
            ))}
          </div>
        </aside>

        {/* Right Column: Interactive Stage */}
        <main className="lg:col-span-8 xl:col-span-9">
          <Card className="w-full h-full shadow-lg">
            <CardHeader>
              <CardTitle className="font-heading text-3xl text-foreground">{selectedBuilding.name}</CardTitle>
              <CardDescription className="font-body text-muted-foreground pt-1">{selectedBuilding.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video relative overflow-hidden rounded-md bg-muted">
                <img
                  src={selectedBuilding.imageUrl}
                  alt={`Architectural view of ${selectedBuilding.name}`}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                />
                <AnimatePresence>
                  {showDataViz && selectedBuilding.hasDataViz && (
                    <motion.div
                      className="absolute inset-0 w-full h-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Simulate data flow animation */}
                      {Array.from({ length: 15 }).map((_, i) => (
                        <DataFlowPoint key={i} delay={i * 0.25} />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center space-x-3">
                <Switch
                  id="data-viz-toggle"
                  checked={showDataViz}
                  onCheckedChange={setShowDataViz}
                  disabled={!selectedBuilding.hasDataViz}
                  aria-label="Toggle data visualization"
                />
                <Label htmlFor="data-viz-toggle" className="font-body flex items-center gap-2">
                  <Network className="h-4 w-4" />
                  <span>
                    {selectedBuilding.hasDataViz
                      ? 'Show Conceptual Data Flow'
                      : 'Data Flow Not Available'}
                  </span>
                </Label>
              </div>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default InteractiveBuildingShowcase;