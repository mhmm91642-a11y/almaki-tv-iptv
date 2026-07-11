import { Button } from "@/components/ui/button";
import { GlobalFooter } from "@/components/GlobalFooter";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { useLocation } from "wouter";

export default function ActivationSamsungLG() {
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
            طريقة التفعيل للشاشات الذكية
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-8">
            Samsung و LG
          </p>

          <div className="space-y-8">
            {/* Announcement */}
            <div className="bg-secondary border-2 border-primary rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                خبر سار! 🎉
              </h3>
              <p className="text-foreground text-lg">
                يسعدنا إبلاغكم بأنه أصبح بإمكانكم الآن إضافة اشتراككم على تطبيق
                <span className="text-primary font-bold"> 0Player </span>
                لشاشات Samsung و LG
                <span className="text-primary font-bold"> مجانًا</span>
              </p>
            </div>

            {/* Supported Models */}
            <div className="bg-card border-2 border-primary rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                الأجهزة المدعومة
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-secondary p-6 rounded-lg border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    شاشات Samsung
                  </h4>
                  <p className="text-muted-foreground">
                    الإصدارات من 2022 وما فوق
                  </p>
                </div>
                <div className="bg-secondary p-6 rounded-lg border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    شاشات LG
                  </h4>
                  <p className="text-muted-foreground">
                    الإصدارات من 2016 وما فوق
                  </p>
                </div>
              </div>
            </div>

            {/* Installation Steps */}
            <div className="bg-card border-2 border-primary rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                خطوات التثبيت والتفعيل
              </h3>
              <ol className="space-y-6 text-foreground">
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-lg min-w-[2rem]">
                    1.
                  </span>
                  <div>
                    <p className="font-medium">افتح تطبيق 0Player على شاشتك</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      إذا لم تكن قد ثبتت التطبيق بعد، يمكنك تحميله من متجر
                      التطبيقات الخاص بجهازك
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="text-primary font-bold text-lg min-w-[2rem]">
                    2.
                  </span>
                  <div>
                    <p className="font-medium">انتقل إلى قسم "Playlist"</p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="text-primary font-bold text-lg min-w-[2rem]">
                    3.
                  </span>
                  <div>
                    <p className="font-medium">
                      اضغط على "Add Playlist" (أسفل اليمين)
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="text-primary font-bold text-lg min-w-[2rem]">
                    4.
                  </span>
                  <div>
                    <p className="font-medium mb-3">
                      أدخل البيانات التالية:
                    </p>
                    <div className="bg-secondary p-4 rounded-lg border border-border space-y-3">
                      <div>
                        <p className="text-sm text-muted-foreground">الاسم:</p>
                        <p className="font-medium">أي اسم تختاره</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          رمز البوابة (Portal Code):
                        </p>
                        <p className="font-bold text-primary text-lg">
                          53222236
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          اسم المستخدم:
                        </p>
                        <p className="font-medium">بيانات اشتراكك</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          كلمة المرور:
                        </p>
                        <p className="font-medium">بيانات اشتراكك</p>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="text-primary font-bold text-lg min-w-[2rem]">
                    5.
                  </span>
                  <div>
                    <p className="font-medium">انقر على "Save" (حفظ)</p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="text-primary font-bold text-lg min-w-[2rem]">
                    6.
                  </span>
                  <div>
                    <p className="font-medium">
                      ابدأ المشاهدة واستمتع بآلاف القنوات والأفلام!
                    </p>
                  </div>
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
                  <div className="text-4xl mb-2">💰</div>
                  <p className="font-medium">مجاني تماماً</p>
                  <p className="text-sm text-muted-foreground">
                    لا توجد رسوم إضافية
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
                href="https://wa.me/966580928565?text=أحتاج مساعدة في التفعيل على Samsung أو LG"
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
