import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import "./layout.less";

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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "xcd8gqgsmm");`,
          }}
        />
      </head>
      <body>
        {/* Navigation Bar */}
        <nav className="site-nav">
          <div className="site-nav__inner">
            <Link href="/" className="site-nav__logo">
              <img src="/logo_icon.png" alt="Kort AI" className="site-nav__logo-img" />
              Kort AI
            </Link>
            <div className="site-nav__links">
              <Link href="/blog" className="site-nav__link">Blog</Link>
              <Link href="/about-us" className="site-nav__link">About</Link>
              <Link href="/contact" className="site-nav__link">Contact</Link>
              <Link href="/privacy-policy" className="site-nav__link">Privacy</Link>
              <Link href="/terms-of-service" className="site-nav__link">Terms</Link>
            </div>
          </div>
        </nav>

        {/* Spacer for fixed nav */}
        <div className="site-nav__spacer" />

        {children}

        {/* Global Footer */}
        <footer className="site-footer">
          <div className="site-footer__inner">
            <span>&copy; 2025 Kort AI. All rights reserved.</span>
            <div className="site-footer__links">
              <Link href="/privacy-policy" className="site-footer__link">Privacy Policy</Link>
              <Link href="/terms-of-service" className="site-footer__link">Terms of Service</Link>
              <Link href="/contact" className="site-footer__link">Contact</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
