
import { useState } from "react";
import { Button } from "@/components/ui/button";
import StatCard from "@/components/StatCard";
import OpportunityCard from "@/components/OpportunityCard";
import EducationCard from "@/components/EducationCard";
import { 
  PiggyBank, 
  BadgeDollarSign, 
  ChartBar, 
  Coins, 
  ArrowRight,
  Loader2
} from "lucide-react";
import { 
  mockHarvestOpportunities, 
  mockEducationContent,
  portfolioSummary,
  getAssetById,
  yearlyTaxSavings
} from "@/data/mockData";
import { toast } from "sonner";

const Dashboard = () => {
  const [isAnalysisRunning, setIsAnalysisRunning] = useState(false);
  const [lastAnalysisTime, setLastAnalysisTime] = useState<string | null>(null);

  const handleRunAnalysis = () => {
    setIsAnalysisRunning(true);
    
    // Simulate analysis process
    setTimeout(() => {
      setIsAnalysisRunning(false);
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      setLastAnalysisTime(timeString);
      
      toast.success("Tax Analysis Completed", {
        description: "We've found 3 new harvesting opportunities for you!",
        duration: 5000,
      });
    }, 3000);
  };

  return (
    <div className="container px-4 py-6 lg:px-8 lg:py-8 max-w-7xl">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-dark mb-1">Dashboard</h1>
          <p className="text-gray-neutral">
            Welcome back! Here's an overview of your tax harvesting opportunities.
            {lastAnalysisTime && ` Last analysis run at ${lastAnalysisTime}.`}
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button 
            className="bg-purple hover:bg-purple-dark"
            onClick={handleRunAnalysis}
            disabled={isAnalysisRunning}
          >
            {isAnalysisRunning ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Run Tax Analysis"
            )}
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8 animate-fade-in">
        <StatCard
          title="Portfolio Value"
          value={`$${portfolioSummary.totalValue.toLocaleString()}`}
          description="Updated just now"
          icon={<ChartBar className="h-4 w-4" />}
        />
        <StatCard
          title="Harvest Opportunities"
          value={portfolioSummary.totalHarvestOpportunities}
          description="Available to act on"
          icon={<PiggyBank className="h-4 w-4" />}
        />
        <StatCard
          title="Potential Tax Savings"
          value={`$${portfolioSummary.potentialSavings.toLocaleString()}`}
          description="If all opportunities are harvested"
          icon={<BadgeDollarSign className="h-4 w-4" />}
          trend="up"
        />
        <StatCard
          title="YTD Tax Impact"
          value={`$${yearlyTaxSavings.toLocaleString()}`}
          description="Estimated savings this year"
          icon={<Coins className="h-4 w-4" />}
          trend="up"
        />
      </div>

      <div className="grid gap-8 mb-8">
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-dark">Tax Harvesting Opportunities</h2>
            <Button 
              variant="ghost" 
              className="text-purple hover:text-purple-dark hover:bg-purple-light"
              asChild
            >
              <a href="/recommendations">
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mockHarvestOpportunities.map((opportunity) => {
              const asset = getAssetById(opportunity.assetId);
              if (!asset) return null;
              return (
                <OpportunityCard
                  key={opportunity.id}
                  opportunity={opportunity}
                  asset={asset}
                />
              );
            })}
          </div>
        </section>

        <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-dark">Educational Resources</h2>
            <Button 
              variant="ghost" 
              className="text-purple hover:text-purple-dark hover:bg-purple-light"
              asChild
            >
              <a href="/learn">
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {mockEducationContent.slice(0, 4).map((content) => (
              <EducationCard key={content.id} content={content} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
