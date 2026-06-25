import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kort AI - AI Video & Image Generator App",
    template: "%s - Kort AI",
  },
  description: "Kort AI is an AI video and image generator app. Create stunning AI videos from text or images in seconds. Available on iOS and Android.",
  keywords: ["Kort AI", "AI video generator", "AI image generator", "text to video", "image to video", "AI app"],
  openGraph: {
    title: "Kort AI - AI Video & Image Generator App",
    description: "Create stunning AI videos and images with Kort AI. Available on iOS and Android.",
    type: "website",
    siteName: "Kort AI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9248403054783980"
          crossOrigin="anonymous"></script>
      </head>
      <body className="antialiased">
        {/* Navigation Bar */}
        <nav style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: "rgba(0,0,0,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "12px 40px",
        }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
            <Link href="/" style={{
              color: "#fff",
              fontSize: "20px",
              fontWeight: 700,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}>
              <img src="/logo_icon.png" alt="Kort AI" style={{ width: "28px", height: "28px", borderRadius: "6px" }} />
              Kort AI
            </Link>
            <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
              <Link href="/blog" style={{ color: "#ccc", textDecoration: "none", fontSize: "14px" }}>Blog</Link>
              <Link href="/about-us" style={{ color: "#ccc", textDecoration: "none", fontSize: "14px" }}>About</Link>
              <Link href="/contact" style={{ color: "#ccc", textDecoration: "none", fontSize: "14px" }}>Contact</Link>
              <Link href="/privacy-policy" style={{ color: "#ccc", textDecoration: "none", fontSize: "14px" }}>Privacy</Link>
              <Link href="/terms-of-service" style={{ color: "#ccc", textDecoration: "none", fontSize: "14px" }}>Terms</Link>
            </div>
          </div>
        </nav>

        {/* Spacer for fixed nav */}
        <div style={{ height: "56px" }} />

        {children}

        {/* Global Footer */}
        <footer style={{
          background: "#111",
          padding: "32px 40px",
          borderTop: "1px solid #222",
        }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            color: "#888",
            fontSize: "13px",
          }}>
            <span>&copy; 2025 Kort AI. All rights reserved.</span>
            <div style={{ display: "flex", gap: "24px" }}>
              <Link href="/privacy-policy" style={{ color: "#888", textDecoration: "none" }}>Privacy Policy</Link>
              <Link href="/terms-of-service" style={{ color: "#888", textDecoration: "none" }}>Terms of Service</Link>
              <Link href="/contact" style={{ color: "#888", textDecoration: "none" }}>Contact</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
