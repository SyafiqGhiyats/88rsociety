import { CommunityConfig } from "@/types";

export const communityConfig: CommunityConfig = {
  name: "88rsociety",
  tagline: "Running, laughing, go home. Dont take it too serious.",
  subTagline:
    "Welcoming every soul to move as one, woven by rhythm, held together by the warmth of the streets.",
  vision:
    "Membangun komunitas yang inklusif dan berenergi tinggi di mana kebugaran dapat diakses semua orang, persahabatan terjalin erat, dan setiap langkah lari membawa kebahagiaan bersama.",
  motto: "Running, laughing, go home",
  hashtag: "#donttakeittooserious",
  manifesto: [
    "Motto: Running, laughing, go home.",
    "#donttakeittooserious — tanpa ego, hanya energi positif.",
    "Kebugaran untuk semua: terbuka bagi setiap pelari dan segala kecepatan.",
    "Ikatan sosial: kilometer terasa lebih bermakna saat dijalani bersama teman.",
  ],
  philosophyTitle: "Kebugaran Terbuka & Ikatan Sosial",
  philosophyText:
    "Pendekatan utama kami berfokus kuat pada kebugaran yang ramah untuk semua kalangan dan ikatan sosial yang hangat, berlandaskan moto: 'Running, laughing, go home' serta tagar #donttakeittooserious. Kami meyakini olahraga lari harus terasa ramah, menyenangkan, dan menggembirakan — di mana setiap orang dapat bergerak bersama tanpa tekanan maupun rasa terintimidasi.",
  nextRunBadge: {
    label: "SESI LARI MINGGU INI",
    sessionName: "Tuesday Night Run (TNR)",
    time: "Selasa • 19:30 WIB",
    location: "GBK Pintu 5 Senayan (Plaza Timur)",
    joinUrl: "https://chat.whatsapp.com/invite-88rsociety",
  },
  stats: [
    {
      label: "Pelari Aktif",
      value: "1.200+",
      subtext: "Berlari rutin setiap bulan di Jakarta",
    },
    {
      label: "Kilometer Mingguan",
      value: "3.800+",
      subtext: "Tercatat di seluruh rute lari",
    },
    {
      label: "Biaya Komunitas",
      value: "100% GRATIS",
      subtext: "Tanpa biaya pendaftaran, langsung hadir",
    },
    {
      label: "Dokumentasi Foto",
      value: "50+ Album",
      subtext: "Arsip foto resolusi tinggi di cloud",
    },
  ],
  socials: {
    whatsappCommunity: "https://chat.whatsapp.com/invite-88rsociety",
    telegramGroup: "https://t.me/eightyeight_rsociety",
    instagram: "https://instagram.com/88rsociety",
    tiktok: "https://tiktok.com/@88rsociety",
    stravaClub: "https://strava.com/clubs/88rsociety",
    spotifyPlaylist:
      "https://open.spotify.com/embed/playlist/37i9dQZF1DXadOVCgGhS7j?utm_source=generator&theme=0",
    contactEmail: "collab@88rsociety.id",
  },
  pillars: [
    {
      id: "inclusivity",
      title: "Inklusivitas",
      subtitle: "Ruang Nyaman untuk Semua",
      description:
        "Baik kamu menargetkan sub-20 di 5K atau baru menyelesaikan kilometer pertama tanpa henti, kamu selalu memiliki tempat di barisan ini. Tak ada pelari yang tertinggal.",
      iconName: "Users",
      metric: "Terbuka untuk Semua Pace",
    },
    {
      id: "consistency",
      title: "Konsistensi",
      subtitle: "Hadir Saat Hujan Maupun Cerah",
      description:
        "Ketahanan tubuh terbentuk dari rutinitas Selasa malam dan matahari terbit di hari Minggu. Kebiasaan sehat mengalir alami saat berlari bersama komunitas.",
      iconName: "CalendarDays",
      metric: "2x Sesi Mingguan",
    },
    {
      id: "progression",
      title: "Perkembangan",
      subtitle: "Tingkatkan Kapasitas Diri",
      description:
        "Pendampingan ritme lari teratur, panduan kadens, dan rute elevasi bertahap yang dirancang agar kamu berkembang dengan aman tanpa risiko cedera.",
      iconName: "TrendingUp",
      metric: "Panduan Lari Bertahap",
    },
    {
      id: "good-vibes",
      title: "Suasana Positif",
      subtitle: "Kultur Lari Perkotaan",
      description:
        "Tos penyemangat di lampu merah, playlist musik yang membakar semangat, obrolan santai selepas lari, hingga ritual ngopi santai di akhir pekan.",
      iconName: "Sparkles",
      metric: "Ritual Ngopi Pasca Lari",
    },
  ],
  sessions: [
    {
      id: "tnr",
      title: "Tuesday Night Run (TNR)",
      shortCode: "TNR",
      tag: "Lampu Kota & Langkah Malam",
      day: "Setiap Selasa",
      time: "19:30 WIB (Pemanasan 19:15)",
      distance: "5K - 7K",
      meetingPoint: "GBK Pintu 5, Senayan",
      meetingPointDetail: "Plaza Timur Gelora Bung Karno, dekat Hutan Kota GBK",
      meetingPointUrl: "https://maps.google.com/?q=Plaza+Timur+GBK+Gate+5",
      elevation: "Rute aspal datar",
      bagDrop:
        "Penitipan tas gratis bersama Marshal 88r (hadir 15 menit sebelum mulai)",
      stravaRouteUrl: "https://www.strava.com/routes/3128919018",
      mapPreviewImage: "/images/route-gbk.svg",
      highlight: true,
    },
    {
      id: "slr",
      title: "Sunday Long Run (SLR)",
      shortCode: "SLR",
      tag: "Kilometer Akhir Pekan & Pagi Cerah",
      day: "Setiap Minggu",
      time: "05:45 WIB (Briefing 05:30)",
      distance: "10K - 21K",
      meetingPoint: "FX Sudirman / Pintu Satu Senayan",
      meetingPointDetail: "Lobi Utama FX Sudirman, Jl. Jend. Sudirman",
      meetingPointUrl: "https://maps.google.com/?q=fX+Sudirman+Senayan",
      elevation: "Flyover Semanggi + Koridor Car Free Day",
      bagDrop: "Kru stasioner di area lobi FX Sudirman",
      stravaRouteUrl: "https://www.strava.com/routes/3128919099",
      mapPreviewImage: "/images/route-cfd.svg",
      highlight: false,
    },
    {
      id: "tempo-thursday",
      title: "Thursday Interval / Shakeout",
      shortCode: "TIS",
      tag: "Sesi Khusus Bulanan & Latihan Kadens",
      day: "Kamis Pilihan",
      time: "19:30 WIB",
      distance: "5K Terstruktur / Repetisi 400m",
      meetingPoint: "Stadion Madya GBK / Loop SCBD",
      meetingPointDetail: "Jalan Lingkar Luar SCBD, Area Parkir Lot 8",
      meetingPointUrl: "https://maps.google.com/?q=SCBD+Lot+8",
      elevation: "Lintasan datar & segmen kecepatan",
      bagDrop: "Didukung kendaraan operasional kru",
      stravaRouteUrl: "https://www.strava.com/routes/3128919222",
      mapPreviewImage: "/images/route-scbd.svg",
      highlight: false,
    },
  ],
  paceGroups: [
    {
      id: "sub-5",
      name: "Sub-5 Express",
      shortName: "Squad Alpha",
      paceRange: "4:30 – 4:59 min/km",
      minPaceSeconds: 270,
      maxPaceSeconds: 299,
      targetSpeed: "12.0 – 13.3 km/h",
      suitableFor:
        "Pelari berpengalaman yang menargetkan sub-20 5K, sub-45 10K, atau kualifikasi maraton.",
      pacers: ["Kapten Dimas", "Pacer Radit"],
      color: "#FF5722",
      badge: "Kecepatan Tinggi",
    },
    {
      id: "cruise",
      name: "Cruise Control",
      shortName: "Squad Bravo",
      paceRange: "5:15 – 5:59 min/km",
      minPaceSeconds: 315,
      maxPaceSeconds: 359,
      targetSpeed: "10.0 – 11.5 km/h",
      suitableFor:
        "Latihan daya tahan stabil, target half-marathon, dan pelari yang menyukai ritme konstan.",
      pacers: ["Pacer Sarah", "Pacer Kevin M."],
      color: "#CCFF00",
      badge: "Tempo Stabil",
    },
    {
      id: "party",
      name: "Party Pace",
      shortName: "Squad Charlie",
      paceRange: "6:15 – 6:59 min/km",
      minPaceSeconds: 375,
      maxPaceSeconds: 419,
      targetSpeed: "8.6 – 9.6 km/h",
      suitableFor:
        "Lari santai sambil mengobrol, pelari sosial, dan pelari baru yang menyelesaikan 5K.",
      pacers: ["Pacer Dika", "Pacer Nadia"],
      color: "#00E5FF",
      badge: "Santai & Sosial",
    },
    {
      id: "walk-run",
      name: "Good Vibes / Walk-Run",
      shortName: "Squad Delta",
      paceRange: "7:00 – 7:45+ min/km",
      minPaceSeconds: 420,
      maxPaceSeconds: 500,
      targetSpeed: "7.5 – 8.5 km/h",
      suitableFor:
        "Pelari pemula yang baru pertama kali lari, sesi pemulihan aktif, dan adaptasi lari berkelanjutan.",
      pacers: ["Sweeper Bimo", "Pacer Tiara"],
      color: "#A78BFA",
      badge: "Ramah Pemula",
    },
  ],
  safetyRules: [
    {
      id: "visibility",
      title: "Visibilitas Malam Hari",
      shortRule: "Terlihat & Tetap Aman",
      description:
        "Untuk sesi Tuesday Night Run, pakaian berwarna cerah dan aksen reflektif sangat dianjurkan. Lampu klip dada/lengan atau headlamp disiapkan oleh marshal bagi pacer depan dan belakang.",
      iconName: "Flashlight",
      highlight: "Wajib Lampu Klip pada Lari Malam",
    },
    {
      id: "pacers",
      title: "Patuhi Aba-Aba Pacer & Peluit",
      shortRule: "Satu Irama Langkah",
      description:
        "Perhatikan instruksi pacer utama dan marshal di persimpangan jalan. Saat mendengar peluit atau aba-aba ('Awas lubang!', 'Kendaraan di belakang!'), teruskan informasi ke barisan belakang.",
      iconName: "Megaphone",
      highlight: "Estafetkan Peringatan Jalan ke Belakang",
    },
    {
      id: "traffic",
      title: "Etika Jalan Raya & Pengguna Lain",
      shortRule: "Berbagi Ruang Aspal",
      description:
        "Kita berbagi jalanan Jakarta dengan pengendara dan pejalan kaki. Jaga formasi maksimal 2 banjar di ruas jalan umum dan jangan pernah menerobos lampu merah penyeberangan.",
      iconName: "ShieldAlert",
      highlight: "Formasi Maksimal 2 Banjar Sejajar",
    },
    {
      id: "health",
      title: "Kebutuhan Cairan & Batas Diri",
      shortRule: "Tanggalkan Ego, Pahami Tubuh",
      description:
        "Iklim tropis menguras cairan dengan cepat. Penuhi kebutuhan hidrasi sebelum lari. Jika merasa pusing, mual, atau kram, segera menepi dan beri tahu marshal sweeper terdekat.",
      iconName: "HeartPulse",
      highlight: "Kotak P3K Lengkap Bersama Sweeper",
    },
  ],
  photoDrops: [
    {
      id: "drop-042",
      title: "Vol. 42 • Gemerlap Malam Senayan",
      date: "Selasa, 16 Sep 2026",
      sessionType: "Tuesday Night Run",
      location: "Loop GBK Senayan • 7,2 KM",
      totalPhotos: 248,
      coverImage: "/images/drops/drop-1.jpg",
      previewImages: [
        "/images/drops/drop-1.jpg",
        "/images/drops/drop-2.jpg",
        "/images/drops/drop-3.jpg",
        "/images/drops/drop-4.jpg",
      ],
      downloadUrl:
        "https://drive.google.com/drive/folders/88rsociety-vol42-tnr",
      photographer: "@visualsbyreno",
    },
    {
      id: "drop-041",
      title: "Vol. 41 • Mentari Pagi Sudirman",
      date: "Minggu, 14 Sep 2026",
      sessionType: "Sunday Long Run",
      location: "CFD Sudirman hingga Semanggi • 16 KM",
      totalPhotos: 395,
      coverImage: "/images/drops/drop-2.jpg",
      previewImages: [
        "/images/drops/drop-2.jpg",
        "/images/drops/drop-1.jpg",
        "/images/drops/drop-4.jpg",
        "/images/drops/drop-3.jpg",
      ],
      downloadUrl:
        "https://drive.google.com/drive/folders/88rsociety-vol41-slr",
      photographer: "@adit.shutter",
    },
    {
      id: "drop-040",
      title: "Vol. 40 • SCBD Neon Shakeout",
      date: "Kamis, 11 Sep 2026",
      sessionType: "Cadence Lab",
      location: "Loop Luar SCBD • 5,0 KM",
      totalPhotos: 180,
      coverImage: "/images/drops/drop-3.jpg",
      previewImages: [
        "/images/drops/drop-3.jpg",
        "/images/drops/drop-4.jpg",
        "/images/drops/drop-1.jpg",
        "/images/drops/drop-2.jpg",
      ],
      downloadUrl:
        "https://drive.google.com/drive/folders/88rsociety-vol40-scbd",
      photographer: "@fauzan.lens",
    },
    {
      id: "drop-039",
      title: "Vol. 39 • Tantangan 1 Mil Komunitas",
      date: "Selasa, 09 Sep 2026",
      sessionType: "Tuesday Night Run",
      location: "Stadion Madya GBK • Time-Trial 1 Mil",
      totalPhotos: 310,
      coverImage: "/images/drops/drop-4.jpg",
      previewImages: [
        "/images/drops/drop-4.jpg",
        "/images/drops/drop-3.jpg",
        "/images/drops/drop-2.jpg",
        "/images/drops/drop-1.jpg",
      ],
      downloadUrl:
        "https://drive.google.com/drive/folders/88rsociety-vol39-mile",
      photographer: "@visualsbyreno",
    },
  ],
  partners: [
    {
      id: "brand-1",
      name: "Volt Running Lab",
      category: "Pakaian & Perlengkapan Lari",
      logo: "/images/partners/volt-logo.svg",
      tier: "Mitra Resmi",
    },
    {
      id: "brand-2",
      name: "HydroActive Electrolytes",
      category: "Mitra Hidrasi Resmi",
      logo: "/images/partners/hydro-logo.svg",
      tier: "Hidrasi & Nutrisi",
    },
    {
      id: "brand-3",
      name: "Pulse Optics",
      category: "Kacamata Olahraga Performa",
      logo: "/images/partners/pulse-logo.svg",
      tier: "Mitra Resmi",
    },
    {
      id: "brand-4",
      name: "Brew Society Coffee",
      category: "Titik Ngopi Resmi Pasca Lari",
      logo: "/images/partners/brew-logo.svg",
      tier: "Pendukung Komunitas",
    },
    {
      id: "brand-5",
      name: "AeroRecovery Gun",
      category: "Pemulihan Otot & Fisioterapi",
      logo: "/images/partners/aero-logo.svg",
      tier: "Pendukung Komunitas",
    },
  ],
  faqs: [
    {
      id: "faq-1",
      question:
        "Apakah bergabung dengan 88rsociety dikenakan biaya / pendaftaran?",
      answer:
        "Sama sekali TIDAK (100% GRATIS). 88rsociety adalah komunitas terbuka. Kamu cukup hadir di titik kumpul sesuai jadwal lari rutin kami (Selasa malam atau Minggu pagi).",
      category: "Umum",
    },
    {
      id: "faq-2",
      question:
        "Saya pelari pemula yang baru bisa lari pelan. Apakah bisa ikut?",
      answer:
        "Sangat bisa dan disambut hangat! Kami selalu menyediakan barisan lari santai yang didampingi pacer dan sweeper ramah. Tidak ada pelari yang ditinggal di jalan.",
      category: "Sesi & Kecepatan",
    },
    {
      id: "faq-3",
      question: "Apakah ada tempat penitipan tas (bag drop)?",
      answer:
        "Ya, untuk sesi lari rutin Selasa malam di GBK dan Minggu pagi di FX Sudirman, kami menyediakan bag drop terpusat yang dijaga oleh marshal panitia selama sesi berlangsung.",
      category: "Fasilitas & Keamanan",
    },
    {
      id: "faq-4",
      question: "Bagaimana cara mendapatkan foto dokumentasi setelah lari?",
      answer:
        "Foto hasil dokumentasi fotografer resmi kami diunggah ke Google Drive paling lambat 24 jam setelah sesi lari berakhir. Tautan langsung tersedia di bagian 'Dokumentasi' website ini dan di kanal siaran WhatsApp/Telegram.",
      category: "Umum",
    },
    {
      id: "faq-5",
      question: "Apa yang harus saya bawa saat sesi Tuesday Night Run?",
      answer:
        "Kenakan sepatu lari, pakaian yang nyaman dan memiliki elemen reflektif/terang, botol air kecil (atau tumbler untuk isi ulang di pos marshal), dan lampu klip dada/lengan bila ada.",
      category: "Fasilitas & Keamanan",
    },
    {
      id: "faq-6",
      question: "Bagaimana jika cuaca hujan sebelum jadwal lari dimulai?",
      answer:
        "Jika hujan ringan (gerimis), sesi tetap berjalan dengan rute alternatif yang aman. Jika terjadi hujan lebat disertai petir, pembaruan status (apakah ditunda atau diganti latihan fisik terpadu) diumumkan di WhatsApp Community 45 menit sebelum mulai.",
      category: "Sesi & Kecepatan",
    },
  ],
};
