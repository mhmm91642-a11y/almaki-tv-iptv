export interface Package {
  id: string;
  name: string;
  description: string;
  logo?: string;
  plans: Plan[];
  features: Feature[];
  channels: number;
  movies: number;
  series: number;
}

export interface Plan {
  duration: string;
  durationMonths: number;
  price: number;
  originalPrice?: number;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const packages: Package[] = [
  {
    id: "everest",
    name: "سيرفر إيفرست",
    description: "الاشتراك الأفضل",
    plans: [
      { duration: "6 شهور", durationMonths: 6, price: 130 },
      { duration: "سنة كاملة", durationMonths: 12, price: 190, originalPrice: 250 },
      { duration: "3 شهور", durationMonths: 3, price: 80 },
    ],
    features: [
      { icon: "⚡", title: "ثبات أسطوري", description: "بث مستقر بدون تقطيع" },
      { icon: "📚", title: "مكتبة ضخمة", description: "آلاف القنوات والأفلام" },
      { icon: "🎬", title: "جودة عالية", description: "دعم 4K و Ultra HD" },
    ],
    channels: 10000,
    movies: 30000,
    series: 13000,
  },
  {
    id: "strong",
    name: "اشتراكات سترونق 4K",
    description: "أعلى دقة بث 4K حقيقية",
    plans: [
      { duration: "6 شهور", durationMonths: 6, price: 130 },
      { duration: "سنة كاملة", durationMonths: 12, price: 199 },
      { duration: "3 شهور", durationMonths: 3, price: 80 },
    ],
    features: [
      { icon: "🎥", title: "دقة 4K", description: "أعلى جودة متاحة" },
      { icon: "⚡", title: "سرعة فائقة", description: "تحميل فوري" },
      { icon: "🌍", title: "محتوى عالمي", description: "قنوات من جميع أنحاء العالم" },
    ],
    channels: 10000,
    movies: 70000,
    series: 15000,
  },
  {
    id: "hulk",
    name: "اشتراكات هولك",
    description: "الباقة العملاقة للأفلام والمباريات",
    plans: [
      { duration: "6 شهور", durationMonths: 6, price: 150 },
      { duration: "سنة كاملة", durationMonths: 12, price: 250 },
      { duration: "3 شهور", durationMonths: 3, price: 100 },
    ],
    features: [
      { icon: "🏆", title: "مباريات حية", description: "أحدث المباريات الرياضية" },
      { icon: "🎬", title: "أفلام جديدة", description: "أحدث الإصدارات" },
      { icon: "📺", title: "مسلسلات", description: "مسلسلات عالمية وعربية" },
    ],
    channels: 10000,
    movies: 33000,
    series: 7000,
  },
  {
    id: "falcon",
    name: "اشتراكات فالكون الأصلي",
    description: "الاشتراك العصري الغني عن التعريف",
    plans: [
      { duration: "6 شهور", durationMonths: 6, price: 200 },
      { duration: "سنة كاملة", durationMonths: 12, price: 300 },
      { duration: "3 شهور", durationMonths: 3, price: 130 },
    ],
    features: [
      { icon: "👨‍👩‍👧‍👦", title: "للعائلة", description: "محتوى آمن للأطفال" },
      { icon: "🎯", title: "مستقر", description: "خدمة موثوقة 24/7" },
      { icon: "💎", title: "متميز", description: "جودة عالية وسعر مناسب" },
    ],
    channels: 7000,
    movies: 24000,
    series: 10000,
  },
  {
    id: "vulture",
    name: "اشتراكات فولتشر",
    description: "الاشتراك الترفيهي المتميز",
    plans: [
      { duration: "6 شهور", durationMonths: 6, price: 99 },
      { duration: "سنة كاملة", durationMonths: 12, price: 149 },
      { duration: "3 شهور", durationMonths: 3, price: 69 },
    ],
    features: [
      { icon: "💰", title: "سعر اقتصادي", description: "أفضل قيمة مقابل السعر" },
      { icon: "🎮", title: "ترفيه متنوع", description: "محتوى متنوع وممتع" },
      { icon: "📱", title: "متعدد الأجهزة", description: "استخدم على عدة أجهزة" },
    ],
    channels: 10000,
    movies: 25000,
    series: 15000,
  },
  {
    id: "smarters",
    name: "تطبيق Smarters Pro",
    description: "التطبيق الأشهر والأسهل تشغيلاً",
    plans: [
      { duration: "سنة كاملة", durationMonths: 12, price: 99 },
    ],
    features: [
      { icon: "📲", title: "تطبيق سهل", description: "واجهة بسيطة وسهلة الاستخدام" },
      { icon: "⭐", title: "الأشهر", description: "الخيار الأول للملايين" },
      { icon: "🚀", title: "سريع", description: "أداء ممتاز وسلس" },
    ],
    channels: 10000,
    movies: 33000,
    series: 7000,
  },
];

export const currencyRates: Record<string, { symbol: string; rate: number }> = {
  SAR: { symbol: "ر.س", rate: 1 },
  USD: { symbol: "$", rate: 0.27 },
  AED: { symbol: "د.إ", rate: 0.99 },
  KWD: { symbol: "د.ك", rate: 0.083 },
  QAR: { symbol: "ر.ق", rate: 0.98 },
  BHD: { symbol: "د.ب", rate: 0.1 },
  OMR: { symbol: "ر.ع.", rate: 0.104 },
  EGP: { symbol: "ج.م", rate: 8.5 },
};

export const geoCountryCurrency: Record<string, string> = {
  SA: "SAR",
  AE: "AED",
  KW: "KWD",
  QA: "QAR",
  BH: "BHD",
  OM: "OMR",
  EG: "EGP",
  US: "USD",
  GB: "USD",
  FR: "USD",
  DE: "USD",
};
