import { Button } from "@/components/ui/button";
import { GlobalFooter } from "@/components/GlobalFooter";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { useLocation } from "wouter";

export default function ActivationAndroid() {
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
          <h1 className="text-2xl font-bold text-primary">9kpro TV</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">
            طريقة التفعيل للشاشات الذكية
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-8">
            Google TV، Android، وأجهزة الشاومي
          </p>

          <div className="space-y-8">
            {/* Method 1: Play Store */}
            <div className="bg-card border-2 border-primary rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                الطريقة الأولى: متجر Play Store
              </h3>
              <ol className="space-y-4 text-foreground">
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-lg">1.</span>
                  <span>افتح متجر Play Store على جهازك</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-lg">2.</span>
                  <span>ابحث عن "9kpro TV" في شريط البحث</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-lg">3.</span>
                  <span>اضغط على التطبيق وقم بتثبيته</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-lg">4.</span>
                  <span>افتح التطبيق وقم بتسجيل الدخول ببيانات اشتراكك</span>
                </li>
              </ol>
            </div>

            {/* Method 2: Downloader App */}
            <div className="bg-card border-2 border-primary rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                الطريقة الثانية: تطبيق Downloader
              </h3>
              <ol className="space-y-4 text-foreground">
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-lg">1.</span>
                  <span>قم بتثبيت تطبيق Downloader من متجر Play Store</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-lg">2.</span>
                  <span>افتح التطبيق وادخل الكود التالي:</span>
                </li>
                <li className="bg-secondary p-4 rounded-lg border border-border text-center">
                  <span className="text-2xl font-bold text-primary">7526997</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-lg">3.</span>
                  <span>سيتم تحميل التطبيق تلقائياً وتثبيته</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-lg">4.</span>
                  <span>قم بتسجيل الدخول ببيانات اشتراكك</span>
                </li>
              </ol>
            </div>

            {/* Features */}
            <div className="bg-secondary border-2 border-primary rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                المميزات المتاحة
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-4xl mb-2">📱</div>
                  <p className="font-medium">دعم كامل</p>
                  <p className="text-sm text-muted-foreground">
                    لجميع أجهزة Android
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">⚡</div>
                  <p className="font-medium">سرعة فائقة</p>
                  <p className="text-sm text-muted-foreground">
                    بث بدون تقطيع
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🎬</div>
                  <p className="font-medium">محتوى غني</p>
                  <p className="text-sm text-muted-foreground">
                    آلاف القنوات والأفلام
                  </p>
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
                href="https://wa.me/966580928565?text=أحتاج مساعدة في التفعيل"
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
