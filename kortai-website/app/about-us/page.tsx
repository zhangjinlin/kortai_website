"use client"; // 必须放最上面

import React from "react";
import Head from "next/head";

const KortAIPage: React.FC = () => {
  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const userAgent = typeof navigator === "undefined" ? "" : navigator.userAgent;

    if (/iPhone|iPad|iPod/i.test(userAgent)) {
      e.preventDefault();
      alert("iOS 版本开发中，敬请期待！");
    } else if (/Android/i.test(userAgent)) {
      window.location.href = "https://play.google.com/store/apps/details?id=com.aigc.kort_ai";
    } else {
      e.preventDefault();
      alert("请在手机上下载 Kort AI.");
    }
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
  <meta name="keywords" content="Kort AI, AI video generator, AI image generator, AI app, image to video, text to video" />
  <meta property="og:title" content="Kort AI – AI Video & Image Generator App" />
  <meta property="og:description" content="Create stunning AI videos and images with Kort AI, available on iOS and Android." />
  <meta property="og:type" content="website" />
</Head>

      <main style={{ fontFamily: "Arial, sans-serif", padding: "40px", maxWidth: "800px", margin: "auto" }}>
        <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "30px" }}>
          What is Kort AI?
        </h1>

        <p>
          Kort AI is an AI-powered video and image generator app that helps users
          create professional content in seconds. With advanced AI technology,
          Kort AI allows you to transform text into videos, animate photos,
          and generate AI images instantly.
        </p>

        <h2 style={{ fontSize: "32px", marginTop: "40px" }}>How Does Kort AI Work?</h2>
        <p>
          Simply enter a text prompt or upload an image. Kort AI uses advanced AI
          models to generate high-quality videos and images automatically.
        </p>

        <h2 style={{ fontSize: "32px", marginTop: "40px" }}>Is Kort AI Free?</h2>
        <p>
          Kort AI offers both free features and premium plans for advanced AI video
          and image generation.
        </p>

        <h2 style={{ fontSize: "32px", marginTop: "40px" }}>Download Kort AI</h2>
        <p>Available on iOS and Android. Click the button below to download:</p>
        <a
          href="#"
          onClick={handleDownloadClick}
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 24px",
            backgroundColor: "#0070f3",
            color: "#fff",
            borderRadius: "6px",
            textDecoration: "none",
          }}
        >
          Download Kort AI
        </a>
      </main>
    </>
  );
};

export default KortAIPage;