"use client"; // 必须放最上面

import React from "react";
import Head from "next/head";
import { useRouter } from "next/navigation"; // Next.js 16 App Router 路由跳转

const Home: React.FC = () => {
  const router = useRouter();

  // 下载按钮点击逻辑
  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const userAgent = typeof navigator === "undefined" ? "" : navigator.userAgent;

    if (/iPhone|iPad|iPod/i.test(userAgent)) {
      e.preventDefault();
      alert("iOS 版本开发中，敬请期待！");
    } else if (/Android/i.test(userAgent)) {
      window.location.href = "https://play.google.com/store/apps/details?id=com.aigc.kort_ai";
    } else {
      e.preventDefault();
      alert("请在手机上下载 Kort AI");
    }
  };

  // 跳品牌页
  const goToBrandPage = () => {
    router.push("/about-us");
  };

  return (
    <>
      {/* SEO */}
      <Head>
        <title>Kort AI – AI Video & Image Generator App</title>
        <meta
          name="description"
          content="Kort AI is an AI video and image generator app. Create stunning AI videos from text or images in seconds. Available on iOS and Android."
        />
      </Head>

      <main style={{ fontFamily: "Arial, sans-serif", padding: "40px", textAlign: "center" }}>
        {/* Hero Section */}
        <section style={{ marginBottom: "80px" }}>
          <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
            Kort AI – Create AI Videos in Seconds
          </h1>
          <p style={{ fontSize: "20px", marginTop: "20px" }}>
            Turn text and images into stunning AI videos. Fast, simple, and powerful.
          </p>
          <div style={{ marginTop: "30px" }}>
            {/* 下载按钮 */}
            <a
              href="#"
              onClick={handleDownloadClick}
              style={{
                padding: "12px 24px",
                marginRight: "20px",
                backgroundColor: "#0070f3",
                color: "#fff",
                borderRadius: "6px",
                textDecoration: "none",
              }}
            >
              Download Kort AI
            </a>

            {/* 去品牌页按钮 */}
            <button
              onClick={goToBrandPage}
              style={{
                padding: "12px 24px",
                backgroundColor: "#34a853",
                color: "#fff",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Learn More About Kort AI
            </button>
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
    </>
  );
};

export default Home;