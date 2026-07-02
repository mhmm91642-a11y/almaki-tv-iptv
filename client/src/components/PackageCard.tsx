import { Button } from "@/components/ui/button";
import { Package } from "@/data/packages";
import { useCurrency } from "@/hooks/useCurrency";

interface PackageCardProps {
  pkg: Package;
  onSelectPlan: (pkg: Package, duration: "3" | "6" | "12") => void;
}

export function PackageCard({ pkg, onSelectPlan }: PackageCardProps) {
  const { convertPrice } = useCurrency();

  // Compact 2-Column Grid Layout
  // Each card shows: Logo, Name, and all durations in a compact horizontal layout
  
  const durations: Array<{ key: "3" | "6" | "12"; label: string }> = [
    { key: "3", label: "3 شهور" },
    { key: "6", label: "6 شهور" },
    { key: "12", label: "سنة" },
  ];

  return (
    <div className="bg-card border-2 border-primary rounded-xl p-4 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      {/* Header with Logo and Name */}
      <div className="text-center mb-4 pb-4 border-b border-border">
        {pkg.logo && (
          <img
            src={pkg.logo}
            alt={pkg.name}
            className="h-12 w-auto mx-auto mb-2 object-contain"
          />
        )}
        <h3 className="text-lg font-bold text-foreground">{pkg.name}</h3>
      </div>

      {/* Pricing Options - Compact Layout */}
      <div className="space-y-2 flex-1">
        {durations.map(({ key, label }) => {
          const price = pkg.prices[key];
          let originalPrice: number | undefined;
          
          // Get original price based on duration
          if (key === "3") {
            originalPrice = pkg.originalPrice3;
          } else if (key === "6") {
            originalPrice = pkg.originalPrice6;
          } else if (key === "12") {
            originalPrice = pkg.originalPrice12;
          }
          
          const converted = convertPrice(price);
          const convertedOriginal = originalPrice ? convertPrice(originalPrice) : null;

          return (
            <div
              key={key}
              className="flex items-center justify-between p-2 bg-secondary rounded-lg border border-border hover:border-primary transition-colors text-sm"
            >
              <div className="text-right flex-1">
                <p className="font-medium text-foreground">{label}</p>
                {convertedOriginal && (
                  <p className="text-xs text-muted-foreground line-through">
                    {convertedOriginal.amount} {convertedOriginal.symbol}
                  </p>
                )}
              </div>
              <div className="text-left mx-2">
                <p className="font-bold text-primary">
                  {converted.amount} {converted.symbol}
                </p>
              </div>
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs px-2 py-1 h-auto"
                onClick={() => onSelectPlan(pkg, key)}
              >
                اختر
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
