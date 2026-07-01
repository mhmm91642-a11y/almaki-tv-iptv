import { useState, useEffect } from "react";

export function useNumberTicker(
  targetNumber: number,
  duration: number = 1000,
  shouldStart: boolean = true
) {
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    if (!shouldStart) {
      setDisplayNumber(0);
      return;
    }

    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      const currentNumber = Math.floor(targetNumber * easeOutQuad);

      setDisplayNumber(currentNumber);

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [targetNumber, duration, shouldStart]);

  return displayNumber;
}
