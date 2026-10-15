"use client"; // 必须放最上面

import React from "react";
import "./page.less";

const KortAIPage: React.FC = () => {
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
    <main className="about">
      <h1 className="about__title">
        What is Kort AI?
      </h1>

      <p>
        Kort AI is an AI-powered video and image generator app that helps users
        create professional content in seconds. With advanced AI technology,
        Kort AI allows you to transform text into videos, animate photos,
        and generate AI images instantly.
      </p>

      <h2 className="about__subtitle">How Does Kort AI Work?</h2>
      <p>
        Simply enter a text prompt or upload an image. Kort AI uses advanced AI
        models to generate high-quality videos and images automatically.
      </p>

      <h2 className="about__subtitle">Is Kort AI Free?</h2>
      <p>
        Kort AI offers both free features and premium plans for advanced AI video
        and image generation.
      </p>

      <h2 className="about__subtitle">Download Kort AI</h2>
      <p>Available on iOS and Android. Click the button below to download:</p>
      <a
        href="#"
        onClick={handleDownloadClick}
        className="about__btn"
      >
        Download Kort AI
      </a>
    </main>
  );
};

export default KortAIPage;
