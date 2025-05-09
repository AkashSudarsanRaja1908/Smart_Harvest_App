
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  ChartBar, 
  ChartPie, 
  Coins, 
  GraduationCap, 
  List, 
  Settings 
} from "lucide-react";

type NavItem = {
  title: string;
  icon: React.ReactNode;
  href: string;
};

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { title: "Dashboard", icon: <ChartBar className="h-5 w-5" />, href: "/" },
    { title: "Portfolio", icon: <ChartPie className="h-5 w-5" />, href: "/portfolio" },
    { title: "Recommendations", icon: <Coins className="h-5 w-5" />, href: "/recommendations" },
    { title: "Learn", icon: <GraduationCap className="h-5 w-5" />, href: "/learn" },
    { title: "Settings", icon: <Settings className="h-5 w-5" />, href: "/settings" },
  ];
  
  const NavLinkItem = ({ item }: { item: NavItem }) => (
    <NavLink
      to={item.href}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
          isActive
            ? "bg-purple text-white"
            : "text-gray-dark hover:bg-purple-light hover:text-purple-dark"
        )
      }
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {item.icon}
      <span>{item.title}</span>
    </NavLink>
  );

  return (
    <>
      {/* Desktop navigation */}
      <div className="hidden lg:flex lg:flex-col">
        <div className="flex h-14 items-center border-b px-6">
          <div className="flex items-center gap-2">
            <Coins className="h-6 w-6 text-purple" />
            <span className="text-xl font-semibold">Smart Harvest</span>
          </div>
        </div>
        <div className="flex-1 overflow-auto py-4">
          <nav className="grid gap-1 px-2">
            {navItems.map((item) => (
              <NavLinkItem key={item.href} item={item} />
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="lg:hidden">
        <div className="flex h-14 items-center justify-between border-b px-4">
          <div className="flex items-center gap-2">
            <Coins className="h-6 w-6 text-purple" />
            <span className="text-xl font-semibold">Smart Harvest</span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-md p-2 hover:bg-purple-light"
          >
            <List className="h-6 w-6" />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute inset-x-0 top-14 z-50 animate-fade-in bg-white p-2 shadow-md">
            <nav className="grid gap-1">
              {navItems.map((item) => (
                <NavLinkItem key={item.href} item={item} />
              ))}
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;
