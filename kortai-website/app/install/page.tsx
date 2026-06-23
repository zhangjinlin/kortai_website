"use client";

import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getCoverData, parseCoverNumber } from "./data";

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

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0f0a",
      color: "#fff",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
      display: "flex",
      flexDirection: "column",
      padding: "0 20px",
      maxWidth: "480px",
      margin: "0 auto",
      position: "relative",
    }}>
      {/* Logo */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        paddingTop: "40px",
      }}>
        <img
          src="/logo_icon.png"
          alt="Kort AI"
          style={{ width: "40px", height: "40px", borderRadius: "10px" }}
        />
        <span style={{ fontSize: "22px", fontWeight: 700 }}>Kort.ai</span>
      </div>

      {/* Title & Subtitle */}
      <div style={{ textAlign: "center", paddingTop: "28px" }}>
        <h1 style={{
          fontSize: "26px",
          fontWeight: 800,
          lineHeight: 1.35,
          margin: "0 0 10px",
          background: "linear-gradient(90deg, #46D3A9 0%, #7BDC7F 50%, #C6E857 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          color: "transparent",
        }}>
          Try Kort AI and Get
          <br />
          Free Rewards!
        </h1>
        <p style={{
          fontSize: "14px",
          color: "#a1a1aa",
          lineHeight: 1.6,
          margin: "0",
        }}>
          Try all the amazing AI video/image models
          <br />
          and tools. Get up to 100 free credits!
        </p>
      </div>

      {/* Demo Video */}
      <div style={{
        marginTop: "24px",
        position: "relative",
        borderRadius: "16px",
        overflow: "hidden",
        background: "linear-gradient(180deg, rgba(70,211,169,0.08) 0%, rgba(198,232,87,0.08) 100%)",
        border: "1px solid rgba(70,211,169,0.15)",
        aspectRatio: "3 / 4",
      }}>
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
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 2,
            opacity: playing && videoReady ? 1 : 0,
            transition: "opacity 0.3s ease",
            userSelect: "none",
          }}
        />
        {/* Cover Image */}
        <img
          src={coverData.image}
          alt="Kort AI Demo"
          onClick={handleVideoToggle}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: (playing && videoReady) ? 0 : 3,
            cursor: "pointer",
            transition: "opacity 0.3s ease",
            opacity: (playing && videoReady) ? 0 : 1,
          }}
        />
        {/* Play button overlay */}
        {(!playing || !videoReady) && (
          <div
            onClick={handleVideoToggle}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid rgba(255,255,255,0.2)",
              cursor: "pointer",
              zIndex: 4,
            }}
          >
            <svg width="22" height="24" viewBox="0 0 22 24" fill="#fff">
              <path d="M0 0v24l22-12z"/>
            </svg>
          </div>
        )}
      </div>

      {/* Bottom Card */}
      <div style={{
        marginTop: "20px",
        padding: "20px",
        background: "rgba(255,255,255,0.04)",
        borderRadius: "16px",
        border: "1px solid rgba(255,255,255,0.06)",
      }}>
        {/* Header row: Logo + text + QR */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1 }}>
            <img
              src="/logo_icon.png"
              alt="Kort AI"
              style={{ width: "36px", height: "36px", borderRadius: "10px", flexShrink: 0 }}
            />
            <div>
              <span style={{ fontSize: "15px", fontWeight: 700 }}>Kort.ai</span>
              <p style={{ fontSize: "11px", color: "#a1a1aa", margin: "2px 0 0" }}>
                All-in-One Video & Image AI
              </p>
            </div>
          </div>
          {/* QR Code */}
          <div style={{
            width: "52px",
            height: "52px",
            background: "#fff",
            borderRadius: "8px",
            padding: "4px",
            flexShrink: 0,
            marginLeft: "12px",
          }}>
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=52x52&data=${encodeURIComponent(`https://kortai.info/install?code=${inviteCode}${searchParams.get("coverNumber") ? `&coverNumber=${searchParams.get("coverNumber")}` : ""}`)}`}
              alt="QR Code"
              style={{ width: "100%", height: "100%", display: "block" }}
            />
          </div>
        </div>

        {/* Invitation Code */}
        {hasCode && (
          <div style={{ marginTop: "16px" }}>
            <p style={{ fontSize: "12px", color: "#a1a1aa", marginBottom: "6px" }}>
              Invitation Code: {inviteCode}
            </p>
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 16px",
              background: "rgba(70,211,169,0.06)",
              borderRadius: "10px",
              border: "1px solid rgba(70,211,169,0.12)",
            }}>
              <span style={{ fontSize: "13px", color: "#a1a1aa", flex: 1 }}>
                Copy the code to register, or download directly to get 50 credits.
              </span>
              <button
                onClick={handleCopy}
                style={{
                  padding: "6px 16px",
                  backgroundColor: copied ? "#16a34a" : "rgba(70,211,169,0.15)",
                  color: copied ? "#fff" : "#46D3A9",
                  border: `1px solid ${copied ? "#22c55e" : "rgba(70,211,169,0.3)"}`,
                  borderRadius: "8px",
                  fontSize: "13px",
                  fontWeight: 500,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  marginLeft: "12px",
                  minWidth: "70px",
                  textAlign: "center",
                }}
              >
                {copied ? "Copied ✓" : "Copy"}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Download Button */}
      <div style={{ padding: "20px 0 40px" }}>
        <button
          onClick={handleDownload}
          style={{
            width: "100%",
            padding: "16px 0",
            background: "linear-gradient(135deg, #46D3A9, #C6E857)",
            color: "#000",
            border: "none",
            borderRadius: "14px",
            fontSize: "17px",
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 4px 20px rgba(70,211,169,0.35)",
          }}
        >
          Download Kort AI Now
        </button>
      </div>

      {/* Floating View Button (bottom right) */}
      <div style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        width: "52px",
        height: "52px",
        background: "linear-gradient(135deg, #46D3A9, #C6E857)",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 16px rgba(70,211,169,0.4)",
        cursor: "pointer",
        zIndex: 100,
      }}>
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
    <Suspense fallback={<div style={{ minHeight: "100vh", background: "#0a0f0a" }} />}>
      <InstallPageContent />
    </Suspense>
  );
};

export default InstallPage;
