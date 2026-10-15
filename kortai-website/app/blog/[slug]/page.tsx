import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts, type BlogPost } from "../posts";
import "./page.less";

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

  // 文章不存在
  if (!post) {
    return (
      <main className="blog-notfound">
        <h1 className="blog-notfound__title">Article Not Found</h1>
        <p className="blog-notfound__desc">The article you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/blog" className="blog-notfound__link">
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
      <main className="blog-post">
        {/* Back link */}
        <Link href="/blog" className="blog-post__back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="blog-post__header">
          <div className="blog-post__meta">
            <time className="blog-post__date">
              {post.date}
            </time>
            {post.tags?.map((tag) => (
              <span key={tag} className="blog-post__tag">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="blog-post__title">
            {post.title}
          </h1>
        </header>

        {/* Article Content */}
        <article
          className="blog-content blog-post__content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Bottom Navigation */}
        <div className="blog-post__nav">
          <Link href="/blog" className="blog-post__nav-prev">
            ← All Articles
          </Link>
          <Link href="/" className="blog-post__nav-next">
            Home →
          </Link>
        </div>
      </main>
    </>
  );
}
