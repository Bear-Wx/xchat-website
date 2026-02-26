import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "XChat — Private Messaging on Nostr",
  description:
    "XChat is a privacy-first communication system organized around independent circles. Switch easily between friends, family, and work—keeping each circle separate and organized. Built on open protocols like Nostr, XChat requires no phone numbers, email addresses, or centralized accounts. Your identity is defined by cryptographic keys, giving you direct control over access and communication. Designed for small, trusted circles where privacy, clarity, and control matter most.",
  keywords: [
    "XChat",
    "privacy-first messaging",
    "private circles",
    "independent circles",
    "Nostr",
    "open protocol",
    "decentralized messaging",
    "no phone number",
    "no email",
    "cryptographic keys",
    "key-based identity",
    "end-to-end encryption",
    "custom relay",
    "file server",
    "data control",
    "local encrypted storage",
    "message deletion",
    "no tracking",
    "no data collection",
    "open source",
    "friends and family",
    "private teams",
    "journalists",
    "researchers",
    "privacy-conscious",
    "small trusted communities",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSansSC.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
