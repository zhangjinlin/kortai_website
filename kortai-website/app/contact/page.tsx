import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Kort AI",
  description: "Contact Kort AI for support, business inquiries, or feedback about our AI video and image generation app.",
};

export default function ContactPage() {
  return (
    <main style={{
      fontFamily: "Arial, sans-serif",
      padding: "60px 40px",
      maxWidth: "800px",
      margin: "0 auto",
      color: "#e5e5e5",
      background: "#0a0a0a",
      minHeight: "100vh",
      lineHeight: 1.8,
    }}>
      <h1 style={{ fontSize: "36px", fontWeight: "bold", color: "#fff", marginBottom: "32px" }}>Contact Us</h1>

      <p style={{ fontSize: "18px", marginBottom: "40px", color: "#ccc" }}>
        Have questions, feedback, or need support? We&apos;d love to hear from you.
      </p>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "22px", color: "#fff", marginBottom: "16px" }}>Email Support</h2>
        <div style={{
          padding: "24px",
          background: "rgba(255,255,255,0.04)",
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.08)",
        }}>
          <p style={{ marginBottom: "8px" }}>
            <strong>General Inquiries:</strong>{" "}
            <a href="mailto:contact@kortai.info" style={{ color: "#46D3A9" }}>contact@kortai.info</a>
          </p>
          <p style={{ marginBottom: "8px" }}>
            <strong>Business Partnerships:</strong>{" "}
            <a href="mailto:business@kortai.info" style={{ color: "#46D3A9" }}>business@kortai.info</a>
          </p>
          <p>
            <strong>Support:</strong>{" "}
            <a href="mailto:support@kortai.info" style={{ color: "#46D3A9" }}>support@kortai.info</a>
          </p>
        </div>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "22px", color: "#fff", marginBottom: "16px" }}>Response Time</h2>
        <p>
          We typically respond to all inquiries within 24-48 hours during business days.
          For urgent matters, please include &quot;URGENT&quot; in your email subject line.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "22px", color: "#fff", marginBottom: "16px" }}>Office Location</h2>
        <p>
          Kort AI<br />
          Singapore
        </p>
      </section>
    </main>
  );
}
