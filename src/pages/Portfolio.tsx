
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { mockAssets, portfolioSummary } from "@/data/mockData";

const Portfolio = () => {
  return (
    <div className="container px-4 py-6 lg:px-8 lg:py-8 max-w-7xl">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-dark mb-1">Portfolio</h1>
          <p className="text-gray-neutral">
            View and manage your investment portfolio.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button className="bg-purple hover:bg-purple-dark">
            Add New Asset
          </Button>
        </div>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Portfolio Summary</CardTitle>
          <CardDescription>Overview of your current investments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="text-sm text-gray-neutral">Total Value</p>
              <p className="text-2xl font-bold">${portfolioSummary.totalValue.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-neutral">Total Gain/Loss</p>
              <p className={`text-2xl font-bold ${portfolioSummary.totalGainLoss >= 0 ? 'text-green-600' : 'text-red'}`}>
                ${portfolioSummary.totalGainLoss.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-neutral">Harvest Opportunities</p>
              <p className="text-2xl font-bold">{portfolioSummary.totalHarvestOpportunities}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4">Asset</th>
              <th className="text-right py-3 px-4">Quantity</th>
              <th className="text-right py-3 px-4">Cost Basis</th>
              <th className="text-right py-3 px-4">Current Value</th>
              <th className="text-right py-3 px-4">Gain/Loss</th>
              <th className="text-right py-3 px-4">% Change</th>
            </tr>
          </thead>
          <tbody>
            {mockAssets.map((asset) => (
              <tr key={asset.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4">
                  <div>
                    <div className="font-medium">{asset.name}</div>
                    <div className="text-sm text-gray-neutral">{asset.ticker}</div>
                  </div>
                </td>
                <td className="text-right py-3 px-4">{asset.quantity}</td>
                <td className="text-right py-3 px-4">${asset.costBasis.toLocaleString()}</td>
                <td className="text-right py-3 px-4">${asset.currentValue.toLocaleString()}</td>
                <td className={`text-right py-3 px-4 ${asset.gainLoss >= 0 ? 'text-green-600' : 'text-red'}`}>
                  ${asset.gainLoss.toLocaleString()}
                </td>
                <td className={`text-right py-3 px-4 ${asset.gainLossPercentage >= 0 ? 'text-green-600' : 'text-red'}`}>
                  {asset.gainLossPercentage.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Portfolio;
