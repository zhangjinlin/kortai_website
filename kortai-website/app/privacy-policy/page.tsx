import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Kort AI",
  description: "Privacy Policy for Kort AI - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
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
      <h1 style={{ fontSize: "36px", fontWeight: "bold", color: "#fff", marginBottom: "32px" }}>Privacy Policy</h1>
      <p style={{ color: "#888", marginBottom: "32px" }}>Last updated: June 2025</p>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "22px", color: "#fff", marginBottom: "12px" }}>1. Introduction</h2>
        <p>
          Kort AI (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information
          when you use our mobile application (the &quot;App&quot;) and website (kortai.info).
        </p>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "22px", color: "#fff", marginBottom: "12px" }}>2. Information We Collect</h2>
        <p><strong>Personal Information:</strong> When you register an account, we may collect your email address, username, and profile information.</p>
        <p><strong>Usage Data:</strong> We automatically collect information about how you interact with our App, including features used, content generated, and device information.</p>
        <p><strong>Content Data:</strong> Images, videos, and text prompts you upload or generate through our AI services.</p>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "22px", color: "#fff", marginBottom: "12px" }}>3. How We Use Your Information</h2>
        <p>We use the collected information for the following purposes:</p>
        <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
          <li>To provide, maintain, and improve our AI video and image generation services</li>
          <li>To process your AI generation requests and deliver results</li>
          <li>To communicate with you about updates, security alerts, and support</li>
          <li>To analyze usage patterns and improve user experience</li>
          <li>To comply with legal obligations and enforce our terms</li>
        </ul>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "22px", color: "#fff", marginBottom: "12px" }}>4. Data Sharing and Disclosure</h2>
        <p>We do not sell your personal information. We may share data with:</p>
        <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
          <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our services (cloud hosting, AI model providers)</li>
          <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
          <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
        </ul>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "22px", color: "#fff", marginBottom: "12px" }}>5. Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your information,
          including encryption, secure servers, and access controls. However, no method
          of transmission over the Internet is 100% secure.
        </p>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "22px", color: "#fff", marginBottom: "12px" }}>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
          <li>Access and receive a copy of your personal data</li>
          <li>Request correction or deletion of your data</li>
          <li>Withdraw consent for data processing</li>
          <li>Request data portability</li>
        </ul>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "22px", color: "#fff", marginBottom: "12px" }}>7. Children&apos;s Privacy</h2>
        <p>
          Our services are not intended for children under 13. We do not knowingly collect
          personal information from children under 13. If you believe we have collected such
          information, please contact us immediately.
        </p>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "22px", color: "#fff", marginBottom: "12px" }}>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any
          changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
        </p>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "22px", color: "#fff", marginBottom: "12px" }}>9. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p style={{ marginTop: "8px" }}>
          Email: <a href="mailto:contact@kortai.info" style={{ color: "#46D3A9" }}>contact@kortai.info</a>
        </p>
      </section>
    </main>
  );
}
