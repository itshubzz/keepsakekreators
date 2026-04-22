export const site = {
  name: 'Keepsake Kreators',
  tagline: 'Make Your Event Unforgettable',
  domain: 'keepsakekreators.com',
  email: 'keepsakekreatorsllc@gmail.com',
  location: 'Serving the Tri-State Area',
  deposit: '$200 due at booking to secure your date',
  instagram: 'https://www.instagram.com/Keepsakekreators',
  instagramHandle: '@Keepsakekreators',
  tiktok: 'https://www.tiktok.com/@keepsakekreators',
  tiktokHandle: '@keepsakekreators',
  facebook: 'https://www.facebook.com/profile.php?id=100090722793910',
  facebookHandle: 'Keepsake Kreators',
  hours: 'Open all weekend · Bookings 24/7',
} as const;

export const socials = [
  {
    name: 'TikTok',
    handle: '@keepsakekreators',
    href: 'https://www.tiktok.com/@keepsakekreators',
    hook: 'Fresh reels every weekend',
    tone: 'from-neon-magenta to-neon-cyan',
  },
  {
    name: 'Instagram',
    handle: '@Keepsakekreators',
    href: 'https://www.instagram.com/Keepsakekreators',
    hook: 'Behind-the-scenes + client tags',
    tone: 'from-neon-magenta via-neon-violet to-neon-cyan',
  },
  {
    name: 'Facebook',
    handle: 'Keepsake Kreators',
    href: 'https://www.facebook.com/profile.php?id=100090722793910',
    hook: 'Event recaps + client reviews',
    tone: 'from-neon-violet to-neon-cyan',
  },
] as const;

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/packages', label: 'Packages' },
  { href: '/contact', label: 'Contact' },
] as const;

export const galleryImages = Array.from({ length: 16 }, (_, i) => ({
  src: `/gallery/image${i + 1}.webp`,
  alt: `Keepsake Kreators event moment ${i + 1}`,
}));

export const blurDataURL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAEUlEQVR4nGMQ59TBihiGlgQAZ/ETAVeTG+0AAAAASUVORK5CYII=';

export const heroVideos = [
  '/video/videokeeps.mp4',
  '/video/videokeeps2.mp4',
  '/video/videokeeps3.mp4',
  '/video/videokeeps4.mp4',
];
