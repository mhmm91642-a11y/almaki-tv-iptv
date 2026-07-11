import { useState, useEffect, useRef } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}

export function LazyImage({ src, alt, className = "", placeholder }: LazyImageProps) {
  const [imageSrc, setImageSrc] = useState<string>(placeholder || "");
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver | undefined;

    if (imageRef && imageSrc === placeholder) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setImageSrc(src);
              if (observer) {
                observer.unobserve(entry.target);
              }
            }
          });
        },
        { rootMargin: "50px" }
      );

      observer.observe(imageRef);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [imageRef, imageSrc, placeholder, src]);

  return (
    <img
      ref={setImageRef}
      src={imageSrc || src}
      alt={alt}
      className={`${className} transition-opacity duration-300 gpu-accelerated`}
      loading="lazy"
      decoding="async"
    />
  );
}
