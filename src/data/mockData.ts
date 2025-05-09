
import { Asset, HarvestOpportunity, EducationContent } from "./types";

export const mockAssets: Asset[] = [
  {
    id: "asset-1",
    name: "Apple Inc.",
    ticker: "AAPL",
    quantity: 10,
    costBasis: 150 * 10,
    currentValue: 175 * 10,
    gainLoss: (175 - 150) * 10,
    gainLossPercentage: ((175 - 150) / 150) * 100,
    category: "Stock",
  },
  {
    id: "asset-2",
    name: "Tesla Inc.",
    ticker: "TSLA",
    quantity: 5,
    costBasis: 220 * 5,
    currentValue: 180 * 5,
    gainLoss: (180 - 220) * 5,
    gainLossPercentage: ((180 - 220) / 220) * 100,
    category: "Stock",
  },
  {
    id: "asset-3",
    name: "Vanguard Total Stock Market ETF",
    ticker: "VTI",
    quantity: 15,
    costBasis: 200 * 15,
    currentValue: 210 * 15,
    gainLoss: (210 - 200) * 15,
    gainLossPercentage: ((210 - 200) / 200) * 100,
    category: "ETF",
  },
  {
    id: "asset-4",
    name: "Bitcoin",
    ticker: "BTC",
    quantity: 0.5,
    costBasis: 50000 * 0.5,
    currentValue: 40000 * 0.5,
    gainLoss: (40000 - 50000) * 0.5,
    gainLossPercentage: ((40000 - 50000) / 50000) * 100,
    category: "Crypto",
  },
  {
    id: "asset-5",
    name: "Microsoft Corporation",
    ticker: "MSFT",
    quantity: 8,
    costBasis: 280 * 8,
    currentValue: 340 * 8,
    gainLoss: (340 - 280) * 8,
    gainLossPercentage: ((340 - 280) / 280) * 100,
    category: "Stock",
  },
  {
    id: "asset-6",
    name: "Fidelity Growth Fund",
    ticker: "FDGRX",
    quantity: 20,
    costBasis: 120 * 20,
    currentValue: 115 * 20,
    gainLoss: (115 - 120) * 20,
    gainLossPercentage: ((115 - 120) / 120) * 100,
    category: "Mutual Fund",
  },
];

export const mockHarvestOpportunities: HarvestOpportunity[] = [
  {
    id: "opp-1",
    assetId: "asset-2",
    potentialSavings: 600,
    harvestType: "Loss",
    taxRate: 25,
    recommendation: "Harvest losses by selling TSLA and reinvest in similar growth stocks to maintain market exposure.",
    riskLevel: "Low",
  },
  {
    id: "opp-2",
    assetId: "asset-4",
    potentialSavings: 1250,
    harvestType: "Loss",
    taxRate: 25,
    recommendation: "Harvest losses from your Bitcoin position. Consider repurchasing after the wash-sale period.",
    riskLevel: "Medium",
  },
  {
    id: "opp-3",
    assetId: "asset-6",
    potentialSavings: 125,
    harvestType: "Loss",
    taxRate: 25,
    recommendation: "Harvest losses from your mutual fund and reinvest in a similar but not substantially identical fund.",
    riskLevel: "Low",
  },
];

export const mockEducationContent: EducationContent[] = [
  {
    id: "edu-1",
    title: "Tax-Loss Harvesting Fundamentals",
    shortDescription: "Learn the basics of tax-loss harvesting and how it can benefit your portfolio.",
    timeToComplete: "5 min",
    category: "Basics",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "edu-2",
    title: "Wash-Sale Rules Explained",
    shortDescription: "Understand the IRS wash-sale rules to avoid invalidating your tax harvesting strategy.",
    timeToComplete: "8 min",
    category: "Basics",
    imageUrl: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "edu-3",
    title: "Advanced Tax Harvesting Strategies",
    shortDescription: "Discover sophisticated techniques to maximize your tax harvesting potential.",
    timeToComplete: "12 min",
    category: "Advanced",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "edu-4",
    title: "Tax Harvesting Calendar: Timing Your Strategy",
    shortDescription: "Learn the optimal times throughout the year to implement tax harvesting.",
    timeToComplete: "7 min",
    category: "Strategy",
    imageUrl: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
];

export const portfolioSummary = {
  totalValue: mockAssets.reduce((sum, asset) => sum + asset.currentValue, 0),
  totalGainLoss: mockAssets.reduce((sum, asset) => sum + asset.gainLoss, 0),
  totalHarvestOpportunities: mockHarvestOpportunities.length,
  potentialSavings: mockHarvestOpportunities.reduce((sum, opp) => sum + opp.potentialSavings, 0),
};

// Calculate yearly tax savings by summing all opportunities
export const yearlyTaxSavings = mockHarvestOpportunities.reduce(
  (sum, opp) => sum + opp.potentialSavings,
  0
);

// Helper function to get asset by ID
export const getAssetById = (id: string): Asset | undefined => {
  return mockAssets.find(asset => asset.id === id);
};
