import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Keepsake Kreators | Premium Photo Booths",
  description: "Capture the moment with our premium photo booths for weddings, birthdays, corporate events, and more. Serving NJ, NY, PA, CT.",
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-brand-black text-brand-white antialiased">{children}</body>
    </html>
  );
}


