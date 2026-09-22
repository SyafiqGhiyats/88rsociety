"use client";

import React, { useState } from "react";
import Image from "next/image";
import { communityConfig } from "@/data/community";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import { Handshake, Send, CheckCircle, Mail } from "lucide-react";

export function PartnersSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    brandName: "",
    contactEmail: "",
    collaborationType: "Uji Coba Produk (Footwear / Apparel)",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsModalOpen(false);
      setFormData({
        brandName: "",
        contactEmail: "",
        collaborationType: "Uji Coba Produk (Footwear / Apparel)",
        message: "",
      });
    }, 2500);
  };

  return (
    <section id="partners" className="py-24 relative bg-dark-bg/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="cyan">EKOSISTEM MITRA</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white font-sans">
            MITRA & <span className="text-cyan">KOLABORASI</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Kami berkolaborasi dengan brand olahraga, kebugaran, dan gaya hidup
            urban terdepan untuk menghadirkan pengalaman terbaik bagi komunitas.
          </p>
        </div>

        {/* Partners Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {communityConfig.partners.map((partner) => (
            <div
              key={partner.id}
              className="p-6 rounded-2xl bg-dark-card border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col items-center justify-center text-center group min-h-[140px]"
            >
              <div className="relative w-32 h-12 flex items-center justify-center filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={128}
                  height={48}
                  className="max-h-10 w-auto object-contain"
                />
              </div>
              <div className="mt-3 text-[11px] font-bold text-slate-400 group-hover:text-white transition-colors">
                {partner.name}
              </div>
              <div className="text-[10px] text-slate-500 truncate max-w-full">
                {partner.category}
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Proposal Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-dark-surface via-card-elevated to-dark-card border border-white/15 p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.1)_0%,transparent_70%)] pointer-events-none rounded-full" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-cyan">
                <Handshake className="w-4 h-4" />
                Bermitra dengan 88rsociety
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight font-sans">
                BAWA BRAND ANDA KE DALAM KULTUR LARI CIMAHI
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Mulai dari uji coba produk (product seeding) dan pos hidrasi
                pop-up hingga time-trial bersponsor dan kolaborasi jersey
                komunitas, kami membangun kemitraan olahraga yang otentik.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setIsModalOpen(true)}
                leftIcon={<Mail className="w-4 h-4 text-white" />}
                className="w-full sm:w-auto font-extrabold uppercase tracking-wide text-xs sm:text-sm text-white"
              >
                Ajukan Kolaborasi
              </Button>
              <a
                href={`mailto:${communityConfig.socials.contactEmail}?subject=Kemitraan Komunitas - 88rsociety`}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-xs sm:text-sm"
                >
                  Kirim Email Langsung
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Collaboration Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Bermitra dengan 88rsociety"
        maxWidth="lg"
      >
        {formSubmitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-14 h-14 mx-auto rounded-full bg-primary/20 border border-primary flex items-center justify-center text-red-200">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white font-sans">
              Pengajuan Diterima!
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Tim kemitraan komunitas kami akan meninjau proposal Anda dan
              menghubungi kembali ke <strong>{formData.contactEmail}</strong>{" "}
              dalam 1-2 hari kerja.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-xs text-slate-400">
              Isi formulir singkat ini untuk membagikan gagasan kolaborasi Anda
              bersama 1.200+ pelari aktif Cimahi.
            </p>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Nama Brand / Perusahaan
              </label>
              <input
                type="text"
                required
                placeholder="misal: Acme Running Gear"
                value={formData.brandName}
                onChange={(e) =>
                  setFormData({ ...formData, brandName: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-dark-bg border border-white/10 text-sm text-white placeholder:text-slate-600 focus:outline-hidden focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Email Kontak Resmi
              </label>
              <input
                type="email"
                required
                placeholder="kontak@brand.com"
                value={formData.contactEmail}
                onChange={(e) =>
                  setFormData({ ...formData, contactEmail: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-dark-bg border border-white/10 text-sm text-white placeholder:text-slate-600 focus:outline-hidden focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Bentuk Kolaborasi
              </label>
              <select
                value={formData.collaborationType}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    collaborationType: e.target.value,
                  })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-dark-bg border border-white/10 text-sm text-white focus:outline-hidden focus:border-primary"
              >
                <option value="Uji Coba Produk (Footwear / Apparel)">
                  Uji Coba Produk (Footwear / Apparel)
                </option>
                <option value="Sponsor Hidrasi & Nutrisi">
                  Sponsor Hidrasi & Nutrisi
                </option>
                <option value="Kolaborasi Jersey & Merchandise Komunitas">
                  Kolaborasi Jersey & Merchandise Komunitas
                </option>
                <option value="Aktivasi Lomba & Acara Lari">
                  Aktivasi Lomba & Acara Lari
                </option>
                <option value="Lainnya">Bentuk Kolaborasi Lainnya</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Ringkasan Gagasan / Pesan
              </label>
              <textarea
                rows={3}
                required
                placeholder="Ceritakan tentang ide kolaborasi, produk, atau rencana timeline..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-dark-bg border border-white/10 text-sm text-white placeholder:text-slate-600 focus:outline-hidden focus:border-primary resize-none"
              />
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="md"
                leftIcon={<Send className="w-4 h-4 text-white" />}
                className="w-full justify-center font-bold uppercase text-xs text-white"
              >
                Kirim Proposal ke Tim 88r
              </Button>
            </div>
          </form>
        )}
      </Modal>
    </section>
  );
}
