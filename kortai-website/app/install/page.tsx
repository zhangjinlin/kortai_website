"use client";

import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getCoverData, parseCoverNumber } from "./data";
import "./page.less";

const InstallPageContent: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const playingRef = useRef(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const searchParams = useSearchParams();

  const hasCode = searchParams.has("code");
  const inviteCode = searchParams.get("code") || "";

  // 根据 coverNumber 获取对应封面和视频（兼容大小写）
  const coverData = useMemo(() => {
    const coverNumber = searchParams.get("coverNumber") || searchParams.get("covernumber");
    const index = parseCoverNumber(coverNumber);
    return getCoverData(index);
  }, [searchParams]);

  // 切换模板时重置视频状态
  useEffect(() => {
    setVideoReady(false);
    setPlaying(false);
    playingRef.current = false;
  }, [coverData]);

  const handleCopy = () => {
    navigator.clipboard.writeText(inviteCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleDownload = () => {
    const userAgent = typeof navigator === "undefined" ? "" : navigator.userAgent;
    // 先复制邀请码到剪切板
    navigator.clipboard.writeText(`kortai_invite:${inviteCode}`).catch(() => {});
    if (/iPhone|iPad|iPod/i.test(userAgent)) {
      window.location.href = "https://apps.apple.com/app/kort-ai/id6756208165";
    } else if (/Android/i.test(userAgent)) {
      window.location.href = "https://play.google.com/store/apps/details?id=com.aigc.kort_ai";
    } else {
      alert("请在手机上下载 Kort AI");
    }
  };

  const handleVideoToggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.muted = true;
      video.play().then(() => {
        playingRef.current = true;
        setPlaying(true);
      }).catch((err) => {
        console.error("Video play failed:", err);
        video.controls = true;
        playingRef.current = true;
        setPlaying(true);
      });
    } else {
      video.pause();
      playingRef.current = false;
      setPlaying(false);
    }
  };

  // 视频是否已淡入显示
  const videoVisible = playing && videoReady;

  return (
    <div className="install">
      {/* Logo */}
      <div className="install__logo">
        <img
          src="/logo_icon.png"
          alt="Kort AI"
          className="install__logo-img"
        />
        <span className="install__logo-name">Kort.ai</span>
      </div>

      {/* Title & Subtitle */}
      <div className="install__head">
        <h1 className="install__title">
          Try Kort AI and Get
          <br />
          Free Rewards!
        </h1>
        <p className="install__subtitle">
          Try all the amazing AI video/image models
          <br />
          and tools. Get up to 100 free credits!
        </p>
      </div>

      {/* Demo Video */}
      <div className="install__video">
        <video
          key={coverData.videoHD}
          ref={videoRef}
          src={coverData.videoHD}
          playsInline
          muted
          preload="metadata"
          controlsList="nodownload"
          disablePictureInPicture
          onContextMenu={(e) => e.preventDefault()}
          onLoadedData={() => setVideoReady(true)}
          onEnded={() => { playingRef.current = false; setPlaying(false); }}
          onPause={() => { if (playingRef.current) { playingRef.current = false; setPlaying(false); } }}
          onPlay={() => { playingRef.current = true; setPlaying(true); }}
          className={`install__video-el ${videoVisible ? "is-playing" : ""}`}
        />

        {/* Cover Image */}
        <img
          src={coverData.image}
          alt="Kort AI Demo"
          onClick={handleVideoToggle}
          className={`install__cover ${videoVisible ? "is-hidden" : ""}`}
        />

        {/* Play button overlay */}
        {!videoVisible && (
          <div onClick={handleVideoToggle} className="install__play">
            <svg width="22" height="24" viewBox="0 0 22 24" fill="#fff">
              <path d="M0 0v24l22-12z"/>
            </svg>
          </div>
        )}
      </div>

      {/* Bottom Card */}
      <div className="install__card">
        {/* Header row: Logo + text + QR */}
        <div className="install__card-head">
          <div className="install__card-brand">
            <img
              src="/logo_icon.png"
              alt="Kort AI"
              className="install__card-logo"
            />
            <div>
              <span className="install__card-name">Kort.ai</span>
              <p className="install__card-slogan">
                All-in-One Video & Image AI
              </p>
            </div>
          </div>

          {/* QR Code */}
          <div className="install__qr">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=52x52&data=${encodeURIComponent(`https://kortai.info/install?code=${inviteCode}${searchParams.get("coverNumber") ? `&coverNumber=${searchParams.get("coverNumber")}` : ""}`)}`}
              alt="QR Code"
              className="install__qr-img"
            />
          </div>
        </div>

        {/* Invitation Code */}
        {hasCode && (
          <div className="install__invite">
            <p className="install__invite-label">
              Invitation Code: {inviteCode}
            </p>
            <div className="install__invite-box">
              <span className="install__invite-text">
                Copy the code to register, or download directly to get 50 credits.
              </span>
              <button
                onClick={handleCopy}
                className={`install__copy-btn ${copied ? "is-copied" : ""}`}
              >
                {copied ? "Copied ✓" : "Copy"}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Spacer */}
      <div className="install__spacer" />

      {/* Download Button */}
      <div className="install__download">
        <button onClick={handleDownload} className="install__download-btn">
          Download Kort AI Now
        </button>
      </div>

      {/* Floating Download Button (bottom right) */}
      <div onClick={handleDownload} className="install__fab">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="12" rx="2"/>
          <path d="M12 12v6M9 15l3 3 3-3"/>
        </svg>
      </div>
    </div>
  );
};

const InstallPage: React.FC = () => {
  return (
    <Suspense fallback={<div className="install__fallback" />}>
      <InstallPageContent />
    </Suspense>
  );
};

export default InstallPage;
