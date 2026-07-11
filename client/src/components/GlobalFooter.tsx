import { Button } from "@/components/ui/button";

export function GlobalFooter() {
  const whatsappNumber = "966592360612";
  const message = "أريد الاستفسار عن اشتراكات ALMAKI TV";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer className="bg-secondary border-t-2 border-primary mt-16 shadow-lg shadow-primary/10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="text-center space-y-6 md:space-y-8">
          <h3 className="text-2xl md:text-3xl font-bold text-primary">للتواصل والاستفسار</h3>
          <p className="text-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            فريقنا متاح 24/7 للإجابة على جميع استفساراتك والمساعدة في أي استفسار
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 md:px-10 py-6 md:py-7 text-base md:text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-green-600/50">
              تواصل معنا عبر الواتساب 💬
            </Button>
          </a>
          <div className="pt-8 md:pt-10 border-t border-border">
            <p className="text-muted-foreground text-xs md:text-sm">
              © 2026 ALMAKI TV. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
