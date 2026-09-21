"use client";

import React, { useState } from "react";
import Image from "next/image";
import { communityConfig } from "@/data/community";
import { PhotoDrop } from "@/types";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Modal } from "@/components/ui/Modal";
import {
  Download,
  Camera,
  Calendar,
  MapPin,
  Eye
} from "lucide-react";

export function PhotoDrops() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [activePreviewImage, setActivePreviewImage] = useState<string | null>(
    null
  );
  const [activeDropForModal, setActiveDropForModal] =
    useState<PhotoDrop | null>(null);

  const categories = ["Semua", "Tuesday Night Run", "Sunday Long Run"];

  const filteredDrops =
    selectedCategory === "Semua"
      ? communityConfig.photoDrops
      : communityConfig.photoDrops.filter(
          (drop) => drop.sessionType === selectedCategory
        );

  const openLightbox = (imageSrc: string, drop: PhotoDrop) => {
    setActivePreviewImage(imageSrc);
    setActiveDropForModal(drop);
  };

  return (
    <section id="drops" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="primary">ARSIP FOTO KUALITAS ASLI</Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white font-sans">
              DOKUMENTASI <span className="text-red-400">FOTO KOMUNITAS</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Setiap sesi lari diabadikan oleh tim kreatif kami. Foto resolusi
              tinggi diunggah ke Google Drive dalam waktu 24 jam setelah sesi
              berakhir.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-dark-card border border-white/10 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-primary text-white shadow-primary-sm"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Drops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredDrops.map((drop) => (
            <Card
              key={drop.id}
              className="overflow-hidden border-white/10 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Photo Showcase Thumbnail Container */}
              <div
                className="relative w-full aspect-[16/10] bg-card-darker overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(drop.coverImage, drop)}
              >
                <Image
                  src={drop.coverImage}
                  alt={drop.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-dark-card/90 backdrop-blur-md border border-white/10 text-xs font-bold text-white">
                    {drop.sessionType}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-black uppercase">
                    {drop.totalPhotos} Foto
                  </span>
                </div>

                {/* Hover Eye Trigger */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                  <div className="px-4 py-2 rounded-full bg-white text-black font-bold text-xs flex items-center gap-1.5 shadow-xl">
                    <Eye className="w-4 h-4" />
                    Pratinjau Foto Kualitas Asli
                  </div>
                </div>

                {/* Photographer Credit Overlay */}
                <div className="absolute bottom-3 left-4 text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-red-400" />
                  <span>Foto oleh {drop.photographer}</span>
                </div>
              </div>

              {/* Meta & Download Bar */}
              <div className="p-6 sm:p-7 space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-red-400" />
                    <span>{drop.date}</span>
                    <span>•</span>
                    <MapPin className="w-3.5 h-3.5 text-cyan" />
                    <span>{drop.location}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight font-sans">
                    {drop.title}
                  </h3>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-white/10">
                  <span className="text-xs text-slate-400">
                    Arsip cloud gratis (Ekspor file RAW & JPEG asli)
                  </span>

                  <a
                    href={drop.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0"
                  >
                    <Button
                      variant="primary"
                      size="sm"
                      leftIcon={<Download className="w-4 h-4 text-white" />}
                      className="w-full sm:w-auto font-bold uppercase text-xs text-white"
                    >
                      Unduh Google Drive
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Cloud Storage Disclaimer Card */}
        <div className="mt-12 p-6 rounded-2xl bg-dark-card border border-white/10 text-center max-w-2xl mx-auto space-y-2">
          <p className="text-xs sm:text-sm text-slate-300">
            📸 <strong>Etika Pelari:</strong> Kamu 100% bebas menggunakan,
            mengunggah, dan menandai fotomu di Instagram maupun TikTok. Tandai{" "}
            <span className="text-red-400 font-bold">@88rsociety</span> dan
            sertakan kredit fotografer sesi lari!
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Modal
        isOpen={Boolean(activePreviewImage)}
        onClose={() => setActivePreviewImage(null)}
        maxWidth="4xl"
        title={activeDropForModal?.title || "Pratinjau Foto"}
      >
        {activePreviewImage && activeDropForModal && (
          <div className="space-y-4">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden bg-black">
              <Image
                src={activePreviewImage}
                alt={activeDropForModal.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="text-xs text-slate-400 text-center sm:text-left">
                <span>{activeDropForModal.location}</span> •{" "}
                <span className="text-slate-300">
                  Diabadikan oleh {activeDropForModal.photographer}
                </span>
              </div>
              <a
                href={activeDropForModal.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="primary"
                  size="sm"
                  leftIcon={<Download className="w-4 h-4 text-white" />}
                  className="w-full sm:w-auto font-bold uppercase text-xs text-white"
                >
                  Unduh Kualitas Asli dari Google Drive
                </Button>
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
