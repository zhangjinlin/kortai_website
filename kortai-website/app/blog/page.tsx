import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "./posts";
import "./page.less";

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
    <main className="blog-list">
      <h1 className="blog-list__title">
        Kort AI Blog
      </h1>
      <p className="blog-list__intro">
        AI video generation tips, tutorials, and industry news.
      </p>

      <div className="blog-list__items">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="blog-list__link"
          >
            <article className="blog-card">
              <div className="blog-card__meta">
                <time className="blog-card__date">
                  {post.date}
                </time>
                {post.tags?.map((tag) => (
                  <span key={tag} className="blog-card__tag">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="blog-card__title">
                {post.title}
              </h2>
              <p className="blog-card__desc">
                {post.description}
              </p>
              <div className="blog-card__more">
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
        <div className="blog-list__empty">
          <p className="blog-list__empty-text">No articles yet. Check back soon!</p>
        </div>
      )}
    </main>
  );
}
