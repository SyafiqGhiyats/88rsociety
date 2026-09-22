"use client";

import Image from "next/image";
import { communityConfig } from "@/data/community";
import {
  Send,
  MessageCircle,
  ArrowUp,
  MapPin,
  Clock,
  ExternalLink,
} from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-card-footer border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background ambient lighting (Zero GPU-blur overhead) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[250px] sm:h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(108,26,26,0.2)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1 & 2: Brand Manifesto */}
          <div className="lg:col-span-2 space-y-4">
            <div className="w-44 h-10 relative">
              <Image
                src="/images/logo.svg"
                alt="88rsociety"
                width={176}
                height={44}
                className="w-auto h-9 object-contain"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {communityConfig.tagline} {communityConfig.subTagline}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                Cimahi, Indonesia
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
                <Clock className="w-3.5 h-3.5 text-red-400" />
                Selasa & Minggu
              </span>
            </div>
          </div>

          {/* Col 3: Routine Runs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-red-400">
              Sesi Mingguan
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="#schedule"
                  className="hover:text-white transition-colors"
                >
                  Tuesday Night Run (GBK)
                </a>
              </li>
              <li>
                <a
                  href="#schedule"
                  className="hover:text-white transition-colors"
                >
                  Sunday Long Run (Sudirman)
                </a>
              </li>
              <li>
                <a
                  href="#schedule"
                  className="hover:text-white transition-colors"
                >
                  Thursday Cadence Lab (SCBD)
                </a>
              </li>
              <li>
                <a
                  href="#safety"
                  className="hover:text-white transition-colors"
                >
                  Etika & Keamanan Jalan
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Community & Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-red-400">
              Komunitas
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#drops" className="hover:text-white transition-colors">
                  Arsip Dokumentasi Foto
                </a>
              </li>
              <li>
                <a
                  href="#partners"
                  className="hover:text-white transition-colors"
                >
                  Mitra & Kolaborasi
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ & Panduan Pemula
                </a>
              </li>
              <li>
                <a
                  href={communityConfig.socials.stravaClub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Klub Strava <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${communityConfig.socials.contactEmail}`}
                  className="hover:text-white transition-colors"
                >
                  Kontak & Kemitraan
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Social Channels */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-red-400">
              Terhubung Bersama Kami
            </h4>
            <p className="text-xs text-slate-400">
              Dapatkan info sesi lari, kabar cuaca, dan tautan foto.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={communityConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-red-400 hover:border-primary/50 hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href={communityConfig.socials.whatsappCommunity}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-red-400 hover:border-primary/50 hover:bg-white/10 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={communityConfig.socials.telegramGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-red-400 hover:border-primary/50 hover:bg-white/10 transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
            <div className="pt-2">
              <a
                href={communityConfig.socials.whatsappCommunity}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-bold text-red-400 underline underline-offset-4 hover:text-white transition-colors"
              >
                Gabung Siaran WhatsApp →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex flex-wrap items-center gap-1.5">
            <span>© {new Date().getFullYear()} 88rsociety.</span>
            <span>&ldquo;{communityConfig.motto}&rdquo;</span>
            <span className="text-red-400 font-bold">
              {communityConfig.hashtag}
            </span>
          </p>

          <div className="flex items-center gap-6">
            <span>Komunitas Terbuka & Gratis</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-red-400 transition-colors"
              aria-label="Kembali ke atas"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
