import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Package, Plan } from "@/data/packages";
import { useCurrency } from "@/hooks/useCurrency";
import { useNumberTicker } from "@/hooks/useNumberTicker";

interface ProductDetailDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  pkg: Package | null;
  plan: Plan | null;
}

export function ProductDetailDrawer({
  open,
  onOpenChange,
  pkg,
  plan,
}: ProductDetailDrawerProps) {
  const { convertPrice } = useCurrency();
  const channelsCount = useNumberTicker(pkg?.channels || 0, 1500, open);
  const moviesCount = useNumberTicker(pkg?.movies || 0, 1500, open);
  const seriesCount = useNumberTicker(pkg?.series || 0, 1500, open);

  if (!pkg || !plan) return null;

  const converted = convertPrice(plan.price);
  const whatsappNumber = "+966580928565";
  const message = `مرحباً 9kpro TV، أود الاشتراك في الباقة التالية:
🔹 السيرفر: ${pkg.name}
⏱️ المدة: ${plan.duration}
💰 السعر: ${converted.amount} ${converted.symbol}
يرجى تزويدي بطرق الدفع المتاحة لتفعيل الاشتراك.`;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="bg-card border-border">
        <DrawerHeader className="border-b border-border">
          <DrawerTitle className="text-right text-primary text-2xl">
            {pkg.name} - {plan.duration}
          </DrawerTitle>
        </DrawerHeader>

        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Features Grid */}
          <div className="grid grid-cols-3 gap-4">
            {pkg.features.map((feature, idx) => (
              <div
                key={idx}
                className="text-center p-4 bg-secondary rounded-lg border border-border"
              >
                <div className="text-3xl mb-2">{feature.icon}</div>
                <p className="text-sm font-medium text-foreground">
                  {feature.title}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-4 bg-secondary p-4 rounded-lg border border-border">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">
                {channelsCount.toLocaleString("ar-SA")}
              </div>
              <p className="text-sm text-muted-foreground mt-2">قناة</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">
                {moviesCount.toLocaleString("ar-SA")}
              </div>
              <p className="text-sm text-muted-foreground mt-2">فيلم</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">
                {seriesCount.toLocaleString("ar-SA")}
              </div>
              <p className="text-sm text-muted-foreground mt-2">مسلسل</p>
            </div>
          </div>

          {/* Price Summary */}
          <div className="bg-secondary p-4 rounded-lg border-2 border-primary">
            <div className="flex justify-between items-center mb-4">
              <span className="text-foreground font-medium">السعر:</span>
              <span className="text-3xl font-bold text-primary">
                {converted.amount} {converted.symbol}
              </span>
            </div>
            {plan.originalPrice && (
              <p className="text-sm text-muted-foreground text-center">
                السعر الأصلي:{" "}
                <span className="line-through">
                  {convertPrice(plan.originalPrice).amount}{" "}
                  {convertPrice(plan.originalPrice).symbol}
                </span>
              </p>
            )}
          </div>
        </div>

        {/* Fixed Bottom Action Bar */}
        <div className="sticky bottom-0 border-t border-border bg-card p-4">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg font-bold">
              اطلب الآن عبر الواتساب
            </Button>
          </a>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
