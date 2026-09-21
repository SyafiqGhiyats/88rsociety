import React from "react";
import { communityConfig } from "@/data/community";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Flashlight,
  Megaphone,
  ShieldAlert,
  HeartPulse,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

export function SafetyEtiquette() {
  const iconMap: Record<string, React.ReactNode> = {
    Flashlight: <Flashlight className="w-6 h-6 text-red-400" />,
    Megaphone: <Megaphone className="w-6 h-6 text-cyan" />,
    ShieldAlert: <ShieldAlert className="w-6 h-6 text-hyper-orange" />,
    HeartPulse: <HeartPulse className="w-6 h-6 text-rose-400" />,
  };

  return (
    <section id="safety" className="py-24 relative bg-dark-bg/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="orange">PROTOKOL KEAMANAN UTAMA</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white font-sans">
            ETIKA JALAN RAYA &{" "}
            <span className="text-hyper-orange">KEAMANAN LARI</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Berlari di jalanan Bandung pada malam dan pagi hari membutuhkan
            kedisiplinan. Kami bangga menjadi komunitas yang aman, tertib, dan
            saling menjaga.
          </p>
        </div>

        {/* Safety Rule Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {communityConfig.safetyRules.map((rule) => (
            <Card
              key={rule.id}
              className="p-6 sm:p-7 flex flex-col justify-between border-white/10 hover:border-hyper-orange/50 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {iconMap[rule.iconName]}
                </div>

                <div>
                  <div className="text-xs font-bold text-hyper-orange uppercase tracking-wider">
                    {rule.shortRule}
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight mt-1">
                    {rule.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {rule.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/10">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-400" />
                  {rule.highlight}
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* Night Run Safety Briefing Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-dark-surface border border-hyper-orange/30 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-hyper-orange/10 border border-hyper-orange/30 shrink-0">
              <AlertTriangle className="w-6 h-6 text-hyper-orange" />
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-black text-white uppercase">
                Dukungan Medis P3K & Marshal Sweeper
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
                Setiap sesi resmi 88rsociety didampingi oleh pacer sweeper
                terlatih yang membawa perlengkapan pertolongan pertama,
                pengganti elektrolit, dan jalur komunikasi darurat. Kamu dapat
                berlari dengan tenang dan aman.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full lg:w-auto">
            <span className="inline-block w-full lg:w-auto text-center px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-slate-300">
              Nol Toleransi untuk Menyeberang Sembarangan & Memotong Jalur
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
