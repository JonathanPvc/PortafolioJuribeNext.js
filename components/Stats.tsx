"use client";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

const statsData = [
  { value: 4,  suffix: "+", key: "exp"       as const },
  { value: 20, suffix: "+", key: "apps"      as const },
  { value: 10, suffix: "+", key: "techs"     as const },
  { value: 3,  suffix: "",  key: "countries" as const },
];

function useCountUp(target: number, duration = 1200, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
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
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all">
      <h3 className="text-4xl font-bold">{count}{suffix}</h3>
      <p className="text-gray-400 mt-2">{label}</p>
    </div>
  );
}

export default function Stats() {
  const { lang } = useLanguage();
  return (
    <section className="py-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {statsData.map((s) => (
          <StatCard key={s.key} value={s.value} suffix={s.suffix} label={t.stats[s.key][lang]} />
        ))}
      </div>
    </section>
  );
}