
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HarvestOpportunity, Asset } from "@/data/types";
import { ChartPie, BadgePercent, Check } from "lucide-react";
import { toast } from "sonner";

interface OpportunityCardProps {
  opportunity: HarvestOpportunity;
  asset: Asset;
}

const OpportunityCard = ({ opportunity, asset }: OpportunityCardProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isHarvested, setIsHarvested] = useState(false);

  const riskColor = {
    Low: "bg-blue-light text-blue",
    Medium: "bg-orange-light text-orange",
    High: "bg-red/10 text-red",
  }[opportunity.riskLevel];

  const handleHarvestClick = () => {
    setIsProcessing(true);
    // Simulate processing delay
    setTimeout(() => {
      setIsProcessing(false);
      setIsHarvested(true);
      toast.success(`Successfully harvested tax losses for ${asset.name}`, {
        description: `You saved $${opportunity.potentialSavings.toLocaleString()} in taxes!`,
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold">
            {asset.name} ({asset.ticker})
          </CardTitle>
          <Badge variant="outline" className={riskColor}>
            {opportunity.riskLevel} Risk
          </Badge>
        </div>
        <CardDescription className="flex items-center gap-1.5">
          <ChartPie className="h-4 w-4" />
          {asset.category}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-neutral">Current Loss</p>
            <p className="text-lg font-medium text-red">
              ${Math.abs(asset.gainLoss).toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-neutral">Tax Savings</p>
            <p className="text-lg font-medium text-purple">
              ${opportunity.potentialSavings.toLocaleString()}
            </p>
          </div>
        </div>
        <p className="text-sm">{opportunity.recommendation}</p>
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <div className="flex items-center text-sm text-gray-neutral">
          <BadgePercent className="h-4 w-4 mr-1" />
          {opportunity.taxRate}% tax rate
        </div>
        {isHarvested ? (
          <Button size="sm" variant="outline" className="bg-green-100 text-green-700 border-green-300 hover:bg-green-200" disabled>
            <Check className="h-4 w-4 mr-1" /> Harvested
          </Button>
        ) : (
          <Button 
            size="sm" 
            variant="secondary" 
            className="bg-purple text-white hover:bg-purple-dark"
            onClick={handleHarvestClick}
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : "Harvest Now"}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default OpportunityCard;
