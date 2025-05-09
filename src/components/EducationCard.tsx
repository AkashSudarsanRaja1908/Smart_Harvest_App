
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ChevronRight, X } from "lucide-react";
import { EducationContent } from "@/data/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

interface EducationCardProps {
  content: EducationContent;
}

const EducationCard = ({ content }: EducationCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const categoryColor = {
    Basics: "bg-blue-light text-blue",
    Advanced: "bg-purple-light text-purple",
    Strategy: "bg-orange-light text-orange",
  }[content.category];

  return (
    <>
      <Card className="overflow-hidden transition-all hover:shadow-md">
        <div className="relative h-36 w-full overflow-hidden">
          {content.imageUrl ? (
            <img
              src={content.imageUrl}
              alt={content.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full bg-purple-light flex items-center justify-center">
              <span className="text-purple-dark">Smart Harvest</span>
            </div>
          )}
          <Badge className={`absolute top-2 right-2 ${categoryColor}`}>
            {content.category}
          </Badge>
        </div>
        <CardHeader className="p-4 pb-2">
          <h3 className="font-semibold text-white">{content.title}</h3>
        </CardHeader>
        <CardContent className="p-4 pt-0 pb-2">
          <p className="text-sm text-gray-neutral">{content.shortDescription}</p>
        </CardContent>
        <CardFooter className="p-4 pt-2 flex justify-between items-center">
          <div className="flex items-center text-xs text-gray-neutral">
            <Clock className="mr-1 h-3 w-3" /> {content.timeToComplete}
          </div>
          <Button 
            size="sm" 
            variant="ghost" 
            className="text-purple hover:text-purple-dark hover:bg-purple-light"
            onClick={() => setIsDialogOpen(true)}
          >
            Read <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">{content.title}</DialogTitle>
            <DialogDescription className="flex items-center gap-2 mt-1">
              <Badge className={categoryColor}>{content.category}</Badge>
              <span className="text-gray-neutral text-sm flex items-center">
                <Clock className="mr-1 h-3 w-3" /> {content.timeToComplete}
              </span>
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            {content.imageUrl && (
              <div className="mb-6 rounded-lg overflow-hidden">
                <img 
                  src={content.imageUrl} 
                  alt={content.title} 
                  className="w-full h-64 object-cover" 
                />
              </div>
            )}
            
            <div className="space-y-4 text-left">
              <p className="text-lg font-medium">{content.shortDescription}</p>
              
              <p>
                This educational resource provides in-depth knowledge about {content.title.toLowerCase()}.
                The concepts covered here will help you make better decisions when implementing
                your tax harvesting strategy.
              </p>
              
              <h3 className="text-lg font-semibold mt-6">Key Takeaways</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Understanding the fundamental principles of tax-loss harvesting</li>
                <li>Learning how to identify optimal harvesting opportunities</li>
                <li>Implementing strategies that maximize tax savings</li>
                <li>Avoiding common pitfalls and regulatory issues</li>
              </ul>
              
              <p className="mt-6">
                Continue reading through our educational resources to build a comprehensive
                understanding of tax harvesting strategies and how they can benefit your
                investment portfolio.
              </p>
            </div>
          </div>
          
          <div className="flex justify-end mt-4">
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EducationCard;
