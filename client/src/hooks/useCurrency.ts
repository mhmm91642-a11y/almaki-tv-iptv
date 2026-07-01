import { useState, useEffect } from "react";
import { currencyRates, geoCountryCurrency } from "@/data/packages";

export function useCurrency() {
  const [currency, setCurrency] = useState<string>("SAR");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Try to detect user's country using IP
    const detectCurrency = async () => {
      try {
        // Using a free IP geolocation API
        const response = await fetch("https://ipapi.co/json/", {
          method: "GET",
        });
        const data = await response.json();
        const countryCode = data.country_code;
        const detectedCurrency = geoCountryCurrency[countryCode] || "SAR";
        setCurrency(detectedCurrency);
      } catch (error) {
        // Default to SAR if detection fails
        setCurrency("SAR");
      } finally {
        setLoading(false);
      }
    };

    detectCurrency();
  }, []);

  const convertPrice = (price: number): { amount: number; symbol: string } => {
    const rate = currencyRates[currency]?.rate || 1;
    const symbol = currencyRates[currency]?.symbol || "ر.س";
    return {
      amount: Math.round(price * rate),
      symbol,
    };
  };

  return {
    currency,
    setCurrency,
    convertPrice,
    loading,
    availableCurrencies: Object.keys(currencyRates),
  };
}
