"use client";

import React, { useState } from "react";
import { communityConfig } from "@/data/community";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  ChevronDown,
  MessageCircle,
  Search
} from "lucide-react";

export function FaqSection() {
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const filteredFaqs = communityConfig.faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge variant="primary">PERTANYAAN UMUM</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white font-sans">
            SEMUA YANG PERLU <span className="text-red-400">KAMU KETAHUI</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Punya pertanyaan sebelum bergabung? Berikut adalah hal-hal yang
            paling sering ditanyakan oleh calon anggota baru 88rsociety.
          </p>
        </div>

        {/* Quick Search */}
        <div className="relative mb-8 max-w-lg mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Cari pertanyaan (misal: gratis, pemula, titip tas, hujan)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-dark-card border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-hidden focus:border-primary transition-colors"
          />
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-dark-surface border-primary/40 shadow-primary-sm"
                      : "bg-dark-subtle border-white/10 hover:border-white/20"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-white font-sans">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-red-400" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center text-slate-400 bg-dark-card rounded-2xl border border-white/10">
              Tidak ada pertanyaan yang cocok dengan &quot;{searchQuery}&quot;.
              Tanyakan langsung di grup komunitas kami!
            </div>
          )}
        </div>

        {/* Ask Question CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-dark-card border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-sm font-bold text-white">
              Masih punya pertanyaan seputar sesi lari?
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              Tanyakan langsung kepada kapten komunitas kami di WhatsApp.
            </div>
          </div>
          <a
            href={communityConfig.socials.whatsappCommunity}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            <Button
              variant="primary"
              size="sm"
              triggerConfetti
              leftIcon={<MessageCircle className="w-4 h-4 text-white" />}
            >
              Tanya di WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
