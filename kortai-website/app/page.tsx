"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import "./page.less";

// ============================================================
// Hero 轮播背景图
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
  { title: "Elegant Portrait", views: "1.2M", image: "/images/gallery/01-beach-portrait.png" },
  { title: "Blue Hair Anime", views: "980K", image: "/images/gallery/02-blue-anime.png" },
  { title: "Cute Cat", views: "2.1M", image: "/images/gallery/03-orange-kitten.png" },
  { title: "Neon City", views: "1.5M", image: "/images/gallery/04-neon-portrait.png" },
  { title: "Office Lady", views: "876K", image: "/images/gallery/05-office-portrait.png" },
  { title: "Beach Dog", views: "1.8M", image: "/images/gallery/06-beach-retriever.png" },
  { title: "White Hair Elf", views: "1.1M", image: "/images/gallery/07-silver-anime.png" },
  { title: "Romantic Couple", views: "2.3M", image: "/images/gallery/08-romantic-couple.png" },
  { title: "Party Girl", views: "992K", image: "/images/gallery/09-purple-dancer.png" },
  { title: "Space Walk", views: "1.4M", image: "/images/gallery/10-astronaut.png" },
];

// ============================================================
// Powerful AI Video Tools 数据
// ============================================================
const powerfulTools = [
  {
    title: "Image to Video",
    desc: "Turn your photos into stunning videos.",
    image: "/images/gallery/01-beach-portrait.png",
  },
  {
    title: "Text to Video",
    desc: "Bring your ideas to life with a simple prompt.",
    image: "/images/tools/cloud-castle.png",
  },
  {
    title: "Multi-Image Video",
    desc: "Combine multiple images into a smooth video.",
    images: [
      "/images/gallery/05-office-portrait.png",
      "/images/gallery/01-beach-portrait.png",
      "/images/gallery/04-neon-portrait.png",
      "/images/gallery/05-office-portrait.png",
    ],
  },
  {
    title: "AI Avatar",
    desc: "Create talking avatars with realistic expressions.",
    image: "/images/tools/pink-avatar.png",
  },
  {
    title: "Lip Sync",
    desc: "Make characters talk with natural lip sync.",
    image: "/images/tools/headphone-singer.png",
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
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
      </svg>
    ),
  },
  {
    label: "Aspect Ratio",
    value: "9:16 (TikTok)",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="3" width="12" height="18" rx="3" />
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
    <div className="home">
      {/* ========== 顶部导航 ========== */}
      <nav className="nav">
        <div className="nav__inner">
          <div className="nav__brand">
            <Link href="/" className="nav__logo">
              <span className="nav__logo-mark">K </span>
              <span className="nav__logo-text">Kort AI</span>
            </Link>
            <div className="nav__links">
              <Link href="/" className="nav__link nav__link--active">Home</Link>
              <Link href="/#tools" className="nav__link">AI Tools</Link>
              <Link href="/#explore" className="nav__link">Explore</Link>
              <Link href="/#download" className="nav__link">Pricing</Link>
              <Link href="/blog" className="nav__link">Blog</Link>
              <Link href="/about-us" className="nav__link">About</Link>
            </div>
          </div>

          <div className="nav__actions">
            <button className="nav__lang">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              EN
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <button className="nav__signin">Sign in</button>
            <button className="nav__cta">Create Now</button>
          </div>
        </div>
      </nav>

      {/* ========== Hero 轮播 ========== */}
      <section
        className="hero"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* 轮播图片 */}
        <div
          className="hero__slides"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide) => (
            <div key={slide.id} className="hero__slide">
              <div
                className="hero__slide-bg"
                style={{ backgroundImage: `url('${slide.image}')` }}
              />
            </div>
          ))}
        </div>

        {/* 渐变遮罩：压暗左侧保证文字可读 */}
        <div className="hero__overlay hero__overlay--left" />
        <div className="hero__overlay hero__overlay--bottom" />

        {/* Hero 文字内容 */}
        <div className="hero__content">
          <div className="hero__grid">
            <div className="hero__left">
              <h1 className="hero__title">
                Turn Your
                <br />
                Imagination
                <br />
                <span className="hero__title-accent">Into Motion.</span>
              </h1>
              <p className="hero__desc">
                Create stunning AI videos from photos, text, and ideas.
                <br />
                Bring every moment to life with Kort AI.
              </p>

              <div className="hero__actions">
                <button className="hero__btn hero__btn--primary">
                  Create AI Video
                  <span>→</span>
                </button>
                <button className="hero__btn hero__btn--ghost">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download App
                </button>
              </div>

              <div className="hero__badges">
                <a
                  href="https://apps.apple.com/app/kort-ai/id6756208165"
                  target="_blank"
                  rel="noreferrer"
                  className="hero__badge"
                >
                  <svg width="20" height="24" viewBox="0 0 24 28" fill="currentColor">
                    <path d="M19.57 14.82c-.01-1.82.8-3.2 2.43-4.21a5.22 5.22 0 00-4.12-2.24c-1.73-.18-3.42 1.03-4.3 1.03-.9 0-2.28-.99-3.75-.96-1.92.03-3.7 1.12-4.69 2.85-2.04 3.54-.52 8.76 1.44 11.63.98 1.4 2.12 2.97 3.62 2.92 1.46-.06 2-.95 3.76-.95 1.76 0 2.25.95 3.78.91 1.57-.03 2.55-1.42 3.5-2.83a11.67 11.67 0 001.6-3.28 5.06 5.06 0 01-3.27-4.87zM16.14 5.28A5.03 5.03 0 0017.88.54a5.15 5.15 0 00-3.62 1.88 4.8 4.8 0 00-1.1 3.47 4.27 4.27 0 003.36-1.75l-.39.14z" />
                  </svg>
                  <span className="hero__badge-text">
                    <span className="hero__badge-label">Download on the</span>
                    <span className="hero__badge-name">App Store</span>
                  </span>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.aigc.kort_ai"
                  target="_blank"
                  rel="noreferrer"
                  className="hero__badge"
                >
                  <svg width="22" height="24" viewBox="0 0 28 30" fill="none">
                    <path d="M1.63.94L15.4 14.7 1.63 28.47A2.08 2.08 0 011 26.41V3.02c0-.76.24-1.5.63-2.08z" fill="#3DDC84" />
                    <path d="M20.66 20.02L15.4 14.7l5.26-5.31 1.6.86c1.55.88 2.2.96 2.2 3.89 0 2.93-.65 3-2.2 3.89l-1.6.8z" fill="#FFC107" />
                    <path d="M20.66 20.02L15.4 14.7 1.63.94C2.3.35 3.29 0 4.4 0c1.11 0 2.1.35 4.53 1.7l11.73 6.65v.06l-5.26 5.3 5.26 5.3z" fill="#F44336" />
                    <path d="M1.63 28.47l13.77-13.77h.92L2.93 28.14a2.18 2.18 0 01-1.3.33z" fill="#2196F3" />
                  </svg>
                  <span className="hero__badge-text">
                    <span className="hero__badge-label">GET IT ON</span>
                    <span className="hero__badge-name">Google Play</span>
                  </span>
                </a>
              </div>
            </div>

            {/* 右侧占位（手写标注等装饰位，暂留空） */}
            <div className="hero__right" aria-hidden="true" />
          </div>
        </div>

        {/* 轮播指示点 */}
        <div className="hero__dots">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`hero__dot ${currentSlide === idx ? "hero__dot--active" : ""}`}
            />
          ))}
        </div>
      </section>

      {/* ========== Try AI Video Generator（压在 banner 底部） ========== */}
      <section className="generator">
        <div className="generator__inner">
          <div className="generator__card">
            {/* 主体工作区：左大列 + 右预览列 */}
            <div className="generator__body">
              <div className="generator__col generator__col--left">
                {/* 标题 + 标签页 */}
                <div className="generator__header">
                  <div className="generator__heading">
                    <h2 className="generator__title">
                      Try <span className="generator__title-accent">AI Video</span> Generator
                    </h2>
                    <p className="generator__desc">Create amazing videos in seconds. No complex skills required.</p>
                  </div>

                  <div className="generator__tabs">
                    {["Image to Video", "Text to Video", "Multi-Image", "Avatar", "Lip Sync"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`generator__tab ${activeTab === tab ? "generator__tab--active" : ""}`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 左侧上传区 + 中间输入区 */}
                <div className="generator__work">
                  <div className="generator__upload">
                    <div className="generator__upload-preview">
                      <img
                        src="/images/gallery/05-office-portrait.png"
                        alt="Upload preview"
                      />
                    </div>
                    <div className="generator__upload-info">
                      <div className="generator__upload-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="17 8 12 3 7 8" />
                          <line x1="12" y1="3" x2="12" y2="15" />
                        </svg>
                      </div>
                      <p className="generator__upload-text">Upload an image</p>
                      <p className="generator__upload-hint">( JPG / PNG / WebP )</p>
                    </div>
                  </div>

                  {/* 中间输入区 + 控制项 */}
                  <div className="generator__main">
                    <div className="generator__input">
                      <textarea
                        className="generator__textarea"
                        placeholder={"Describe the video you want to create.\n(e.g. A girl walking on the beach, cinematic style, warm sunlight)"}
                        maxLength={500}
                        defaultValue=""
                      />
                      <div className="generator__input-meta">
                        <span className="generator__input-at">@</span>
                        <span>0/500</span>
                      </div>
                    </div>

                    <div className="generator__controls">
                      {generatorControls.map((ctl) => (
                        <div key={ctl.label} className="generator__control">
                          <label className="generator__control-label">{ctl.label}</label>
                          <div className="generator__control-value">
                            {ctl.icon}
                            <span className="generator__control-text">{ctl.value}</span>
                            <svg className="generator__control-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </div>
                        </div>
                      ))}
                      <button className="generator__btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
                        </svg>
                        Generate Video
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧生成结果预览 */}
              <div className="generator__col generator__col--preview">
                <div className="generator__preview">
                  {/* 手写标注 */}
                  <div className="generator__handwrite">
                    From image
                    <br />
                    to video
                  </div>

                  <div className="generator__preview-main">
                    <img
                      src="/images/gallery/01-beach-portrait.png"
                      alt="Generated preview"
                    />
                  </div>

                  {/* 右侧缩略图 */}
                  <div className="generator__thumbs">
                    {[
                      "/images/gallery/07-silver-anime.png",
                      "/images/gallery/03-orange-kitten.png",
                      "/images/gallery/10-astronaut.png",
                    ].map((src, i) => (
                      <div key={i} className="generator__thumb">
                        <img src={src} alt="" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Stunning AI Videos ========== */}
      <section id="explore" className="explore">
        <div className="explore__inner">
          {/* 标题栏 */}
          <div className="explore__header">
            <h2 className="explore__title">
              Stunning{" "}
              <span className="explore__title-accent">AI Videos</span>{" "}
              Created with Kort AI
            </h2>
            <button className="explore__more">
              Explore More <span>→</span>
            </button>
          </div>

          {/* 分类标签 */}
          <div className="explore__cats">
            {videoCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setVideoCategory(cat)}
                className={`explore__cat ${videoCategory === cat ? "explore__cat--active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 横向滚动作品集 */}
          <div className="explore__gallery">
            <button className="gallery__arrow gallery__arrow--left" onClick={() => scrollGallery(-1)}>
              ←
            </button>

            <div className="gallery__track" ref={galleryRef}>
              {videos.map((v) => (
                <div key={v.title} className="video-card">
                  <img src={v.image} alt={v.title} className="video-card__img" />
                  <div className="video-card__overlay" />

                  {/* 悬浮播放按钮 */}
                  <div className="video-card__play">
                    <span>▶</span>
                  </div>

                  {/* 播放量 */}
                  <div className="video-card__views">
                    <span className="video-card__views-icon">▶</span>
                    <span>{v.views}</span>
                  </div>
                </div>
              ))}
            </div>

            <button className="gallery__arrow gallery__arrow--right" onClick={() => scrollGallery(1)}>
              →
            </button>
          </div>
        </div>
      </section>

      {/* ========== Powerful AI Video Tools ========== */}
      <section id="tools" className="tools">
        <div className="tools__inner">
          <div className="tools__header">
            <h2 className="tools__title">
              Powerful{" "}
              <span className="tools__title-accent">AI Video Tools</span>
            </h2>
            <p className="tools__desc">
              Multiple creative ways to turn your ideas into stunning videos.
            </p>
          </div>

          <div className="tools__grid">
            {powerfulTools.map((tool) => (
              <div key={tool.title} className="tool-card">
                {/* 左侧图片 */}
                <div className="tool-card__media">
                  {tool.images ? (
                    <div className="tool-card__imgs">
                      {tool.images.map((src, i) => (
                        <div key={i} className="tool-card__img-wrap">
                          <img src={src} alt="" className="tool-card__img" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <img src={tool.image} alt={tool.title} className="tool-card__img" />
                  )}
                </div>

                {/* 右侧文字 */}
                <div className="tool-card__body">
                  <h3 className="tool-card__title">{tool.title}</h3>
                  <p className="tool-card__desc">{tool.desc}</p>
                  <span className="tool-card__arrow">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== How It Works + Get Kort AI App ========== */}
      <section className="feature">
        <div className="feature__inner">
          <div className="feature__grid">
            {/* 左：How It Works */}
            <div className="hiw">
              <h2 className="hiw__title">How It Works</h2>
              <p className="hiw__desc">Create professional AI videos in just 3 simple steps.</p>

              <div className="hiw__steps">
                {steps.map((step, index) => (
                  <React.Fragment key={step.no}>
                    <div className="hiw__step">
                      <div className="hiw__step-icon">{step.icon}</div>
                      <h3 className="hiw__step-title">
                        {index + 1}. {step.title}
                      </h3>
                      <p className="hiw__step-desc">{step.desc}</p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hiw__connector" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* 右：Get Kort AI App */}
            <div className="app-cta" id="download">
              <div className="app-cta__shine" />
              <div className="app-cta__glow" />

              <div className="app-cta__content">
                <div className="app-cta__left">
                  <h2 className="app-cta__title">Get Kort AI App</h2>
                  <p className="app-cta__desc">Create AI videos anytime, anywhere.</p>
                  <div className="app-cta__badges">
                    <a
                      href="https://apps.apple.com/app/kort-ai/id6756208165"
                      target="_blank"
                      rel="noreferrer"
                      className="app-cta__badge"
                    >
                      <svg width="18" height="22" viewBox="0 0 24 28" fill="currentColor">
                        <path d="M19.57 14.82c-.01-1.82.8-3.2 2.43-4.21a5.22 5.22 0 00-4.12-2.24c-1.73-.18-3.42 1.03-4.3 1.03-.9 0-2.28-.99-3.75-.96-1.92.03-3.7 1.12-4.69 2.85-2.04 3.54-.52 8.76 1.44 11.63.98 1.4 2.12 2.97 3.62 2.92 1.46-.06 2-.95 3.76-.95 1.76 0 2.25.95 3.78.91 1.57-.03 2.55-1.42 3.5-2.83a11.67 11.67 0 001.6-3.28 5.06 5.06 0 01-3.27-4.87zM16.14 5.28A5.03 5.03 0 0017.88.54a5.15 5.15 0 00-3.62 1.88 4.8 4.8 0 00-1.1 3.47 4.27 4.27 0 003.36-1.75l-.39.14z" />
                      </svg>
                      <span className="app-cta__badge-text">
                        <span className="app-cta__badge-label">Download on the</span>
                        <span className="app-cta__badge-name">App Store</span>
                      </span>
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.aigc.kort_ai"
                      target="_blank"
                      rel="noreferrer"
                      className="app-cta__badge"
                    >
                      <svg width="20" height="22" viewBox="0 0 28 30" fill="none">
                        <path d="M1.63.94L15.4 14.7 1.63 28.47A2.08 2.08 0 011 26.41V3.02c0-.76.24-1.5.63-2.08z" fill="#3DDC84" />
                        <path d="M20.66 20.02L15.4 14.7l5.26-5.31 1.6.86c1.55.88 2.2.96 2.2 3.89 0 2.93-.65 3-2.2 3.89l-1.6.8z" fill="#FFC107" />
                        <path d="M20.66 20.02L15.4 14.7 1.63.94C2.3.35 3.29 0 4.4 0c1.11 0 2.1.35 4.53 1.7l11.73 6.65v.06l-5.26 5.3 5.26 5.3z" fill="#F44336" />
                        <path d="M1.63 28.47l13.77-13.77h.92L2.93 28.14a2.18 2.18 0 01-1.3.33z" fill="#2196F3" />
                      </svg>
                      <span className="app-cta__badge-text">
                        <span className="app-cta__badge-label">GET IT ON</span>
                        <span className="app-cta__badge-name">Google Play</span>
                      </span>
                    </a>
                  </div>
                </div>

                {/* 手机模型 */}
                <div className="app-cta__phones">
                  <div className="app-cta__phone app-cta__phone--left">
                    <div className="app-cta__phone-screen"><img src="/logo_icon.png" alt="" /><strong>Kort AI</strong><span>AI Video Generator</span><small>Turn your imagination<br />into stunning videos.</small><div className="app-cta__phone-action">Create Now</div></div>
                  </div>
                  <div className="app-cta__phone app-cta__phone--right">
                    <div className="app-cta__phone-gallery"><strong>✦ Explore</strong>{videos.slice(0, 6).map(v => <img key={v.title} src={v.image} alt="" />)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 底部 ========== */}
      <footer className="footer">
        <div className="footer__inner">
          {/* 品牌 */}
          <div className="footer__brand">
            <span className="footer__logo">K</span>
            <div className="footer__brand-text">
              <div className="footer__brand-name">Kort AI</div>
              <div className="footer__brand-slogan">Turn imagination into motion.</div>
            </div>
          </div>

          {/* 链接 */}
          <div className="footer__links">
            <Link href="/about-us" className="footer__link">About</Link>
            <Link href="/blog" className="footer__link">Blog</Link>
            <Link href="/#download" className="footer__link">Pricing</Link>
            <Link href="/privacy-policy" className="footer__link">Privacy Policy</Link>
            <Link href="/terms-of-service" className="footer__link">Terms of Service</Link>
            <Link href="/contact" className="footer__link">Contact</Link>
          </div>

          {/* 社交 + 版权 */}
          <div className="footer__social">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                className="footer__social-link"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
            <span className="footer__copyright">© 2026 Kort AI. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
