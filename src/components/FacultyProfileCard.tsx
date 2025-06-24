import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from 'lucide-react';

interface FacultyProfileCardProps {
  name: string;
  title: string;
  department: string;
  imageUrl: string;
  profileSlug: string; // For future use with dynamic routes e.g., /faculty/john-doe
  researchInterests: string[];
}

const FacultyProfileCard: React.FC<FacultyProfileCardProps> = ({
  name,
  title,
  department,
  imageUrl,
  profileSlug,
  researchInterests
}) => {
  console.log('FacultyProfileCard loaded for:', name);

  return (
    <Card className="group relative w-full overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:shadow-xl dark:border-sidebar-border">
      <div className="relative overflow-hidden">
        <AspectRatio ratio={3 / 4}>
          <img
            src={imageUrl}
            alt={`Professional headshot of ${name}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </AspectRatio>
        <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h4 className="font-heading text-sm font-semibold text-white mb-2">Key Research</h4>
          <div className="flex flex-wrap gap-1.5">
            {researchInterests.slice(0, 3).map((interest) => (
              <Badge key={interest} variant="secondary" className="border-transparent bg-white/10 text-white backdrop-blur-sm">
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <CardContent className="p-4 bg-card">
        <h3 className="font-heading text-xl font-bold text-foreground">{name}</h3>
        <p className="font-body text-primary">{title}</p>
        <p className="font-body text-sm text-muted-foreground mt-1">{department}</p>
        
        <Link 
            to={`/faculty#${profileSlug}`} 
            className="mt-4 inline-flex items-center text-sm font-semibold text-primary transition-all group-hover:underline"
            aria-label={`View full profile for ${name}`}
        >
          View Full Profile
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default FacultyProfileCard;