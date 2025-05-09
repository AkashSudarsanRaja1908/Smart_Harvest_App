
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OpportunityCard from "@/components/OpportunityCard";
import { mockHarvestOpportunities, getAssetById } from "@/data/mockData";
import { Search, FilterX } from "lucide-react";

const Recommendations = () => {
  const [filter, setFilter] = useState("all");
  
  const filteredOpportunities = filter === "all" 
    ? mockHarvestOpportunities 
    : mockHarvestOpportunities.filter(opp => opp.riskLevel.toLowerCase() === filter);

  return (
    <div className="container px-4 py-6 lg:px-8 lg:py-8 max-w-7xl">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-dark mb-1">
            Harvest Recommendations
          </h1>
          <p className="text-gray-neutral">
            Personalized recommendations to optimize your tax situation.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <Tabs defaultValue="opportunities" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
            <TabsTrigger value="history">Action History</TabsTrigger>
          </TabsList>
          <TabsContent value="opportunities" className="mt-6">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-neutral" />
                <Input
                  placeholder="Search recommendations..."
                  className="pl-9"
                />
              </div>
              <div className="flex gap-2">
                <div className="w-40">
                  <Select value={filter} onValueChange={setFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Risk Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Risks</SelectItem>
                      <SelectItem value="low">Low Risk</SelectItem>
                      <SelectItem value="medium">Medium Risk</SelectItem>
                      <SelectItem value="high">High Risk</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setFilter("all")}
                  disabled={filter === "all"}
                >
                  <FilterX className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredOpportunities.map((opportunity) => {
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
              {filteredOpportunities.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-medium mb-2">No recommendations found with the selected filters</p>
                  <Button 
                    variant="outline" 
                    onClick={() => setFilter("all")}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="history">
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No harvest actions yet</h3>
              <p className="text-gray-neutral mb-4">
                Your tax harvest actions will appear here once you've completed some recommendations.
              </p>
              <Button className="bg-purple hover:bg-purple-dark">
                View Recommendations
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Recommendations;
