import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts, type BlogPost } from "../posts";

// 为静态导出生成所有文章页面
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  const keywords = (post.tags || []).concat([
    "Kort AI", "AI blog", "AI video generation", "AI tutorial"
  ]);

  return {
    title: post.title,
    description: post.description,
    keywords,
    alternates: {
      canonical: `https://kortai.info/blog/${post.slug}/`,
    },
    authors: [{ name: "Kort AI Team" }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      siteName: "Kort AI",
      url: `https://kortai.info/blog/${post.slug}/`,
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main style={{
        fontFamily: "Arial, sans-serif",
        padding: "80px 40px",
        textAlign: "center",
        color: "#e5e5e5",
        minHeight: "100vh",
      }}>
        <h1 style={{ color: "#fff", fontSize: "32px" }}>Article Not Found</h1>
        <p style={{ color: "#888", marginTop: "12px" }}>The article you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/blog" style={{ color: "#46D3A9", marginTop: "24px", display: "inline-block" }}>
          ← Back to Blog
        </Link>
      </main>
    );
  }

  // JSON-LD 结构化数据（Article schema）
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Kort AI",
      url: "https://kortai.info"
    },
    publisher: {
      "@type": "Organization",
      name: "Kort AI",
      logo: {
        "@type": "ImageObject",
        url: "https://kortai.info/logo_icon.png"
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://kortai.info/blog/${post.slug}/`
    }
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main style={{
        fontFamily: "Arial, sans-serif",
        padding: "60px 40px",
        maxWidth: "800px",
        margin: "0 auto",
        color: "#e5e5e5",
        minHeight: "100vh",
      }}>
        {/* Back link */}
      <Link
        href="/blog"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          color: "#888",
          textDecoration: "none",
          fontSize: "14px",
          marginBottom: "32px",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Back to Blog
      </Link>

      {/* Article Header */}
      <header style={{ marginBottom: "40px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
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
        <h1 style={{
          fontSize: "clamp(24px, 4vw, 36px)",
          fontWeight: "bold",
          color: "#fff",
          lineHeight: 1.3,
          margin: 0,
        }}>
          {post.title}
        </h1>
      </header>

      {/* Article Content */}
      <article
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
        style={{
          lineHeight: 1.9,
          fontSize: "16px",
        }}
      />

      {/* Bottom Navigation */}
      <div style={{
        marginTop: "60px",
        paddingTop: "32px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        justifyContent: "space-between",
      }}>
        <Link
          href="/blog"
          style={{
            color: "#46D3A9",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          ← All Articles
        </Link>
        <Link
          href="/"
          style={{
            color: "#888",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          Home →
        </Link>
      </div>
    </main>
    </>
  );
}
