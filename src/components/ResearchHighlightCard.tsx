import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from 'lucide-react';

interface ResearchHighlightCardProps {
  title: string;
  authors: string[];
  abstract: string;
  publicationLink: string;
}

const ResearchHighlightCard: React.FC<ResearchHighlightCardProps> = ({
  title,
  authors,
  abstract,
  publicationLink,
}) => {
  console.log('ResearchHighlightCard loaded for:', title);

  return (
    <Card className="flex flex-col h-full bg-card hover:border-primary transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-2 rounded-md mt-1">
            <FileText className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <CardTitle className="font-heading text-xl leading-tight">
              {title}
            </CardTitle>
            <CardDescription className="text-muted-foreground pt-2">
              By {authors.join(', ')}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-foreground/80 line-clamp-4">
          {abstract}
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="p-0 h-auto">
          <a href={publicationLink} target="_blank" rel="noopener noreferrer">
            Read Publication
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResearchHighlightCard;