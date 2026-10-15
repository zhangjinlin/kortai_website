"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

// ============================================================
// 替换这三张 Hero 轮播背景图
// ============================================================
const heroSlides = [
  {
    id: 1,
    image: "https://res.kortai.info/banner/banner_1.png",
    alt: "Kort AI Banner 1",
  },
  {
    id: 2,
    image: "https://res.kortai.info/banner/banner_2.png",
    alt: "Kort AI Banner 2",
  },
  {
    id: 3,
    image: "https://res.kortai.info/banner/banner_3.png",
    alt: "Kort AI Banner 3",
  },
];

// ============================================================
// AI Videos 分类与作品数据
// ============================================================
const videoCategories = [
  "All",
  "Realistic",
  "Anime",
  "Pets",
  "Fantasy",
  "Dance",
  "Cinematic",
  "AI Avatar",
  "Funny",
  "3D & Cartoon",
];

const videos = [
  { title: "Elegant Portrait", views: "1.2M", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
  { title: "Blue Hair Anime", views: "980K", image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=400&q=80" },
  { title: "Cute Cat", views: "2.1M", image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=80" },
  { title: "Neon City", views: "1.5M", image: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=400&q=80" },
  { title: "Office Lady", views: "876K", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80" },
  { title: "Beach Dog", views: "1.8M", image: "https://images.unsplash.com/photo-1519098901909-b1553a1190af?w=400&q=80" },
  { title: "White Hair Elf", views: "1.1M", image: "https://images.unsplash.com/photo-1616091093714-cfcca8ab7889?w=400&q=80" },
  { title: "Romantic Couple", views: "2.3M", image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400&q=80" },
  { title: "Party Girl", views: "992K", image: "https://images.unsplash.com/photo-1496440737103-cd596325d314?w=400&q=80" },
  { title: "Space Walk", views: "1.4M", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&q=80" },
];

// ============================================================
// Powerful AI Video Tools 数据
// ============================================================
const powerfulTools = [
  {
    title: "Image to Video",
    desc: "Turn your photos into stunning videos.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80",
  },
  {
    title: "Text to Video",
    desc: "Bring your ideas to life with a simple prompt.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80",
  },
  {
    title: "Multi-Image Video",
    desc: "Combine multiple images into a smooth video.",
    images: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&q=80",
    ],
  },
  {
    title: "AI Avatar",
    desc: "Create talking avatars with realistic expressions.",
    image: "https://images.unsplash.com/photo-1620332372374-f108c53d2e03?w=600&q=80",
  },
  {
    title: "Lip Sync",
    desc: "Make characters talk with natural lip sync.",
    image: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?w=600&q=80",
  },
];

// ============================================================
// 使用步骤
// ============================================================
const steps = [
  {
    no: "1",
    title: "Upload or Describe",
    desc: "Upload images, enter text, or choose a template.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    no: "2",
    title: "Customize",
    desc: "Select model, style, and settings to match your vision.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="21" x2="4" y2="14" />
        <line x1="4" y1="10" x2="4" y2="3" />
        <line x1="12" y1="21" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12" y2="3" />
        <line x1="20" y1="21" x2="20" y2="16" />
        <line x1="20" y1="12" x2="20" y2="3" />
        <line x1="1" y1="14" x2="7" y2="14" />
        <line x1="9" y1="8" x2="15" y2="8" />
        <line x1="17" y1="16" x2="23" y2="16" />
      </svg>
    ),
  },
  {
    no: "3",
    title: "Generate",
    desc: "Get your AI video in seconds and share it anywhere.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
  },
];

// ============================================================
// 社交媒体
// ============================================================
const socials = [
  {
    name: "X",
    href: "https://x.com/kortai",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@kortai",
    path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/kortai",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@kortai",
    path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  },
];

// ============================================================
// Generator 控制项
// ============================================================
const generatorControls = [
  {
    label: "Model",
    value: "PixVerse v3.5",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    label: "Aspect Ratio",
    value: "9:16 (TikTok)",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="6" width="16" height="12" rx="2" />
      </svg>
    ),
  },
  {
    label: "Duration",
    value: "3s",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    label: "Resolution",
    value: "720P",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

// ============================================================
// Footer 链接
// ============================================================
const footerColumns = [
  {
    title: "Tools",
    links: [
      { label: "AI Video Generator", href: "/#tools" },
      { label: "Image to Video", href: "/#tools" },
      { label: "Text to Video", href: "/#tools" },
      { label: "Video to Video", href: "/#tools" },
      { label: "AI Image Generator", href: "/#tools" },
      { label: "AI Avatar Generator", href: "/#tools" },
    ],
  },
  {
    title: "Effects",
    links: [
      { label: "AI Anime Generator", href: "/#tools" },
      { label: "AI Kiss Generator", href: "/#tools" },
      { label: "AI Dance Generator", href: "/#tools" },
      { label: "AI Hug Generator", href: "/#tools" },
      { label: "AI Lip Sync", href: "/#tools" },
      { label: "AI Face Swap", href: "/#tools" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
  {
    title: "Download",
    links: [
      { label: "App Store", href: "https://apps.apple.com/app/kort-ai/id6756208165" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.aigc.kort_ai" },
      { label: "Blog", href: "/blog" },
    ],
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("Image to Video");
  const [videoCategory, setVideoCategory] = useState("All");
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  // 自动轮播
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // 触摸滑动
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const scrollGallery = (direction: number) => {
    if (galleryRef.current) {
      const scrollAmount = 300;
      galleryRef.current.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#050511] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-sm text-white">
                K
              </span>
              <span className="text-white">Kort AI</span>
            </Link>
            <div className="hidden lg:flex items-center gap-8 text-sm text-gray-200">
              <Link href="/" className="text-white font-medium">Home</Link>
              <Link href="/#tools" className="hover:text-white transition-colors">AI Tools</Link>
              <Link href="/#explore" className="hover:text-white transition-colors">Explore</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link href="/about-us" className="hover:text-white transition-colors">About</Link>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <button className="hidden sm:flex items-center gap-1 text-gray-200 hover:text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              EN
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <button className="hidden sm:block px-4 py-2 text-gray-200 hover:text-white transition-colors">Sign in</button>
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity text-sm">
              Create Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Carousel */}
      <section
        className="relative w-full h-[38vh] sm:h-[45vh] lg:h-auto lg:aspect-[1942/809] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides */}
        <div
          className="absolute inset-0 flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide) => (
            <div key={slide.id} className="relative min-w-full h-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${slide.image}')` }}
              />
            </div>
          ))}
        </div>

        {/* 轻微渐变：仅压暗左侧一小片区域保证文字可读，尽量保留图片原色 */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050511]/80 via-[#050511]/25 to-transparent lg:w-1/2 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050511]/45 via-transparent to-transparent z-10 pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-9.5 h-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-0 flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
            {/* Left text & buttons */}
            <div className="max-w-xl pl-0 sm:pl-0">
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold leading-[1.08] mb-5">
                Turn Your
                <br />
                Imagination
                <br />
                <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
                  Into Motion.
                </span>
              </h1>
              <p className="text-gray-200/90 text-base sm:text-lg mb-7 max-w-md leading-relaxed">
                Create stunning AI videos from photos, text, and ideas.
                <br />
                Bring every moment to life with Kort AI.
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <button className="px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                  Create AI Video
                  <span>→</span>
                </button>
                <button className="px-7 py-3.5 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm text-white font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download App
                </button>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://apps.apple.com/app/kort-ai/id6756208165"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-black/60 border border-white/10 rounded-xl hover:bg-black/80 transition-colors"
                >
                  <svg width="20" height="24" viewBox="0 0 24 28" fill="currentColor">
                    <path d="M19.57 14.82c-.01-1.82.8-3.2 2.43-4.21a5.22 5.22 0 00-4.12-2.24c-1.73-.18-3.42 1.03-4.3 1.03-.9 0-2.28-.99-3.75-.96-1.92.03-3.7 1.12-4.69 2.85-2.04 3.54-.52 8.76 1.44 11.63.98 1.4 2.12 2.97 3.62 2.92 1.46-.06 2-.95 3.76-.95 1.76 0 2.25.95 3.78.91 1.57-.03 2.55-1.42 3.5-2.83a11.67 11.67 0 001.6-3.28 5.06 5.06 0 01-3.27-4.87zM16.14 5.28A5.03 5.03 0 0017.88.54a5.15 5.15 0 00-3.62 1.88 4.8 4.8 0 00-1.1 3.47 4.27 4.27 0 003.36-1.75l-.39.14z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] text-gray-400 leading-none">Download on the</div>
                    <div className="text-sm font-semibold -mt-0.5">App Store</div>
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.aigc.kort_ai"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-black/60 border border-white/10 rounded-xl hover:bg-black/80 transition-colors"
                >
                  <svg width="22" height="24" viewBox="0 0 28 30" fill="none">
                    <path d="M1.63.94L15.4 14.7 1.63 28.47A2.08 2.08 0 011 26.41V3.02c0-.76.24-1.5.63-2.08z" fill="#3DDC84" />
                    <path d="M20.66 20.02L15.4 14.7l5.26-5.31 1.6.86c1.55.88 2.2.96 2.2 3.89 0 2.93-.65 3-2.2 3.89l-1.6.8z" fill="#FFC107" />
                    <path d="M20.66 20.02L15.4 14.7 1.63.94C2.3.35 3.29 0 4.4 0c1.11 0 2.1.35 4.53 1.7l11.73 6.65v.06l-5.26 5.3 5.26 5.3z" fill="#F44336" />
                    <path d="M1.63 28.47l13.77-13.77h.92L2.93 28.14a2.18 2.18 0 01-1.3.33z" fill="#2196F3" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] text-gray-400 leading-none">GET IT ON</div>
                    <div className="text-sm font-semibold -mt-0.5">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right visual annotations */}
            <div className="hidden lg:block relative min-h-[420px]">
              {/* Floating hand-written annotation */}
              {/* <div className="absolute top-10 left-4 transform -rotate-12">
                <div className="text-white text-2xl font-light italic drop-shadow-lg" style={{ fontFamily: "'Brush Script MT', cursive" }}>
                  AI Video
                  <br />
                  Made Easy
                </div>
                <svg width="80" height="60" viewBox="0 0 80 60" className="text-white/70 -mt-2 ml-4 drop-shadow">
                  <path d="M10 10 Q30 50 70 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" markerEnd="url(#arrowhead)" />
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                    </marker>
                  </defs>
                </svg>
              </div> */}

              {/* Center play button area */}
              {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <button className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-purple-500/20">
                  <span className="text-2xl ml-1">▶</span>
                </button>
              </div> */}

              {/* Feature list on right */}
              {/* <div className="absolute top-8 right-0 bg-black/25 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 text-sm">
                {["Photos", "Text", "Multi-Image", "Avatar", "Lip Sync"].map((item) => (
                  <div key={item} className="flex items-center gap-2 py-1.5 text-white/90">
                    <span className="text-purple-300">✓</span>
                    {item}
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx
                ? "w-8 bg-gradient-to-r from-pink-500 to-purple-600"
                : "w-2 bg-white/30 hover:bg-white/50"
                }`}
            />
          ))}
        </div>

      </section>

      {/* ============================================================
          Try AI Video Generator — overlaps the banner bottom
      ============================================================ */}
      <section className="relative z-30 -mt-16 sm:-mt-24 lg:-mt-10 px-4 sm:px-6 lg:px-10 pb-10">
        <div className="max-w-screen-2xl mx-auto">
          <div className="rounded-3xl bg-[#0a0a1a]/90 backdrop-blur-xl border border-white/10 p-6 sm:p-8 shadow-2xl shadow-purple-900/20">
            {/* Header + Tabs */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-start gap-5 mb-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-1">
                  Try AI Video Generator
                </h2>
                <p className="text-gray-400 text-sm">
                  Create amazing videos in seconds. No complex skills required.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Image to Video", "Text to Video", "Multi-Image", "Avatar", "Lip Sync"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${activeTab === tab
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/20"
                      : "border border-white/15 text-gray-300 hover:border-white/30 hover:text-white"
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Main workspace */}
            <div className="grid lg:grid-cols-12 gap-5">
              {/* Upload area */}
              <div className="lg:col-span-3">
                <div className="h-full min-h-[220px] rounded-2xl border border-dashed border-white/20 bg-white/[0.03] flex flex-col items-center justify-center text-center p-4 hover:border-purple-500/40 hover:bg-white/[0.05] transition-colors cursor-pointer">
                  <div className="w-20 h-20 rounded-xl overflow-hidden mb-3 border border-white/10">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80"
                      alt="Upload preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2 text-white/80">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-white">Upload an image</p>
                  <p className="text-xs text-gray-500">( JPG / PNG / WebP )</p>
                </div>
              </div>

              {/* Center input + controls */}
              <div className="lg:col-span-6 flex flex-col gap-4">
                <div className="flex-1 min-h-[160px] rounded-2xl bg-[#111126] border border-white/10 p-4 flex flex-col">
                  <textarea
                    className="flex-1 bg-transparent resize-none outline-none text-sm text-white placeholder-gray-500"
                    placeholder="Describe the video you want to create. (e.g. A girl walking on the beach, cinematic style, warm sunlight)"
                    maxLength={500}
                    defaultValue=""
                  />
                  <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                    <span className="text-gray-600">@</span>
                    <span>0/500</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {generatorControls.map((ctl) => (
                    <div
                      key={ctl.label}
                      className="rounded-xl bg-[#111126] border border-white/10 p-3 hover:border-white/20 transition-colors cursor-pointer"
                    >
                      <label className="block text-[10px] text-gray-500 mb-1 uppercase tracking-wider">{ctl.label}</label>
                      <div className="flex items-center gap-2 text-sm text-white">
                        {ctl.icon}
                        <span className="truncate">{ctl.value}</span>
                        <svg className="ml-auto w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Generate button + preview */}
              <div className="lg:col-span-3 flex flex-col gap-4">
                <button className="w-full py-3.5 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
                  </svg>
                  Generate Video
                  <span>→</span>
                </button>

                <div className="relative flex-1 min-h-[220px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-purple-900/40 to-pink-900/40">
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80"
                    alt="Generated preview"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />

                  {/* Side thumbnails */}
                  <div className="absolute top-2 right-2 flex flex-col gap-2">
                    {[
                      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&q=80",
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
                      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=200&q=80",
                    ].map((src, i) => (
                      <div key={i} className="w-11 h-11 rounded-lg overflow-hidden border border-white/20">
                        <img src={src} alt="" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>

                  {/* Hand-written label */}
                  <div className="absolute -left-10 top-1/2 -translate-y-1/2 transform -rotate-12 text-white text-lg italic drop-shadow-lg" style={{ fontFamily: "'Brush Script MT', cursive" }}>
                    From image
                    <br />
                    to video
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          Stunning AI Videos Created with Kort AI
      ============================================================ */}
      <section id="explore" className="relative py-16 px-4 sm:px-6">
        <div className="max-w-screen-2xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Stunning{" "}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                AI Videos
              </span>{" "}
              Created with Kort AI
            </h2>
            <button className="text-sm text-white flex items-center gap-1 hover:text-purple-300 transition-colors shrink-0">
              Explore More <span>→</span>
            </button>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {videoCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setVideoCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${videoCategory === cat
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-purple-500/20"
                  : "border border-white/15 text-gray-300 hover:border-white/30 hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Horizontal scroll gallery */}
          <div className="relative group/gallery">
            <button
              onClick={() => scrollGallery(-1)}
              className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/10 items-center justify-center text-white hover:bg-black/80 transition-colors opacity-0 group-hover/gallery:opacity-100"
            >
              ←
            </button>

            <div
              ref={galleryRef}
              className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
            >
              {videos.map((v) => (
                <div
                  key={v.title}
                  className="relative flex-shrink-0 w-[150px] sm:w-[170px] aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer bg-[#111126]"
                >
                  <img
                    src={v.image}
                    alt={v.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  {/* Hover play */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm ml-0.5">▶</span>
                  </div>

                  {/* Views */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-white/90">
                    <span className="text-[10px]">▶</span>
                    <span>{v.views}</span>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollGallery(1)}
              className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/10 items-center justify-center text-white hover:bg-black/80 transition-colors opacity-0 group-hover/gallery:opacity-100"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================
          Powerful AI Video Tools
      ============================================================ */}
      <section id="tools" className="relative py-16 px-4 sm:px-6 bg-[#08081a]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Powerful{" "}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                AI Video Tools
              </span>
            </h2>
            <p className="text-gray-400 text-sm">
              Multiple creative ways to turn your ideas into stunning videos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {powerfulTools.map((tool) => (
              <div
                key={tool.title}
                className="group flex h-[130px] rounded-2xl bg-[#0a0a1a] border border-white/10 overflow-hidden hover:border-purple-500/40 transition-all cursor-pointer"
              >
                {/* Left image */}
                <div className="w-[45%] h-full relative overflow-hidden shrink-0">
                  {tool.images ? (
                    <div className="grid grid-rows-2 gap-1 w-full h-full p-2">
                      {tool.images.map((src, i) => (
                        <div key={i} className="rounded-md overflow-hidden">
                          <img
                            src={src}
                            alt=""
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <img
                      src={tool.image}
                      alt={tool.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>

                {/* Right text */}
                <div className="flex-1 p-3 sm:p-4 flex flex-col justify-center">
                  <h3 className="font-semibold text-sm mb-1">{tool.title}</h3>
                  <p className="text-gray-400 text-[11px] leading-relaxed mb-2">{tool.desc}</p>
                  <span className="text-base text-white/70 group-hover:text-white transition-colors mt-auto">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          How It Works + Get Kort AI App (side by side)
      ============================================================ */}
      <section className="relative py-16 px-4 sm:px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            {/* Left: How It Works */}
            <div className="rounded-3xl bg-[#0a0a1a]/80 border border-white/10 p-6 sm:p-8 flex flex-col">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">How It Works</h2>
              <p className="text-gray-400 text-sm mb-6">
                Create professional AI videos in just 3 simple steps.
              </p>

              <div className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-6">
                {steps.map((step, index) => (
                  <React.Fragment key={step.no}>
                    <div className="flex-1 text-center">
                      <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white mb-3 shadow-lg shadow-purple-500/20">
                        {step.icon}
                      </div>
                      <h3 className="font-semibold text-sm mb-1">
                        {index + 1}. {step.title}
                      </h3>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden sm:block w-10 border-t border-dashed border-white/20 self-start mt-6" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Right: Get Kort AI App */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[80px] pointer-events-none" />

              <div className="grid lg:grid-cols-2 gap-6 items-center relative z-10">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">Get Kort AI App</h2>
                  <p className="text-white/90 mb-6 text-sm">
                    Create AI videos anytime, anywhere.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://apps.apple.com/app/kort-ai/id6756208165"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-black rounded-xl hover:bg-black/80 transition-colors"
                    >
                      <svg width="18" height="22" viewBox="0 0 24 28" fill="currentColor">
                        <path d="M19.57 14.82c-.01-1.82.8-3.2 2.43-4.21a5.22 5.22 0 00-4.12-2.24c-1.73-.18-3.42 1.03-4.3 1.03-.9 0-2.28-.99-3.75-.96-1.92.03-3.7 1.12-4.69 2.85-2.04 3.54-.52 8.76 1.44 11.63.98 1.4 2.12 2.97 3.62 2.92 1.46-.06 2-.95 3.76-.95 1.76 0 2.25.95 3.78.91 1.57-.03 2.55-1.42 3.5-2.83a11.67 11.67 0 001.6-3.28 5.06 5.06 0 01-3.27-4.87zM16.14 5.28A5.03 5.03 0 0017.88.54a5.15 5.15 0 00-3.62 1.88 4.8 4.8 0 00-1.1 3.47 4.27 4.27 0 003.36-1.75l-.39.14z" />
                      </svg>
                      <div className="text-left">
                        <div className="text-[9px] text-gray-400 leading-none">Download on the</div>
                        <div className="text-xs font-semibold -mt-0.5">App Store</div>
                      </div>
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.aigc.kort_ai"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-black rounded-xl hover:bg-black/80 transition-colors"
                    >
                      <svg width="20" height="22" viewBox="0 0 28 30" fill="none">
                        <path d="M1.63.94L15.4 14.7 1.63 28.47A2.08 2.08 0 011 26.41V3.02c0-.76.24-1.5.63-2.08z" fill="#3DDC84" />
                        <path d="M20.66 20.02L15.4 14.7l5.26-5.31 1.6.86c1.55.88 2.2.96 2.2 3.89 0 2.93-.65 3-2.2 3.89l-1.6.8z" fill="#FFC107" />
                        <path d="M20.66 20.02L15.4 14.7 1.63.94C2.3.35 3.29 0 4.4 0c1.11 0 2.1.35 4.53 1.7l11.73 6.65v.06l-5.26 5.3 5.26 5.3z" fill="#F44336" />
                        <path d="M1.63 28.47l13.77-13.77h.92L2.93 28.14a2.18 2.18 0 01-1.3.33z" fill="#2196F3" />
                      </svg>
                      <div className="text-left">
                        <div className="text-[9px] text-gray-400 leading-none">GET IT ON</div>
                        <div className="text-xs font-semibold -mt-0.5">Google Play</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Phone mockups */}
                <div className="hidden lg:flex justify-end items-end gap-3 pr-4">
                  <div className="w-28 h-56 rounded-[2rem] bg-black border-[3px] border-white/20 overflow-hidden transform -rotate-6 translate-y-4 shadow-2xl shadow-black/40">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80"
                      alt="App preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-28 h-56 rounded-[2rem] bg-black border-[3px] border-white/20 overflow-hidden transform rotate-6 -translate-y-2 shadow-2xl shadow-black/40">
                    <img
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80"
                      alt="App preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          Footer
      ============================================================ */}
      <footer className="border-t border-white/10 bg-[#050511] py-8 px-4 sm:px-6">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-sm text-white">
              K
            </span>
            <div>
              <div className="font-bold text-sm">Kort AI</div>
              <div className="text-xs text-gray-500">Turn imagination into motion.</div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-5 text-sm text-gray-400">
            <Link href="/about-us" className="hover:text-white transition-colors">About</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Social + copyright */}
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                className="text-gray-500 hover:text-white transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
            <span className="text-xs text-gray-600 ml-2">© 2026 Kort AI. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
