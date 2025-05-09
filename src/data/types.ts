
export type Asset = {
  id: string;
  name: string;
  ticker: string;
  quantity: number;
  costBasis: number;
  currentValue: number;
  gainLoss: number;
  gainLossPercentage: number;
  category: "Stock" | "ETF" | "Crypto" | "Mutual Fund";
};

export type HarvestOpportunity = {
  id: string;
  assetId: string;
  potentialSavings: number;
  harvestType: "Loss" | "Gain";
  taxRate: number;
  recommendation: string;
  riskLevel: "Low" | "Medium" | "High";
};

export type EducationContent = {
  id: string;
  title: string;
  shortDescription: string;
  timeToComplete: string;
  category: "Basics" | "Advanced" | "Strategy";
  imageUrl?: string;
};
