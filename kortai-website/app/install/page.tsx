"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

const InstallPageContent: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const searchParams = useSearchParams();

  const hasCode = searchParams.has("code");
  const inviteCode = searchParams.get("code") || "";

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

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0d0b1a",
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
        <div style={{
          width: "36px",
          height: "36px",
          background: "linear-gradient(135deg, #7c3aed, #a855f7)",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
          </svg>
        </div>
        <span style={{ fontSize: "22px", fontWeight: 700 }}>Kort.ai</span>
      </div>

      {/* Title & Subtitle */}
      <div style={{ textAlign: "center", paddingTop: "28px" }}>
        <h1 style={{
          fontSize: "26px",
          fontWeight: 800,
          lineHeight: 1.35,
          margin: "0 0 10px",
          background: "linear-gradient(135deg, #a78bfa, #c084fc)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
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
          and tools. Get up to 60 free credits!
        </p>
      </div>

      {/* Demo Image */}
      <div style={{
        marginTop: "24px",
        position: "relative",
        borderRadius: "16px",
        overflow: "hidden",
        background: "linear-gradient(180deg, rgba(168,85,247,0.08) 0%, rgba(236,72,153,0.08) 100%)",
        border: "1px solid rgba(168,85,247,0.15)",
      }}>
        <img
          src="/demo-showcase.jpg"
          alt="Kort AI Demo"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            minHeight: "260px",
            objectFit: "cover",
            background: "linear-gradient(135deg, #1a1530 0%, #2d1b4e 50%, #1a1530 100%)",
          }}
        />
        {/* Play button overlay */}
        <div style={{
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
        }}>
          <svg width="22" height="24" viewBox="0 0 22 24" fill="#fff">
            <path d="M0 0v24l22-12z"/>
          </svg>
        </div>
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
            <div style={{
              width: "36px",
              height: "36px",
              background: "linear-gradient(135deg, #7c3aed, #a855f7)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
            </div>
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
              src="https://api.qrserver.com/v1/create-qr-code/?size=52x52&data=https://kortai.info/install"
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
              background: "rgba(168,85,247,0.06)",
              borderRadius: "10px",
              border: "1px solid rgba(168,85,247,0.12)",
            }}>
              <span style={{ fontSize: "13px", color: "#a1a1aa", flex: 1 }}>
                Copy the code, go to &quot;Me &gt; Settings &gt; Refer a Friend&quot; and use the code to get 10 credits.
              </span>
              <button
                onClick={handleCopy}
                style={{
                  padding: "6px 16px",
                  backgroundColor: copied ? "#16a34a" : "rgba(168,85,247,0.15)",
                  color: copied ? "#fff" : "#a78bfa",
                  border: `1px solid ${copied ? "#22c55e" : "rgba(168,85,247,0.3)"}`,
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
            background: "linear-gradient(135deg, #7c3aed, #ec4899)",
            color: "#fff",
            border: "none",
            borderRadius: "14px",
            fontSize: "17px",
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 4px 20px rgba(124,58,237,0.35)",
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
        background: "linear-gradient(135deg, #7c3aed, #ec4899)",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 16px rgba(124,58,237,0.4)",
        cursor: "pointer",
        zIndex: 100,
      }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="12" rx="2"/>
          <path d="M12 12v6M9 15l3 3 3-3"/>
        </svg>
      </div>
    </div>
  );
};

const InstallPage: React.FC = () => {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", background: "#0d0b1a" }} />}>
      <InstallPageContent />
    </Suspense>
  );
};

export default InstallPage;
