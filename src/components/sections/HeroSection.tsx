"use client";

import Image from "next/image";
import { communityConfig } from "@/data/community";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  MessageCircle,
  Calendar,
  MapPin,
  ChevronDown,
  Flame,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Hero Image with Next/Image and priority loading */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-runner.jpg"
          alt="Pelari Urban 88rsociety Cimahi"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.45] contrast-[1.1] scale-105"
        />
        {/* Dark Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/60 to-matte-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-matte-black via-transparent to-matte-black/90" />
        {/* Subtle Maroon Neon Glow in corner */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/20 blur-[140px] pointer-events-none rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left pt-6 sm:pt-12">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          {/* Top Ticker Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex flex-wrap items-center gap-2 p-1.5 pr-4 rounded-full bg-dark-card/90 border border-primary/30 backdrop-blur-md shadow-primary-sm">
              <Badge variant="primary" pulse className="shrink-0 text-[11px]">
                SESI BERIKUTNYA
              </Badge>
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <span className="text-red-400 font-bold">
                  {communityConfig.nextRunBadge.sessionName}
                </span>
                <span className="text-slate-500">•</span>
                <span className="flex items-center gap-1 text-slate-300">
                  <Calendar className="w-3 h-3 text-red-400" />
                  {communityConfig.nextRunBadge.time}
                </span>
                <span className="hidden md:inline text-slate-500">•</span>
                <span className="hidden md:flex items-center gap-1 text-slate-400">
                  <MapPin className="w-3 h-3 text-red-400" />
                  GBK Pintu 5
                </span>
              </div>
            </div>
          </div>

          {/* Punchy Athletic Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight uppercase font-sans text-white leading-[0.95]">
              RUNNING, LAUGHING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
                GO HOME.
              </span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-primary-light to-primary inline-block drop-shadow-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                DONT TAKE IT TOO SERIOUS.
              </span>
            </h1>
          </div>

          {/* Sub-Tagline */}
          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
            {communityConfig.subTagline}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href={communityConfig.socials.whatsappCommunity}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="lg"
                triggerConfetti
                leftIcon={<MessageCircle className="w-5 h-5 text-white" />}
                className="w-full sm:w-auto text-white font-extrabold tracking-wide uppercase shadow-primary"
              >
                Gabung Komunitas WhatsApp
              </Button>
            </a>

            <a href="#schedule" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/20 hover:border-primary hover:text-white"
                leftIcon={<Flame className="w-5 h-5 text-hyper-orange" />}
              >
                Lihat Jadwal Mingguan
              </Button>
            </a>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-8 border-t border-white/10">
            {communityConfig.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-3 sm:p-4 rounded-xl bg-dark-card/70 border border-white/5 backdrop-blur-sm"
              >
                <div className="text-2xl sm:text-3xl font-black text-white font-sans tracking-tight">
                  {stat.value.includes("GRATIS") ? (
                    <span className="text-red-400">{stat.value}</span>
                  ) : (
                    stat.value
                  )}
                </div>
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mt-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 hidden sm:block mt-1 truncate">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Subtle Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-slate-500 hover:text-red-400 transition-colors cursor-pointer">
        <span className="text-[10px] font-bold uppercase tracking-widest">
          Gulir ke Bawah
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
