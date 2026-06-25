"use client"; // 必须放最上面

import React from "react";

const Home: React.FC = () => {
  // 下载按钮点击逻辑
  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const userAgent = typeof navigator === "undefined" ? "" : navigator.userAgent;

    if (/iPhone|iPad|iPod/i.test(userAgent)) {
      window.location.href = "https://apps.apple.com/app/kort-ai/id6756208165";
    } else if (/Android/i.test(userAgent)) {
      window.location.href = "https://play.google.com/store/apps/details?id=com.aigc.kort_ai";
    } else {
      e.preventDefault();
      alert("请在手机上下载 Kort AI");
    }
  };

  return (
    <>

      {/* ====== Video Hero Section ====== */}
      <section style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}>
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src="https://res.kortai.info/filters/videos/20260519/1779170650984-hbvxdz9d5.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay for text readability */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.35)",
          zIndex: 1,
        }} />

        {/* Center Content */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 10,
          color: "#fff",
          maxWidth: "900px",
          width: "90%",
        }}>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 700, lineHeight: 1.2, marginBottom: "24px" }}>
            Free AI Video Generator:
            <br />
            Create Stunning Videos with AI
          </h1>
          <p style={{ fontSize: "clamp(16px, 2vw, 20px)", opacity: 0.9, marginBottom: "36px", lineHeight: 1.6 }}>
            Turn your text, images, or video prompts into high-quality videos with simple prompts.
            <br />
            No technical skills required.
          </p>
          <a
            href="#"
            onClick={handleDownloadClick}
            style={{
              display: "inline-block",
              padding: "16px 48px",
              background: "linear-gradient(135deg, #2563eb, #06b6d4)",
              color: "#fff",
              borderRadius: "30px",
              fontSize: "18px",
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 8px 30px rgba(37,99,235,0.4)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
          >
            Try Kort AI
          </a>
        </div>
      </section>

      {/* ====== Content Sections ====== */}
      <main style={{ fontFamily: "Arial, sans-serif", padding: "40px", textAlign: "center", background: "#000", color: "#fff", minHeight: "100vh" }}>
        {/* Hero Section */}
        <section style={{ marginBottom: "80px" }}>
          <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
            Kort AI – Create AI Videos in Seconds
          </h1>
          <p style={{ fontSize: "20px", marginTop: "20px" }}>
            Turn text and images into stunning AI videos. Fast, simple, and powerful.
          </p>
          <div style={{ marginTop: "30px", display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            {/* App Store 按钮 */}
            <a
              href="https://apps.apple.com/app/kort-ai/id6756208165"
              target="_blank"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 24px",
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: "12px",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
            >
              <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
                <path d="M19.57 14.82c-.01-1.82.8-3.2 2.43-4.21a5.22 5.22 0 00-4.12-2.24c-1.73-.18-3.42 1.03-4.3 1.03-.9 0-2.28-.99-3.75-.96-1.92.03-3.7 1.12-4.69 2.85-2.04 3.54-.52 8.76 1.44 11.63.98 1.4 2.12 2.97 3.62 2.92 1.46-.06 2-.95 3.76-.95 1.76 0 2.25.95 3.78.91 1.57-.03 2.55-1.42 3.5-2.83a11.67 11.67 0 001.6-3.28 5.06 5.06 0 01-3.27-4.87zM16.14 5.28A5.03 5.03 0 0017.88.54a5.15 5.15 0 00-3.62 1.88 4.8 4.8 0 00-1.1 3.47 4.27 4.27 0 003.36-1.75l-.39.14z" fill="currentColor"/>
              </svg>
              <div style={{ textAlign: "left", lineHeight: 1.1 }}>
                <div style={{ fontSize: "11px", fontWeight: 400 }}>Download on the</div>
                <div style={{ fontSize: "18px", fontWeight: 600 }}>App Store</div>
              </div>
            </a>

            {/* Google Play 按钮 */}
            <a
              href="https://play.google.com/store/apps/details?id=com.aigc.kort_ai"
              target="_blank"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 24px",
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: "12px",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 28 30" fill="none">
                <path d="M1.63.94L15.4 14.7 1.63 28.47A2.08 2.08 0 011 26.41V3.02c0-.76.24-1.5.63-2.08z" fill="#3DDC84"/>
                <path d="M20.66 20.02L15.4 14.7l5.26-5.31 1.6.86c1.55.88 2.2.96 2.2 3.89 0 2.93-.65 3-2.2 3.89l-1.6.8z" fill="#FFC107"/>
                <path d="M20.66 20.02L15.4 14.7 1.63.94C2.3.35 3.29 0 4.4 0c1.11 0 2.1.35 4.53 1.7l11.73 6.65v.06l-5.26 5.3 5.26 5.3z" fill="#F44336"/>
                <path d="M1.63 28.47l13.77-13.77h.92L2.93 28.14a2.18 2.18 0 01-1.3.33z" fill="#2196F3"/>
              </svg>
              <div style={{ textAlign: "left", lineHeight: 1.1 }}>
                <div style={{ fontSize: "11px", fontWeight: 400 }}>GET IT ON</div>
                <div style={{ fontSize: "18px", fontWeight: 600 }}>Google Play</div>
              </div>
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section style={{ marginBottom: "80px" }}>
          <h2 style={{ fontSize: "32px" }}>AI Video Generator</h2>
          <p>Create cinematic AI videos from simple text prompts using Kort AI.</p>

          <h2 style={{ fontSize: "32px", marginTop: "40px" }}>Image to Video</h2>
          <p>Animate your photos instantly and turn them into dynamic AI videos.</p>

          <h2 style={{ fontSize: "32px", marginTop: "40px" }}>AI Image Generator</h2>
          <p>Generate realistic, anime, and fantasy AI images in seconds.</p>

          <h2 style={{ fontSize: "32px", marginTop: "40px" }}>AI Avatar & Lip Sync</h2>
          <p>Create AI avatars that talk and move with advanced lip sync technology.</p>
        </section>

        {/* About / Brand Section */}
        <section style={{ marginBottom: "80px", maxWidth: "800px", margin: "auto" }}>
          <h2 style={{ fontSize: "32px" }}>About Kort AI</h2>
          <p>
            Kort AI is an advanced AI video and image generator app designed for creators,
            influencers, and businesses. Whether you want to create AI videos, generate AI images,
            or animate photos, Kort AI makes it easy.
          </p>
        </section>
      </main>

      {/* ====== Footer ====== */}
      <footer style={{
        background: "#111",
        padding: "60px 40px 30px",
        borderTop: "1px solid #222",
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "40px",
        }}>
          {/* Tools Column */}
          <div>
            <h3 style={{ color: "#fff", fontSize: "16px", fontWeight: 600, marginBottom: "16px" }}>Tools</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {["AI Video Generator", "Image to Video", "Text to Video", "Video to Video", "AI Image Generator", "AI Avatar Generator"].map(link => (
                <a key={link} href="#" style={{ color: "#888", textDecoration: "none", fontSize: "14px" }}>{link}</a>
              ))}
            </div>
          </div>

          {/* Effects Column */}
          <div>
            <h3 style={{ color: "#fff", fontSize: "16px", fontWeight: 600, marginBottom: "16px" }}>Effects</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {["AI Anime Generator", "AI Kiss Generator", "AI Dance Generator", "AI Hug Generator", "AI Lip Sync", "AI Face Swap"].map(link => (
                <a key={link} href="#" style={{ color: "#888", textDecoration: "none", fontSize: "14px" }}>{link}</a>
              ))}
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h3 style={{ color: "#fff", fontSize: "16px", fontWeight: 600, marginBottom: "16px" }}>Company</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a href="/about-us" style={{ color: "#888", textDecoration: "none", fontSize: "14px" }}>About Us</a>
              <a href="/contact" style={{ color: "#888", textDecoration: "none", fontSize: "14px" }}>Contact Us</a>
              <a href="/privacy-policy" style={{ color: "#888", textDecoration: "none", fontSize: "14px" }}>Privacy Policy</a>
              <a href="/terms-of-service" style={{ color: "#888", textDecoration: "none", fontSize: "14px" }}>Terms of Service</a>
            </div>
          </div>

          {/* Download Column */}
          <div>
            <h3 style={{ color: "#fff", fontSize: "16px", fontWeight: 600, marginBottom: "16px" }}>Download App</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a
                href="https://apps.apple.com/app/kort-ai/id6756208165"
                target="_blank"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 16px",
                  backgroundColor: "#fff",
                  color: "#000",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontSize: "12px",
                  maxWidth: "160px",
                }}
              >
                <svg width="16" height="20" viewBox="0 0 24 28" fill="none">
                  <path d="M19.57 14.82c-.01-1.82.8-3.2 2.43-4.21a5.22 5.22 0 00-4.12-2.24c-1.73-.18-3.42 1.03-4.3 1.03-.9 0-2.28-.99-3.75-.96-1.92.03-3.7 1.12-4.69 2.85-2.04 3.54-.52 8.76 1.44 11.63.98 1.4 2.12 2.97 3.62 2.92 1.46-.06 2-.95 3.76-.95 1.76 0 2.25.95 3.78.91 1.57-.03 2.55-1.42 3.5-2.83a11.67 11.67 0 001.6-3.28 5.06 5.06 0 01-3.27-4.87zM16.14 5.28A5.03 5.03 0 0017.88.54a5.15 5.15 0 00-3.62 1.88 4.8 4.8 0 00-1.1 3.47 4.27 4.27 0 003.36-1.75l-.39.14z" fill="currentColor"/>
                </svg>
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.aigc.kort_ai"
                target="_blank"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 16px",
                  backgroundColor: "#fff",
                  color: "#000",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontSize: "12px",
                  maxWidth: "160px",
                }}
              >
                <svg width="16" height="18" viewBox="0 0 28 30" fill="none">
                  <path d="M1.63.94L15 14.7 1.63 28.47A2.08 2.08 0 011 26.41V3.02c0-.76.24-1.5.63-2.08z" fill="#3DDC84"/>
                  <path d="M20.47 20.02L15 14.7l5.47-5.31 1.6.86c1.55.88 2.2.96 2.2 3.89 0 2.93-.65 3-2.2 3.89l-1.6.8z" fill="#FFC107"/>
                  <path d="M1.63 28.47l13.37-13.77h.92L2.93 28.14a2.18 2.18 0 01-1.3.33z" fill="#2196F3"/>
                </svg>
                Google Play
              </a>
            </div>

            {/* Social Media Icons */}
            <div style={{ marginTop: "24px", display: "flex", gap: "16px" }}>
              {/* X / Twitter */}
              <a href="https://x.com/kortai" target="_blank" rel="noreferrer" style={{ color: "#888" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              {/* YouTube */}
              <a href="https://youtube.com/@kortai" target="_blank" rel="noreferrer" style={{ color: "#888" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com/kortai" target="_blank" rel="noreferrer" style={{ color: "#888" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              {/* TikTok */}
              <a href="https://tiktok.com/@kortai" target="_blank" rel="noreferrer" style={{ color: "#888" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;