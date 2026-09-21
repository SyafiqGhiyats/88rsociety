"use client";

import React from "react";
import Image from "next/image";
import { communityConfig } from "@/data/community";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MessageCircle, Send, Sparkles, Flame } from "lucide-react";

export function JoinCtaSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/drops/drop-2.jpg"
          alt="Pelari saat matahari terbit"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.25] contrast-[1.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/85 to-matte-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/20 blur-[130px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <Badge variant="primary" pulse>
          GRATIS • TANPA SYARAT PENDAFTARAN
        </Badge>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white font-sans leading-[0.95]">
          REKOR TERBAIKMU DIMULAI DARI <br />
          <span className="text-red-400 drop-shadow-primary">
            LANGKAH BERIKUTNYA.
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Bergabunglah bersama 1.200+ pelari Jakarta setiap Selasa di GBK Senayan atau Minggu di sepanjang
          Sudirman. Pasang sepatumu, temukan ritmemu, dan biarkan energi positif membawamu maju.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={communityConfig.socials.whatsappCommunity}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              variant="primary"
              size="xl"
              triggerConfetti
              leftIcon={<MessageCircle className="w-5 h-5 text-white" />}
              className="w-full sm:w-auto text-white shadow-primary-lg"
            >
              Gabung Komunitas WhatsApp
            </Button>
          </a>

          <a
            href={communityConfig.socials.telegramGroup}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              variant="outline"
              size="xl"
              leftIcon={<Send className="w-5 h-5 text-white" />}
              className="w-full sm:w-auto hover:border-cyan hover:text-cyan"
            >
              Gabung Siaran Telegram
            </Button>
          </a>
        </div>

        <div className="pt-6 flex items-center justify-center gap-8 text-xs font-bold text-slate-400">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-red-400" />
            Gratis untuk semua pelari
          </span>
          <span className="flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-hyper-orange" />
            Terbuka untuk semua kecepatan
          </span>
        </div>
      </div>
    </section>
  );
}
