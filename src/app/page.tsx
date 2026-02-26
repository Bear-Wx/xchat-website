"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import friendImage from "@/app/assets/images/friend.png";
import chatIcon from "@/app/assets/images/chat.png";
import privacyTeamImage from "@/app/assets/images/privacy_team.png";
import privateIcon from "@/app/assets/images/private.png";
import journalistImage from "@/app/assets/images/journalist.png";
import researcherIcon from "@/app/assets/images/saas-researcher-a.png";
import communityIcon from "@/app/assets/images/community.png";


const downloadButtons = [
  { label: "App Store", image: "/img/app_store_icon.431fa28d.png", downloadUrl: "https://apps.apple.com/us/app/xchat-private-circles/id6747972868" },
  { label: "Google Play", image: "/img/google_play_black_icon.6a443fcf.png", downloadUrl: "https://play.google.com/store/apps/details?id=com.oxchat.lite" },
  { label: "TestFlight", image: "/img/testFlight_icon.fb7707ec.png", downloadUrl: "https://testflight.apple.com/join/AjrmCAba" },
  { label: "APK", image: "/img/apk_icon.ab625a1a.png", downloadUrl: "https://github.com/xchat-app/xchat-app-main/releases" },
];

const useCaseScenarios = [
  {
    title: "Nostr Protocol Account",
    desc: "Decentralized identity system based on Nostr protocol. Uses npub public key as unique identifier, no phone number or email required.",
    image: "/img/nostr.png",
  },
  {
    title: "MLS Protocol Group Chat",
    desc: "Message Layer Security (MLS) protocol provides efficient end-to-end encrypted group communication, supporting large-scale group chats.",
    image: "/img/mls.png",
  },
  {
    title: "Decentralized Relay",
    desc: "Connect to multiple Nostr relay servers with no single point of failure. Messages transmitted and stored across distributed network.",
    image: "/img/relay.png",
  },
  {
    title: "Encrypted Local Database",
    desc: "All data encrypted and stored locally using strong encryption algorithms. Only you can decrypt and access your own data.",
    image: "/img/database.png",
  },
];

const whyFeatureCards = [
  {
    title: "Family",
    desc: "Keep your family conversations private and secure. Share moments, plans, and memories without worrying about data collection.",
    badge: "01",
    image: "/img/illustration00.png",
  },
  {
    title: "Friends",
    desc: "Connect with close friends in intimate groups. No algorithms, no feeds—just real conversations with people who matter.",
    badge: "02",
    image: "/img/illustration11.png",
  },
  {
    title: "Privacy-conscious individuals",
    desc: "For those who value true privacy. Take back control of your communication and protect your digital life.",
    badge: "03",
    image: "/img/illustration22.png",
  },
];

const keyFeatures = [
  { title: "Switch circles in one tap", desc: "Seamlessly move between friends, family, and work—each circle stays separate.", icon: "circles" },
  { title: "No phone or email", desc: "Key-based identity on open protocols. No centralized account required.", icon: "key" },
  { title: "End-to-end encryption", desc: "Messages and media encrypted. Only you and your circle can read them.", icon: "lock" },
  { title: "Your data, your choice", desc: "Custom relays and file servers. Local encrypted storage you control.", icon: "storage" },
  { title: "Two-way delete", desc: "Delete messages and media for everyone. No leftover copies.", icon: "delete" },
  { title: "No tracking, no collection", desc: "We don’t track users or collect your data. Fully open source.", icon: "shield" },
];

const appScreenshots = [
  {
    image: "/img/1.png",
  },
  {
    image: "/img/2.png",
  },
  {
    image: "/img/3.png",
  },
  {
    image: "/img/4.png",
  },
  {
    image: "/img/5.png",
  },
];

const HEADER_TOP_THRESHOLD = 80;

export default function Home() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [scrollingTexts, setScrollingTexts] = useState<Array<{
    direction: string;
    animationClass: string;
    position: { top?: string; left?: string; right?: string; bottom?: string };
    duration: number;
    delay: number;
    vertical?: boolean;
  }>>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < HEADER_TOP_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Fixed 2 scrolling texts with specific directions
    const selected = [
      {
        direction: 'bg-text-scroll-right',
        animationClass: 'bg-text-scroll-right',
        position: { top: '30%' },
        duration: 30,
        delay: 0,
        vertical: false,
      },
      {
        direction: 'bg-text-scroll-left',
        animationClass: 'bg-text-scroll-left',
        position: { top: '70%' },
        duration: 30,
        delay: 0,
        vertical: false,
      },
    ];
    setScrollingTexts(selected);
  }, []);

  return (
    <div className="text-slate-900">
      <header
        className={`fixed top-0 left-0 right-0 z-[100] backdrop-blur-md py-4 transition-all duration-300 ${
          isAtTop
            ? "bg-transparent text-white"
            : "bg-white/90 text-slate-800 shadow-sm"
        }`}
      >
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-1 items-center">
              <div className="flex items-center gap-2">
                {/* X symbol with rounded ends */}
                <svg
                  className={`w-8 h-8 x-logo-spin ${isAtTop ? "text-white" : "text-slate-800"}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
                {/* Chat text */}
                <span className={`font-extrabold text-xl ${isAtTop ? "text-white" : "text-slate-800"}`}>
                  Chat
                </span>
              </div>
            </div>
            <nav
              className={`flex flex-1 items-center justify-end gap-6 text-base font-medium transition-colors duration-300 ${
                isAtTop ? "text-white/90" : "text-slate-700"
              }`}
            >
              <a
                href="#home"
                className={isAtTop ? "hover:text-white" : "hover:text-slate-900"}
              >
                Home
              </a>
              <a
                href="#experience"
                className={isAtTop ? "hover:text-white" : "hover:text-slate-900"}
              >
                Experience
              </a>
              <a
                href="#about"
                className={isAtTop ? "hover:text-white" : "hover:text-slate-900"}
              >
                Technical
              </a>
              <a
                href="#features"
                className={isAtTop ? "hover:text-white" : "hover:text-slate-900"}
              >
                For You
              </a>
              <a
                href="#opensource"
                className={isAtTop ? "hover:text-white" : "hover:text-slate-900"}
              >
                Open Source
              </a>
            </nav>
          </div>
        </div>
      </header>
      <div className="relative isolate overflow-x-hidden">
          <section id="home" className="min-h-screen flex items-center px-4 py-20 scroll-snap-align-start pt-20 bg-gradient-to-br from-[#c084fc] to-[#818cf8] relative overflow-hidden">
            {/* Background scrolling text animations - only 2 random texts */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              {scrollingTexts.map((text, idx) => (
                <div
                  key={idx}
                  className={`absolute ${text.animationClass} whitespace-nowrap`}
                  style={{
                    ...text.position,
                    animationDuration: `${text.duration}s`,
                    animationDelay: `${text.delay}s`,
                    writingMode: text.vertical ? 'vertical-rl' : 'horizontal-tb',
                    textOrientation: text.vertical ? 'mixed' : 'mixed',
                  }}
                >
                  <span className="text-[120px] font-extrabold text-white/10 select-none">COMMUNICATION SHOULD BE FREE</span>
                </div>
              ))}
            </div>
            
            {/* Background decorations for first page */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-[#c084fc]/40 to-[#818cf8]/30 blur-3xl" />
              <div className="absolute left-[-200px] top-1/3 h-[360px] w-[360px] rounded-full bg-gradient-to-br from-[#818cf8]/20 to-transparent blur-3xl" />
              <div className="absolute right-[-180px] top-[55%] h-[280px] w-[280px] rounded-full bg-gradient-to-br from-[#c084fc]/25 to-transparent blur-3xl" />
            </div>
            <div className="relative mx-auto w-full max-w-6xl z-10">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6 text-white">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-[#00000010]">
                ✨ COMMUNICATION SHOULD BE FREE
              </span>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Safe, simple, and private messaging for the people who matter
              </h1>
              <p className="text-lg text-white/90">
                Switch between friends, family, and work in one tap—each circle stays separate and undisturbed. Built on Nostr, no phone number or email needed; your identity is your keys, and you decide where your data lives. Made for small, trusted circles where privacy and clear boundaries matter.
              </p>
              <div id="download" className="grid grid-cols-2 gap-4 max-w-md">
                {downloadButtons.map((btn) => (
                  <a
                    key={btn.label}
                    href={btn.downloadUrl}
                    target="_blank"
                    className="block w-full rounded-[12px] border border-transparent transition hover:-translate-y-1"
                  >
                    <Image
                      src={btn.image}
                      alt={`${btn.label} button`}
                      width={200}
                      height={60}
                      className="h-auto w-full rounded-[12px]"
                      priority={btn.label === "App Store"}
                    />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="transition-transform duration-300 hover:scale-105">
                <Image
                  src="/img/State-of-the-art.png"
                  alt="XChat app preview"
                  width={400}
                  height={380}
                  className="h-auto w-full max-w-[500px] lg:max-w-[600px]"
                  priority
                />
              </div>
            </div>
            </div>
            </div>
          </section>


          {/* --- WHY XCHAT --- */}
          <section id="why-xchat" className="py-24 bg-white relative overflow-hidden">
            <div className="container relative mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden aspect-square md:aspect-auto md:h-[600px] border border-slate-200 shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1761435739748-879d2ecf0c70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwZnJpZW5kcyUyMGNoYXR0aW5nJTIwb3V0ZG9vcnN8ZW58MXx8fHwxNzcyMDgyNjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Community interaction"
                  width={1080}
                  height={1080}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="order-1 md:order-2 space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                  Why choose <span className="text-[#8a7af8]">XChat</span>?
                </h2>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="mt-1 bg-emerald-500/10 p-2 rounded-lg h-fit">
                      <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.187-.382-3.208z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Clear boundaries</h3>
                      <p className="text-slate-600">
                        XChat is built for people who want clear boundaries between conversations—not one endless feed. Your work, life, and interest circles stay completely separate.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1 bg-[#8a7af8]/10 p-2 rounded-lg h-fit">
                      <svg className="w-6 h-6 text-[#8a7af8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">You control the interaction</h3>
                      <p className="text-slate-600">
                        By splitting communication into separate circles and removing centralized identifiers, XChat keeps your conversations private, intentional, and in your control—no complicated setup.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- AUDIENCE SECTION --- */}
          <section id="audience" className="py-24 bg-gradient-to-br from-[#c084fc] to-[#818cf8] relative overflow-hidden">
            {/* Background - same as Built on Open Protocols */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-[#c084fc]/40 to-[#818cf8]/30 blur-3xl" />
              <div className="absolute left-[-200px] top-1/3 h-[360px] w-[360px] rounded-full bg-gradient-to-br from-[#818cf8]/20 to-transparent blur-3xl" />
              <div className="absolute right-[-180px] top-[55%] h-[280px] w-[280px] rounded-full bg-gradient-to-br from-[#c084fc]/25 to-transparent blur-3xl" />
            </div>

            <div className="container relative mx-auto px-6 max-w-6xl z-10">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Who It's For</h2>
                <p className="text-white/90">Whoever you are, if privacy matters to you, XChat is for you.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: (
                      <Image src={chatIcon} alt="" width={32} height={32} className="w-8 h-8 object-contain" aria-hidden />
                    ),
                    title: "Friends & Family",
                    desc: "Share moments safely without worrying about data leaks.",
                    img: friendImage,
                  },
                  {
                    icon: (
                      <Image src={privateIcon} alt="" width={32} height={32} className="w-8 h-8 object-contain" aria-hidden />
                    ),
                    title: "Private Teams",
                    desc: "Keep work private. Protect business secrets.",
                    img: privacyTeamImage,
                  },
                  {
                    icon: (
                      <Image src={researcherIcon} alt="" width={32} height={32} className="w-8 h-8 object-contain" aria-hidden />
                    ),
                    title: "Journalists & Researchers",
                    desc: "Protect sources and keep your channels from being monitored.",
                    img: journalistImage,
                  },
                  {
                    icon: (
                      <Image src={communityIcon} alt="" width={32} height={32} className="w-8 h-8 object-contain" aria-hidden />
                    ),
                    title: "Privacy Communities",
                    desc: "Build small, trusted decentralized communities.",
                    img: "https://images.unsplash.com/photo-1692607431230-5fabd2b717cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="relative group overflow-hidden rounded-2xl bg-slate-800 aspect-[3/4] cursor-pointer transition-transform duration-300 hover:-translate-y-2.5"
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={400}
                      height={533}
                      className="absolute inset-0 w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-500"
                    />
                    {/* Gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent pointer-events-none" />
                    {/* Bottom block: icon + title at bottom, moves up on hover to reveal description */}
                    <div className="absolute bottom-0 left-0 w-full px-4 pt-8 transition-transform duration-300 ease-out group-hover:-translate-y-6">
                      <div className="mb-3">
                        {item.icon}
                      </div>
                      <h3 className="text-base font-bold text-white mb-2 flex items-end leading-tight">{item.title}</h3>
                      <p className="text-slate-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="experience" className="min-h-screen flex items-center px-4 py-20 scroll-snap-align-start bg-white relative">
            <div className="relative mx-auto w-full max-w-7xl z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                  Experience XChat
                </h2>
                <p className="text-lg text-slate-700 max-w-2xl mx-auto">
                  Discover the features that make XChat the most private messaging app
                </p>
              </div>
              <div className="relative">
                {/* Continuous scrolling carousel container */}
                <div className="overflow-hidden relative">
                  <div className="flex carousel-scroll">
                    {/* Duplicate items for loop */}
                    {[...appScreenshots, ...appScreenshots].map((screenshot, idx) => (
                      <div
                        key={idx}
                        className="flex-shrink-0 w-[300px] px-4"
                      >
                        <Image
                          src={screenshot.image}
                          alt={`Screenshot ${idx + 1}`}
                          width={300}
                          height={450}
                          className="w-full h-auto object-contain rounded-3xl"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="min-h-screen flex items-center px-4 py-20 scroll-snap-align-start bg-gradient-to-br from-[#c084fc] to-[#818cf8] relative overflow-hidden">
            {/* Background scrolling text animations - Geek/Sci-fi style */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              {/* npub - scroll right */}
              <div
                className="absolute bg-text-scroll-right whitespace-nowrap"
                style={{
                  top: '20%',
                  animationDuration: '10s',
                  animationDelay: '0s',
                }}
              >
                <span className="text-[120px] font-extrabold text-white/10 select-none font-mono">NPUB</span>
              </div>
              {/* nsec - scroll diagonal from top-right to bottom-left */}
              <div
                className="absolute bg-text-scroll-diagonal-tr-bl whitespace-nowrap"
                style={{
                  top: '35%',
                }}
              >
                <span className="text-[120px] font-extrabold text-white/10 select-none font-mono">NSEC</span>
              </div>
              {/* wss://relay - scroll left */}
              <div
                className="absolute bg-text-scroll-left whitespace-nowrap"
                style={{
                  top: '50%',
                  animationDuration: '10s',
                  animationDelay: '0s',
                }}
              >
                <span className="text-[120px] font-extrabold text-white/10 select-none font-mono">WSS://RELAY</span>
              </div>
              {/* mls - scroll diagonal from bottom-left to top-right */}
              <div
                className="absolute bg-text-scroll-diagonal-bl-tr whitespace-nowrap"
                style={{
                  top: '65%',
                }}
              >
                <span className="text-[120px] font-extrabold text-white/10 select-none font-mono">MLS</span>
              </div>
              {/* nostr - scroll right */}
              <div
                className="absolute bg-text-scroll-right whitespace-nowrap"
                style={{
                  top: '80%',
                  animationDuration: '10s',
                  animationDelay: '0s',
                }}
              >
                <span className="text-[120px] font-extrabold text-white/10 select-none font-mono">NOSTR</span>
              </div>
            </div>
            
            {/* Background decorations for third page */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-[#c084fc]/40 to-[#818cf8]/30 blur-3xl" />
              <div className="absolute left-[-200px] top-1/3 h-[360px] w-[360px] rounded-full bg-gradient-to-br from-[#818cf8]/20 to-transparent blur-3xl" />
              <div className="absolute right-[-180px] top-[55%] h-[280px] w-[280px] rounded-full bg-gradient-to-br from-[#c084fc]/25 to-transparent blur-3xl" />
            </div>
            <div className="relative mx-auto w-full max-w-6xl z-10">
            <div className="space-y-16">
            <div className="text-center text-white mb-15 lg:mb-20">
              <p className="text-base font-semibold uppercase tracking-[0.3em] text-white/90 mb-3">
                TECHNICAL FOUNDATION
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Built on Open Protocols</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-4">
                Powered by Nostr and MLS protocols. No proprietary servers. No vendor lock-in. Just pure, open-source technology.
              </p>
              {/* <a href="#" className="inline-block text-base text-white/80 hover:text-white transition-colors underline underline-offset-4">
                Learn more →
              </a> */}
            </div>
            <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {useCaseScenarios.map((scenario, idx) => {
              return (
              <div
                key={scenario.title}
                className="flex flex-col gap-4 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-sm p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-center w-20 h-20 mx-auto">
                  <Image
                    src={scenario.image}
                    alt={scenario.title}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-base sm:text-lg font-bold text-white">{scenario.title}</h3>
                  <p className="text-sm text-white/90">{scenario.desc}</p>
                </div>
              </div>
            )})}
            </div>
            </div>
            </div>
          </section>

          <section id="features" className="min-h-screen flex items-center px-4 py-20 scroll-snap-align-start bg-white relative">
            <div className="relative mx-auto w-full max-w-6xl z-10">
            <div className="space-y-10 rounded-[40px] border border-slate-200 bg-white p-6 lg:p-10 shadow-lg">
            <div className="flex flex-col gap-3 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-600">
                WHAT YOU GET
              </p>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900">Key Features</h3>
              <p className="text-lg text-slate-700 max-w-2xl mx-auto">
                Privacy-first capabilities built into every part of XChat—without sacrificing simplicity.
              </p>
              <a
                href="#home"
                className="inline-block mt-4 text-base font-semibold text-slate-700 hover:text-slate-900 transition-colors underline underline-offset-4"
              >
                Download now →
              </a>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {keyFeatures.map((item) => {
                const Icon = () => {
                  const cls = "w-6 h-6";
                  if (item.icon === "circles") return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
                  if (item.icon === "key") return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>;
                  if (item.icon === "lock") return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>;
                  if (item.icon === "storage") return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>;
                  if (item.icon === "delete") return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>;
                  return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.187-.382-3.208z" /></svg>;
                };
                return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-slate-100 bg-gradient-to-br from-[#c084fc]/5 to-[#818cf8]/5 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex-shrink-0 mt-0.5 bg-[#8a7af8]/10 p-2.5 rounded-xl h-fit text-[#8a7af8]">
                    <Icon />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              );})}
            </div>
            </div>
            </div>
          </section>

          <section id="opensource" className="min-h-screen flex flex-col justify-between px-4 py-20 scroll-snap-align-start bg-gradient-to-br from-[#c084fc] to-[#818cf8] relative">
            {/* Background decorations for fifth page */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-[#c084fc]/40 to-[#818cf8]/30 blur-3xl" />
              <div className="absolute left-[-200px] top-1/3 h-[360px] w-[360px] rounded-full bg-gradient-to-br from-[#818cf8]/20 to-transparent blur-3xl" />
              <div className="absolute right-[-180px] top-[55%] h-[280px] w-[280px] rounded-full bg-gradient-to-br from-[#c084fc]/25 to-transparent blur-3xl" />
            </div>
            <div className="relative mx-auto w-full max-w-6xl flex-1 flex flex-col justify-center z-10">
            <div className="space-y-6 text-center">
            <div className="flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                <svg
                  className="h-8 w-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Free and Open Source
            </h3>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              XChat is completely free and open source. Be part of the most popular Nostr messaging app,
              start collaborating with an amazing team of developers, designers, product owners and more.
              Join us in our mission to make communication more private and free!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://github.com/xchat-app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-slate-900 transition-all hover:bg-slate-100 hover:scale-105"
              >
                <span>😊</span>
                <span className="font-semibold">Good first issues</span>
                <span>→</span>
              </a>
              <a
                href="https://github.com/xchat-app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-slate-900 transition-all hover:bg-slate-100 hover:scale-105"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-semibold">Go to GitHub</span>
                <span>→</span>
              </a>
              {/* <a
                href="#contact"
                className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-slate-900 transition-all hover:bg-slate-100 hover:scale-105"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span className="font-semibold">Talk to a team member</span>
                <span>→</span>
              </a> */}
            </div>
            <div className="pt-8">
              <p className="text-base font-medium text-white/90 mb-3 text-center uppercase">SUPPORTED BY</p>
              <div className="flex justify-center">
                <a
                  href="https://opensats.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-lg bg-black px-6 py-3 text-white transition-all hover:bg-slate-800 hover:scale-105"
                >
                  <span className="text-lg font-mono text-orange-500">&gt;_</span>
                  <span className="font-semibold">OpenSats</span>
                </a>
              </div>
            </div>
            </div>
            </div>
            <footer id="contact" className="relative mx-auto w-full max-w-6xl pt-8 border-t border-white/20 z-10">
              <div className="flex flex-wrap items-center justify-center gap-3 text-base text-white/90">
                <p>© {new Date().getFullYear()} XChat. All rights reserved.</p>
                {/* <div className="flex gap-4">
                  <a href="#" className="hover:text-white">
                    Terms
                  </a>
                  <a href="#" className="hover:text-white">
                    Privacy
                  </a>
                </div> */}
              </div>
            </footer>
          </section>
      </div>
    </div>
  );
}
