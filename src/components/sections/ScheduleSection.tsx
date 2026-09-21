"use client";

import React, { useState } from "react";
import Image from "next/image";
import { communityConfig } from "@/data/community";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import {
  Clock,
  MapPin,
  Route as RouteIcon,
  Luggage,
  ExternalLink,
  Navigation,
  Compass,
  CheckCircle,
  Zap
} from "lucide-react";

export function ScheduleSection() {
  const [activeSessionId, setActiveSessionId] = useState(
    communityConfig.sessions[0].id
  );

  const currentSession =
    communityConfig.sessions.find((s) => s.id === activeSessionId) ||
    communityConfig.sessions[0];

  return (
    <section id="schedule" className="py-24 relative bg-dark-bg/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="primary">JADWAL LARI MINGGUAN</Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white font-sans">
              JADWAL & <span className="text-red-400">PANDUAN RUTE</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Jelajahi sesi lari rutin perkotaan kami. Hujan maupun cerah,
              komunitas berkumpul di titik temu resmi bersama marshal dan pacer.
            </p>
          </div>

          {/* Session Switcher Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-dark-card border border-white/10 self-start md:self-auto">
            {communityConfig.sessions.map((session) => {
              const isActive = session.id === activeSessionId;
              return (
                <button
                  key={session.id}
                  onClick={() => setActiveSessionId(session.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-primary text-white shadow-primary-sm"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {session.shortCode} • {session.day.replace("Setiap ", "")}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Session Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Session Meta & Specifications */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <Card className="p-6 sm:p-8 flex-1 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="primary" pulse>
                    {currentSession.day}
                  </Badge>
                  <span className="text-xs font-semibold text-slate-400">
                    {currentSession.tag}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight font-sans">
                  {currentSession.title}
                </h3>
              </div>

              {/* Quick Specs Grid */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <Clock className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Waktu Kumpul
                    </div>
                    <div className="text-sm font-extrabold text-white mt-0.5">
                      {currentSession.time}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <MapPin className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Titik Kumpul
                    </div>
                    <div className="text-sm font-extrabold text-white mt-0.5">
                      {currentSession.meetingPoint}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {currentSession.meetingPointDetail}
                    </div>
                    <a
                      href={currentSession.meetingPointUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-cyan hover:underline mt-1.5"
                    >
                      <Navigation className="w-3 h-3" />
                      Buka di Google Maps
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                      <RouteIcon className="w-4 h-4 text-hyper-orange" />
                      Jarak Tempuh
                    </div>
                    <div className="text-base font-black text-white mt-1">
                      {currentSession.distance}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                      <Compass className="w-4 h-4 text-purple-accent" />
                      Elevasi
                    </div>
                    <div className="text-base font-black text-white mt-1">
                      {currentSession.elevation}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <Luggage className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Fasilitas Penitipan Tas (Bag Drop)
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      {currentSession.bagDrop}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4">
                <a
                  href={currentSession.stravaRouteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button
                    variant="outline"
                    size="md"
                    className="w-full justify-center text-xs sm:text-sm hover:border-primary hover:text-white"
                    rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
                  >
                    Lihat Rute GPX di Strava
                  </Button>
                </a>
              </div>
            </Card>
          </div>

          {/* Right Column: Route Map Preview Card */}
          <div className="lg:col-span-7 flex flex-col">
            <Card className="p-4 sm:p-6 flex-1 flex flex-col justify-between overflow-hidden relative">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-red-400" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Pratinjau Rute GPS Resmi
                  </span>
                </div>
                <Badge variant="outline" className="text-[10px]">
                  Akses Langsung
                </Badge>
              </div>

              {/* Route Map Graphic */}
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-card-darker border border-white/10 flex items-center justify-center group">
                <Image
                  src={currentSession.mapPreviewImage}
                  alt={`Peta rute ${currentSession.title}`}
                  fill
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Route Guidelines Footer */}
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-400" />
                  <span>
                    Marshal siaga di belokan • Pos air di titik tengah rute
                  </span>
                </div>
                <a
                  href={currentSession.meetingPointUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-red-400 hover:underline shrink-0"
                >
                  Lihat Navigasi Titik Kumpul →
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
