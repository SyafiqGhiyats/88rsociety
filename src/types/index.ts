export interface RunSession {
  id: string;
  title: string;
  shortCode: string;
  tag: string;
  day: string;
  time: string;
  distance: string;
  meetingPoint: string;
  meetingPointDetail: string;
  meetingPointUrl: string;
  elevation: string;
  bagDrop: string;
  stravaRouteUrl: string;
  mapPreviewImage: string;
  highlight?: boolean;
}

export interface PaceGroup {
  id: string;
  name: string;
  shortName: string;
  paceRange: string;
  minPaceSeconds: number; // e.g. 270 (4:30)
  maxPaceSeconds: number; // e.g. 300 (5:00)
  targetSpeed: string;
  suitableFor: string;
  pacers: string[];
  color: string;
  badge: string;
}

export interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  metric?: string;
}

export interface PhotoDrop {
  id: string;
  title: string;
  date: string;
  sessionType: string;
  location: string;
  totalPhotos: number;
  coverImage: string;
  previewImages: string[];
  downloadUrl: string;
  photographer: string;
}

export interface Partner {
  id: string;
  name: string;
  category: string;
  logo: string;
  tier: string;
  url?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface SafetyRule {
  id: string;
  title: string;
  shortRule: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface CommunityConfig {
  name: string;
  tagline: string;
  subTagline: string;
  vision: string;
  motto?: string;
  hashtag?: string;
  manifesto: string[];
  philosophyTitle: string;
  philosophyText: string;
  nextRunBadge: {
    label: string;
    sessionName: string;
    time: string;
    location: string;
    joinUrl: string;
  };
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
  socials: {
    whatsappCommunity: string;
    telegramGroup: string;
    instagram: string;
    tiktok: string;
    stravaClub: string;
    spotifyPlaylist: string;
    contactEmail: string;
  };
  sessions: RunSession[];
  paceGroups: PaceGroup[];
  pillars: Pillar[];
  safetyRules: SafetyRule[];
  photoDrops: PhotoDrop[];
  partners: Partner[];
  faqs: FaqItem[];
}
