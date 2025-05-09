
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

const Settings = () => {
  return (
    <div className="container px-4 py-6 lg:px-8 lg:py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-dark mb-1">
          Settings
        </h1>
        <p className="text-gray-neutral">
          Manage your account preferences and tax harvesting settings.
        </p>
      </div>

      <div className="grid gap-8 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Update your personal information.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Smith" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" defaultValue="john.smith@example.com" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="bg-purple hover:bg-purple-dark">Save Changes</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tax Settings</CardTitle>
            <CardDescription>Configure your tax preferences for harvesting.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="taxBracket">Tax Bracket</Label>
              <Select defaultValue="25">
                <SelectTrigger id="taxBracket">
                  <SelectValue placeholder="Select your tax bracket" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10%</SelectItem>
                  <SelectItem value="12">12%</SelectItem>
                  <SelectItem value="22">22%</SelectItem>
                  <SelectItem value="24">24%</SelectItem>
                  <SelectItem value="25">25%</SelectItem>
                  <SelectItem value="32">32%</SelectItem>
                  <SelectItem value="35">35%</SelectItem>
                  <SelectItem value="37">37%</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="filingStatus">Filing Status</Label>
              <Select defaultValue="single">
                <SelectTrigger id="filingStatus">
                  <SelectValue placeholder="Select your filing status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="single">Single</SelectItem>
                  <SelectItem value="married_joint">Married Filing Jointly</SelectItem>
                  <SelectItem value="married_separate">Married Filing Separately</SelectItem>
                  <SelectItem value="head">Head of Household</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="state">State of Residence</Label>
              <Select defaultValue="ca">
                <SelectTrigger id="state">
                  <SelectValue placeholder="Select your state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ca">California</SelectItem>
                  <SelectItem value="ny">New York</SelectItem>
                  <SelectItem value="tx">Texas</SelectItem>
                  <SelectItem value="fl">Florida</SelectItem>
                  {/* More states would be added here */}
                </SelectContent>
              </Select>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="autoHarvest" className="font-medium">
                  Automatic Harvesting
                </Label>
                <p className="text-sm text-gray-neutral">
                  Allow the system to automatically execute tax harvesting when advantageous.
                </p>
              </div>
              <Switch id="autoHarvest" defaultChecked={false} />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="notifications" className="font-medium">
                  Harvest Notifications
                </Label>
                <p className="text-sm text-gray-neutral">
                  Receive alerts when new harvesting opportunities are identified.
                </p>
              </div>
              <Switch id="notifications" defaultChecked={true} />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="bg-purple hover:bg-purple-dark">Save Tax Settings</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
