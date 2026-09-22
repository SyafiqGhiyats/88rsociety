import React from "react";
import { communityConfig } from "@/data/community";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Users,
  CalendarDays,
  TrendingUp,
  Sparkles,
  Smile,
  CheckCircle2,
} from "lucide-react";

export function AboutPillars() {
  const iconMap: Record<string, React.ReactNode> = {
    Users: <Users className="w-6 h-6 text-red-400" />,
    CalendarDays: <CalendarDays className="w-6 h-6 text-cyan" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-hyper-orange" />,
    Sparkles: <Sparkles className="w-6 h-6 text-purple-accent" />,
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle Background Elements (Hardware-accelerated radial gradients) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-[radial-gradient(circle_at_center,rgba(108,26,26,0.2)_0%,transparent_70%)] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-[radial-gradient(circle_at_center,rgba(255,87,34,0.12)_0%,transparent_70%)] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="primary">IDENTITAS & PRINSIP UTAMA</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white font-sans">
            NILAI <span className="text-red-400">88RSOCIETY</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {communityConfig.vision}
          </p>
        </div>

        {/* Philosophy of "88" Card */}
        <div className="mb-16">
          <div className="relative rounded-2xl bg-gradient-to-br from-card via-charcoal to-card-darker border border-white/15 p-8 sm:p-12 overflow-hidden shadow-2xl">
            {/* Ambient Watermark Graphic */}
            <div className="absolute -right-12 -bottom-16 opacity-5 select-none pointer-events-none text-white font-black text-[220px] font-sans">
              88
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-5 flex flex-col items-start gap-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-red-200 text-xs font-black tracking-wider uppercase">
                  <Smile className="w-4 h-4 text-red-400" />
                  {communityConfig.hashtag}
                </div>
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-widest text-red-400 mb-1.5">
                    Moto Komunitas
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight font-sans">
                    &ldquo;{communityConfig.motto}&rdquo;
                  </h3>
                </div>
                <div className="h-1 w-20 bg-primary rounded-full" />
              </div>

              <div className="lg:col-span-7 space-y-4">
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                  {communityConfig.philosophyText}
                </p>

                {/* Manifesto Snippets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                  {communityConfig.manifesto.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {communityConfig.pillars.map((pillar) => (
            <Card
              key={pillar.id}
              className="p-6 sm:p-7 flex flex-col justify-between group hover:border-primary/40 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  {iconMap[pillar.iconName]}
                </div>

                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-wide group-hover:text-red-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-bold text-slate-400 mt-1">
                    {pillar.subtitle}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {pillar.metric && (
                <div className="pt-6 mt-4 border-t border-white/5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-slate-300 transition-colors">
                    Prinsip Utama:
                  </span>
                  <div className="text-xs font-extrabold text-white mt-0.5">
                    {pillar.metric}
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
