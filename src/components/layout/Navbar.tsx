"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { communityConfig } from "@/data/community";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Tentang", href: "#about" },
    { label: "Jadwal", href: "#schedule" },
    { label: "Dokumentasi", href: "#drops" },
    { label: "Mitra", href: "#partners" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-matte-black/90 backdrop-blur-md border-b border-white/10 py-3 shadow-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-36 sm:w-44 h-10 flex items-center">
              <Image
                src="/images/logo.svg"
                alt="Logo 88rsociety"
                width={176}
                height={44}
                className="w-auto h-8 sm:h-9 object-contain"
                priority
              />
            </div>
          </Link>

          {/* Center Run Ticker Pill (Hidden on small screens) */}
          <div className="hidden xl:flex items-center">
            <Link
              href="#schedule"
              className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-card border border-white/10 text-xs text-slate-300 hover:border-primary/50 transition-colors group"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="font-semibold text-white">Sesi Berikutnya:</span>
              <span className="text-red-400">
                {communityConfig.nextRunBadge.sessionName}
              </span>
              <span className="text-slate-500">•</span>
              <span>{communityConfig.nextRunBadge.time}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-red-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={communityConfig.socials.whatsappCommunity}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="primary"
                size="sm"
                triggerConfetti
                leftIcon={<MessageCircle className="w-4 h-4" />}
              >
                Gabung Komunitas
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={communityConfig.socials.whatsappCommunity}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="primary"
                size="sm"
                className="text-xs px-3 py-1.5"
                triggerConfetti
              >
                Gabung
              </Button>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
              aria-label="Buka Menu Navigasi"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-matte-black border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          {/* Mobile Next Run Alert */}
          <div className="p-3 rounded-xl bg-card border border-primary/30 mb-3">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="primary" pulse>
                Mendatang
              </Badge>
              <span className="text-xs font-bold text-white">
                {communityConfig.nextRunBadge.sessionName}
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {communityConfig.nextRunBadge.time} •{" "}
              {communityConfig.nextRunBadge.location}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-red-400 hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10">
            <a
              href={communityConfig.socials.whatsappCommunity}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button
                variant="primary"
                size="md"
                className="w-full justify-center"
                triggerConfetti
                leftIcon={<MessageCircle className="w-4 h-4" />}
              >
                Gabung Komunitas WhatsApp
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
