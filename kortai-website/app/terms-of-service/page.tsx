import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Kort AI",
  description: "Terms of Service for Kort AI - Read the terms and conditions for using our AI video and image generation services.",
};

export default function TermsPage() {
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
      <h1 style={{ fontSize: "36px", fontWeight: "bold", color: "#fff", marginBottom: "32px" }}>Terms of Service</h1>
      <p style={{ color: "#888", marginBottom: "32px" }}>Last updated: June 2025</p>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "22px", color: "#fff", marginBottom: "12px" }}>1. Acceptance of Terms</h2>
        <p>
          By accessing or using Kort AI (&quot;the Service&quot;), you agree to be bound by these Terms of Service.
          If you do not agree to these terms, please do not use our Service.
        </p>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "22px", color: "#fff", marginBottom: "12px" }}>2. Description of Service</h2>
        <p>
          Kort AI provides AI-powered video and image generation tools, including text-to-video,
          image-to-video, AI image generation, AI avatar creation, and related features.
          The Service is available on iOS and Android platforms.
        </p>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "22px", color: "#fff", marginBottom: "12px" }}>3. User Accounts</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account credentials.
          You must provide accurate and complete information when creating an account.
          You are solely responsible for all activities that occur under your account.
        </p>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "22px", color: "#fff", marginBottom: "12px" }}>4. User Content and AI Generation</h2>
        <p>By using our AI generation services, you agree that:</p>
        <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
          <li>You retain ownership of the content you upload (images, videos, text prompts)</li>
          <li>You grant us a limited license to process your content to provide the Service</li>
          <li>AI-generated content may vary in quality and we do not guarantee specific results</li>
          <li>You will not use the Service to generate illegal, harmful, or infringing content</li>
        </ul>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "22px", color: "#fff", marginBottom: "12px" }}>5. Prohibited Uses</h2>
        <p>You agree not to:</p>
        <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
          <li>Use the Service for any illegal purpose</li>
          <li>Generate content that infringes on intellectual property rights</li>
          <li>Generate harmful, abusive, or deceptive content</li>
          <li>Attempt to reverse engineer or disrupt the Service</li>
          <li>Use automated methods to access or overload the Service</li>
        </ul>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "22px", color: "#fff", marginBottom: "12px" }}>6. Credits and Payments</h2>
        <p>
          The Service operates on a credit-based system. Credits may be earned through promotions
          or purchased. Credits are non-transferable and expire according to the terms specified at purchase.
          All payments are final and non-refundable unless required by law.
        </p>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "22px", color: "#fff", marginBottom: "12px" }}>7. Intellectual Property</h2>
        <p>
          Kort AI and its original content, features, and functionality are owned by us and
          are protected by international copyright, trademark, and other intellectual property laws.
        </p>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "22px", color: "#fff", marginBottom: "12px" }}>8. Limitation of Liability</h2>
        <p>
          The Service is provided &quot;as is&quot; without warranties of any kind. We shall not be liable
          for any indirect, incidental, or consequential damages arising from your use of the Service.
        </p>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "22px", color: "#fff", marginBottom: "12px" }}>9. Termination</h2>
        <p>
          We reserve the right to terminate or suspend your account at any time, without prior notice,
          for conduct that we believe violates these Terms or is harmful to other users or our business interests.
        </p>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "22px", color: "#fff", marginBottom: "12px" }}>10. Changes to Terms</h2>
        <p>
          We may modify these Terms at any time. Continued use of the Service after changes
          constitutes acceptance of the new terms.
        </p>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "22px", color: "#fff", marginBottom: "12px" }}>11. Contact</h2>
        <p>
          For questions about these Terms, please contact us at{" "}
          <a href="mailto:contact@kortai.info" style={{ color: "#46D3A9" }}>contact@kortai.info</a>.
        </p>
      </section>
    </main>
  );
}
