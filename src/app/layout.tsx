import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { Navbar5 } from "@/components/ui/navbar5";
import { Footer1 } from "@/components/ui/footer1";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NSFW AI Chatbot | AI Chat with Text, Voice & Video",
  description: "Chat with a flirty AI bot using NSFW text, voice, and video. Enjoy private conversations with your AI Chatbot, tailored to your desires.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} antialiased font-sans bg-background`}
      >
    <div className="max-w-7xl mx-auto">
      <Navbar5 />
      {children}
      <Footer1 />
    </div>
      </body>
    </html>
  );
}
