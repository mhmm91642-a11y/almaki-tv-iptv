import { Button } from "@/components/ui/button";
import { GlobalFooter } from "@/components/GlobalFooter";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { useLocation } from "wouter";

export default function ActivationIOS() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-secondary border-b-2 border-primary">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => setLocation("/")}
            className="text-primary hover:text-primary/80 transition-colors"
          >
            ← العودة للرئيسية
          </button>
          <h1 className="text-2xl font-bold text-primary">ALMAKI TV</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">
            طريقة التفعيل للآيفون والآبل تيفي
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-8">
            iOS والآبل تيفي (Apple TV)
          </p>

          <div className="space-y-8">
            {/* App 1: Next+ */}
            <div className="bg-card border-2 border-primary rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                التطبيق الأول: Next+
              </h3>
              <div className="mb-6">
                <a
                  href="https://apps.apple.com/us/app/next/id6443335504"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full mb-4">
                    تحميل من App Store
                  </Button>
                </a>
              </div>
              <ol className="space-y-4 text-foreground">
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-lg">1.</span>
                  <span>قم بتحميل تطبيق Next+ من App Store</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-lg">2.</span>
                  <span>افتح التطبيق وانقر على "إضافة خادم جديد"</span>
                </li>
                <li className="bg-secondary p-4 rounded-lg border border-border">
                  <span className="text-primary font-bold">بيانات التسجيل:</span>
                  <div className="mt-3 space-y-2 text-sm">
                    <p>الاسم: أي اسم تختاره</p>
                    <p>اسم المستخدم: بيانات اشتراكك</p>
                    <p>كلمة المرور: بيانات اشتراكك</p>
                    <p className="text-primary font-bold">
                      رمز البوابة (Portal Code): 700
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-lg">3.</span>
                  <span>انقر على "حفظ" وابدأ المشاهدة</span>
                </li>
              </ol>
            </div>

            {/* App 2: Castora */}
            <div className="bg-card border-2 border-primary rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                التطبيق الثاني: Castora
              </h3>
              <div className="mb-6">
                <a
                  href="https://apps.apple.com/us/app/castora/id6760588570"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full mb-4">
                    تحميل من App Store
                  </Button>
                </a>
              </div>
              <ol className="space-y-4 text-foreground">
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-lg">1.</span>
                  <span>قم بتحميل تطبيق Castora من App Store</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-lg">2.</span>
                  <span>افتح التطبيق وانقر على "إضافة خادم جديد"</span>
                </li>
                <li className="bg-secondary p-4 rounded-lg border border-border">
                  <span className="text-primary font-bold">بيانات التسجيل:</span>
                  <div className="mt-3 space-y-2 text-sm">
                    <p>الاسم: أي اسم تختاره</p>
                    <p>اسم المستخدم: بيانات اشتراكك</p>
                    <p>كلمة المرور: بيانات اشتراكك</p>
                    <p className="text-primary font-bold">
                      رمز البوابة (Portal Code): 700
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-lg">3.</span>
                  <span>انقر على "حفظ" وابدأ المشاهدة</span>
                </li>
              </ol>
            </div>

            {/* Apple TV Support */}
            <div className="bg-secondary border-2 border-primary rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                دعم أجهزة Apple TV
              </h3>
              <p className="text-foreground mb-4">
                يمكنك استخدام نفس التطبيقات أعلاه على جهاز Apple TV الخاص بك من خلال App Store على الجهاز.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">📱</div>
                  <p className="font-medium">سهل الاستخدام</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">⚡</div>
                  <p className="font-medium">أداء عالي</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🎬</div>
                  <p className="font-medium">جودة 4K</p>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="bg-card border-2 border-primary rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                هل واجهت مشكلة؟
              </h3>
              <p className="text-foreground mb-6">
                فريق الدعم الفني جاهز لمساعدتك 24/7
              </p>
              <a
                href="https://wa.me/966580928565?text=أحتاج مساعدة في التفعيل على iOS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg font-bold">
                  تواصل مع الدعم
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
      <GlobalFooter />
    </div>
  );
}
