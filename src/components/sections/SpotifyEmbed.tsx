import { Headphones } from "lucide-react";
import { communityConfig } from "@/data/community";

export function SpotifyEmbed() {
  return (
    <section className="py-16 relative bg-matte-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-dark-card border border-white/10 p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Column: Info */}
          <div className="space-y-4 max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spotify/15 border border-spotify/30 text-spotify text-xs font-bold uppercase tracking-wider">
              <Headphones className="w-3.5 h-3.5" />
              Musik Cadence Resmi
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight font-sans">
              PLAYLIST CADENCE <span className="text-spotify">88RSOCIETY</span>
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Koleksi lagu berkecepatan 160–180 BPM yang menjaga ritme langkahmu
              saat Tuesday Night Run dan lari pagi Minggu. Jaga irama langkah
              tetap stabil dan bertenaga.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-bold text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-spotify" />
                Rata-rata 170 BPM
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Diperbarui Tiap Minggu
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-hyper-orange" />
                House, Tech & Drum & Bass
              </span>
            </div>
          </div>

          {/* Right Column: Spotify Iframe Embed */}
          <div className="w-full lg:w-[460px] shrink-0 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
            <iframe
              title="Playlist Resmi Lari 88rsociety di Spotify"
              src={communityConfig.socials.spotifyPlaylist}
              width="100%"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-2xl border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
