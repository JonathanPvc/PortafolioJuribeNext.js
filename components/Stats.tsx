"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Applications Delivered" },
  { value: 10, suffix: "+", label: "Technologies Mastered" },
  { value: 1, suffix: "", label: "Countries Served" },
];

function useCountUp(target: number, duration = 1500, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCountUp(value, 1200, active);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setActive(true); },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all">
      <h3 className="text-4xl font-bold">
        {count}{suffix}
      </h3>
      <p className="text-gray-400 mt-2">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
