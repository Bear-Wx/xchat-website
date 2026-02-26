"use client";

import Image from "next/image";
import { useState, useEffect } from "react";


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

export default function Home() {
  const [headerTextColor, setHeaderTextColor] = useState("text-white");
  const [scrollingTexts, setScrollingTexts] = useState<Array<{
    direction: string;
    animationClass: string;
    position: { top?: string; left?: string; right?: string; bottom?: string };
    duration: number;
    delay: number;
    vertical?: boolean;
  }>>([]);

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

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          // Check if section has white background
          const hasWhiteBg = section.classList.contains("bg-white");
          if (hasWhiteBg) {
            setHeaderTextColor("text-[#8a7af8]");
          } else {
            setHeaderTextColor("text-white");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="text-slate-900">
      <header className={`fixed top-0 left-0 right-0 z-[100] backdrop-blur-md py-4 ${headerTextColor} transition-colors duration-300`}>
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-1 items-center">
              <div className="flex items-center gap-2">
                {/* X symbol with rounded ends */}
                <svg className="w-8 h-8 x-logo-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
                {/* Chat text */}
                <span className="font-extrabold text-xl">Chat</span>
              </div>
            </div>
            <nav className={`flex flex-1 items-center justify-end gap-6 text-base font-medium ${headerTextColor === "text-white" ? "text-white/90" : "text-[#8a7af8]/90"} transition-colors duration-300`}>
              <a href="#home" className={`${headerTextColor === "text-white" ? "hover:text-white" : "hover:text-[#8a7af8]"} transition-colors`}>
                Home
              </a>
              <a href="#experience" className={`${headerTextColor === "text-white" ? "hover:text-white" : "hover:text-[#8a7af8]"} transition-colors`}>
                Experience
              </a>
              <a href="#about" className={`${headerTextColor === "text-white" ? "hover:text-white" : "hover:text-[#8a7af8]"} transition-colors`}>
                Technical
              </a>
              <a href="#features" className={`${headerTextColor === "text-white" ? "hover:text-white" : "hover:text-[#8a7af8]"} transition-colors`}>
                For You
              </a>
              <a href="#opensource" className={`${headerTextColor === "text-white" ? "hover:text-white" : "hover:text-[#8a7af8]"} transition-colors`}>
                Open Source
              </a>
      
        
            </nav>
            {/* <button className={`rounded-full ${headerTextColor === "text-white" ? "border-white/40 text-white/90 hover:text-white" : "border-[#8a7af8]/40 text-[#8a7af8]/90 hover:text-[#8a7af8]"} border px-4 py-1 text-base transition-colors`}>
              English
            </button> */}
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
                No phone numbers. No tracking. No middlemen. Just you, your keys, and the people you
                trust. Built on Nostr&apos;s decentralized network, XChat gives you back what Big Tech
                took away—real privacy, real control, real freedom.
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
              <a href="#" className="inline-block text-base text-white/80 hover:text-white transition-colors underline underline-offset-4">
                Learn more →
              </a>
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
            <div className="space-y-8 rounded-[40px] border border-slate-200 bg-white p-6 lg:p-10 shadow-lg">
            <div className="flex flex-col gap-3 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-600">
                PERFECT FOR
              </p>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900">Built for the people who matter</h3>
              <p className="text-lg text-slate-700">
                Whether it's your family, close friends, or your private circle—XChat keeps your conversations secure and intimate.
              </p>
              <a
                href="#home"
                className="inline-block mt-4 text-base font-semibold text-slate-700 hover:text-slate-900 transition-colors underline underline-offset-4"
              >
                Download now →
              </a>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {whyFeatureCards.map((card, idx) => {
                const illustrations = [
                  // Family
                  <Image
                    key="family"
                    src="/img/AbstractFamily.png"
                    alt="Family"
                    width={200}
                    height={200}
                    className="w-full h-full object-contain"
                  />,
                  // Friends
                  <Image
                    key="friends"
                    src="/img/AbstractFriends.png"
                    alt="Friends"
                    width={200}
                    height={200}
                    className="w-full h-full object-contain"
                  />,
                  // Privacy-conscious individuals
                  <Image
                    key="privacy"
                    src="/img/AbstractPrivacy.png"
                    alt="Privacy"
                    width={200}
                    height={200}
                    className="w-full h-full object-contain"
                  />,
                ];
                return (
                <div
                  key={card.title}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-gradient-to-br from-[#c084fc]/10 to-[#818cf8]/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative mx-auto h-[200px] w-[200px] flex items-center justify-center transition-transform duration-300 hover:scale-105">
                    {illustrations[idx]}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 text-center">
                    {card.title}
                  </h4>
                  <p className="text-base text-slate-700 text-center">{card.desc}</p>
                </div>
              )})}
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
              <a
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
              </a>
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
              <div className="flex flex-wrap items-center justify-between gap-3 text-base text-white/90">
                <p>© {new Date().getFullYear()} XChat. All rights reserved.</p>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-white">
                    Terms
                  </a>
                  <a href="#" className="hover:text-white">
                    Privacy
                  </a>
                </div>
              </div>
            </footer>
          </section>
      </div>
    </div>
  );
}
