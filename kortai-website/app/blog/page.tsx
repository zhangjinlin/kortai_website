import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "./posts";

export const metadata: Metadata = {
  title: "Blog - Kort AI",
  description: "Read the latest articles about AI video generation, image generation, and content creation tips. Stay updated with Kort AI news and tutorials.",
  keywords: ["AI blog", "AI video generation", "AI tutorial", "content creation", "Kort AI blog", "AI news"],
  alternates: {
    canonical: "https://kortai.info/blog/",
  },
  openGraph: {
    title: "Kort AI Blog - AI Video & Content Creation Tips",
    description: "Read the latest articles about AI video generation, image generation, and content creation tips. Stay updated with Kort AI news and tutorials.",
    type: "website",
    siteName: "Kort AI",
    url: "https://kortai.info/blog/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kort AI Blog - AI Video & Content Creation Tips",
    description: "Read the latest articles about AI video generation, image generation, and content creation tips.",
  },
};

export default function BlogPage() {
  return (
    <main style={{
      fontFamily: "Arial, sans-serif",
      padding: "60px 40px",
      maxWidth: "900px",
      margin: "0 auto",
      color: "#e5e5e5",
      minHeight: "100vh",
    }}>
      <h1 style={{ fontSize: "36px", fontWeight: "bold", color: "#fff", marginBottom: "12px" }}>
        Kort AI Blog
      </h1>
      <p style={{ fontSize: "16px", color: "#888", marginBottom: "48px" }}>
        AI video generation tips, tutorials, and industry news.
      </p>

      <style>{`
        .blog-card {
          padding: 28px;
          background: rgba(255,255,255,0.03);
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.06);
          transition: border-color 0.2s, background 0.2s;
          cursor: pointer;
        }
        .blog-card:hover {
          border-color: rgba(70,211,169,0.3);
          background: rgba(255,255,255,0.06);
        }
      `}</style>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{ textDecoration: "none" }}
          >
            <article className="blog-card">
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <time style={{
                  fontSize: "13px",
                  color: "#666",
                  background: "rgba(255,255,255,0.05)",
                  padding: "4px 10px",
                  borderRadius: "4px",
                }}>
                  {post.date}
                </time>
                {post.tags?.map((tag) => (
                  <span key={tag} style={{
                    fontSize: "12px",
                    color: "#46D3A9",
                    background: "rgba(70,211,169,0.08)",
                    padding: "4px 10px",
                    borderRadius: "4px",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
              <h2 style={{
                fontSize: "22px",
                fontWeight: 600,
                color: "#fff",
                margin: "0 0 10px",
                lineHeight: 1.4,
              }}>
                {post.title}
              </h2>
              <p style={{
                fontSize: "15px",
                color: "#999",
                margin: 0,
                lineHeight: 1.6,
              }}>
                {post.description}
              </p>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                marginTop: "16px",
                color: "#46D3A9",
                fontSize: "14px",
                fontWeight: 500,
              }}>
                Read more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {blogPosts.length === 0 && (
        <div style={{
          textAlign: "center",
          padding: "80px 20px",
          color: "#666",
        }}>
          <p style={{ fontSize: "18px" }}>No articles yet. Check back soon!</p>
        </div>
      )}
    </main>
  );
}
