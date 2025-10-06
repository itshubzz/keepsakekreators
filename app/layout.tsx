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
      <body className="min-h-screen bg-brand-black text-brand-white antialiased">{children}</body>
    </html>
  );
}


