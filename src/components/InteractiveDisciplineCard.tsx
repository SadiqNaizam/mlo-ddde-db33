import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, User, FlaskConical } from "lucide-react";

interface InteractiveDisciplineCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  slug: string; // e.g., "artificial-intelligence"
}

const InteractiveDisciplineCard: React.FC<InteractiveDisciplineCardProps> = ({
  icon: Icon,
  title,
  description,
  slug,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log('InteractiveDisciplineCard loaded for:', title);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <Card
      className="relative aspect-square w-full overflow-hidden rounded-lg group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="flex flex-col items-center justify-center h-full p-6 text-center">
        {/* Initial Static Content */}
        <motion.div
          animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 0.95 : 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex flex-col items-center justify-center"
        >
          <Icon className="w-16 h-16 mb-4 text-primary" strokeWidth={1.5} />
          <h3 className="text-2xl font-heading font-semibold text-foreground">
            {title}
          </h3>
        </motion.div>

        {/* Hover Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-background/90 backdrop-blur-sm p-6 flex flex-col justify-center items-center text-center"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={overlayVariants}
            >
              <motion.h3
                className="text-2xl font-heading font-semibold text-foreground mb-3"
                variants={itemVariants}
              >
                {title}
              </motion.h3>
              <motion.p
                className="text-muted-foreground mb-6 text-sm"
                variants={itemVariants}
              >
                {description}
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-2 w-full justify-center"
                variants={itemVariants}
              >
                <Button asChild variant="secondary" size="sm">
                  <Link to={`/faculty?discipline=${slug}`}>
                    <User className="mr-2 h-4 w-4" />
                    Faculty
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="sm">
                  <Link to={`/academics-research?discipline=${slug}&view=labs`}>
                    <FlaskConical className="mr-2 h-4 w-4" />
                    Labs
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="sm">
                  <Link to={`/academics-research?discipline=${slug}`}>
                    <BookOpen className="mr-2 h-4 w-4" />
                    Research
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

export default InteractiveDisciplineCard;