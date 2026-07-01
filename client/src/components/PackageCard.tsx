import { Button } from "@/components/ui/button";
import { Package, Plan } from "@/data/packages";
import { useCurrency } from "@/hooks/useCurrency";

interface PackageCardProps {
  pkg: Package;
  onSelectPlan: (pkg: Package, plan: Plan) => void;
}

export function PackageCard({ pkg, onSelectPlan }: PackageCardProps) {
  const { convertPrice } = useCurrency();

  return (
    <div className="bg-card border-2 border-primary rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
        <p className="text-sm text-muted-foreground">{pkg.description}</p>
      </div>

      <div className="space-y-3">
        {pkg.plans.map((plan, idx) => {
          const converted = convertPrice(plan.price);
          return (
            <div
              key={idx}
              className="flex items-center justify-between p-3 bg-secondary rounded-lg border border-border hover:border-primary transition-colors"
            >
              <div className="text-right flex-1">
                <p className="text-sm font-medium text-foreground">
                  {plan.duration}
                </p>
                {plan.originalPrice && (
                  <p className="text-xs text-muted-foreground line-through">
                    {convertPrice(plan.originalPrice).amount}{" "}
                    {convertPrice(plan.originalPrice).symbol}
                  </p>
                )}
              </div>
              <div className="text-left ml-4">
                <p className="text-lg font-bold text-primary">
                  {converted.amount} {converted.symbol}
                </p>
              </div>
              <Button
                size="sm"
                className="ml-3 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => onSelectPlan(pkg, plan)}
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
