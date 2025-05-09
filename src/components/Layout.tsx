
import { Button } from "@/components/ui/button";
import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "@/contexts/ThemeContext";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { resolvedTheme } = useTheme();

  return (
    <div className={`flex min-h-screen-dvh ${resolvedTheme}`}>
      <div className="lg:w-64 lg:flex-shrink-0 lg:border-r">
        <Navigation />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex justify-end items-center p-4 border-b">
          <div className="flex gap-2 items-center">
            <ThemeToggle />
          </div>
        </div>
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
