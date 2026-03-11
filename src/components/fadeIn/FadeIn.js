import React, { useEffect, useRef, useState } from "react";
import "./FadeIn.css";

export default function FadeIn({
  children,
  direction = "bottom",
  duration = 1000,
  distance = "30px",
  delay = 0,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const directionMap = {
    bottom: `translateY(${distance})`,
    top: `translateY(-${distance})`,
    left: `translateX(-${distance})`,
    right: `translateX(${distance})`,
  };

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate(0, 0)" : directionMap[direction],
    transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
  };

  return (
    <div ref={ref} className="fade-in-wrapper" style={style}>
      {children}
    </div>
  );
}
