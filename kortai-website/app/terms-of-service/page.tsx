import type { Metadata } from "next";
import "./page.less";

export const metadata: Metadata = {
  title: "Terms of Service - Kort AI",
  description: "Terms of Service for Kort AI - Read the terms and conditions for using our AI video and image generation services.",
};

export default function TermsPage() {
  return (
    <main className="terms">
      <h1 className="terms__title">Terms of Service</h1>
      <p className="terms__updated">Last updated: June 2025</p>

      <section className="terms__section">
        <h2 className="terms__subtitle">1. Acceptance of Terms</h2>
        <p>
          By accessing or using Kort AI (&quot;the Service&quot;), you agree to be bound by these Terms of Service.
          If you do not agree to these terms, please do not use our Service.
        </p>
      </section>

      <section className="terms__section">
        <h2 className="terms__subtitle">2. Description of Service</h2>
        <p>
          Kort AI provides AI-powered video and image generation tools, including text-to-video,
          image-to-video, AI image generation, AI avatar creation, and related features.
          The Service is available on iOS and Android platforms.
        </p>
      </section>

      <section className="terms__section">
        <h2 className="terms__subtitle">3. User Accounts</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account credentials.
          You must provide accurate and complete information when creating an account.
          You are solely responsible for all activities that occur under your account.
        </p>
      </section>

      <section className="terms__section">
        <h2 className="terms__subtitle">4. User Content and AI Generation</h2>
        <p>By using our AI generation services, you agree that:</p>
        <ul className="terms__list">
          <li>You retain ownership of the content you upload (images, videos, text prompts)</li>
          <li>You grant us a limited license to process your content to provide the Service</li>
          <li>AI-generated content may vary in quality and we do not guarantee specific results</li>
          <li>You will not use the Service to generate illegal, harmful, or infringing content</li>
        </ul>
      </section>

      <section className="terms__section">
        <h2 className="terms__subtitle">5. Prohibited Uses</h2>
        <p>You agree not to:</p>
        <ul className="terms__list">
          <li>Use the Service for any illegal purpose</li>
          <li>Generate content that infringes on intellectual property rights</li>
          <li>Generate harmful, abusive, or deceptive content</li>
          <li>Attempt to reverse engineer or disrupt the Service</li>
          <li>Use automated methods to access or overload the Service</li>
        </ul>
      </section>

      <section className="terms__section">
        <h2 className="terms__subtitle">6. Credits and Payments</h2>
        <p>
          The Service operates on a credit-based system. Credits may be earned through promotions
          or purchased. Credits are non-transferable and expire according to the terms specified at purchase.
          All payments are final and non-refundable unless required by law.
        </p>
      </section>

      <section className="terms__section">
        <h2 className="terms__subtitle">7. Intellectual Property</h2>
        <p>
          Kort AI and its original content, features, and functionality are owned by us and
          are protected by international copyright, trademark, and other intellectual property laws.
        </p>
      </section>

      <section className="terms__section">
        <h2 className="terms__subtitle">8. Limitation of Liability</h2>
        <p>
          The Service is provided &quot;as is&quot; without warranties of any kind. We shall not be liable
          for any indirect, incidental, or consequential damages arising from your use of the Service.
        </p>
      </section>

      <section className="terms__section">
        <h2 className="terms__subtitle">9. Termination</h2>
        <p>
          We reserve the right to terminate or suspend your account at any time, without prior notice,
          for conduct that we believe violates these Terms or is harmful to other users or our business interests.
        </p>
      </section>

      <section className="terms__section">
        <h2 className="terms__subtitle">10. Changes to Terms</h2>
        <p>
          We may modify these Terms at any time. Continued use of the Service after changes
          constitutes acceptance of the new terms.
        </p>
      </section>

      <section className="terms__section">
        <h2 className="terms__subtitle">11. Contact</h2>
        <p>
          For questions about these Terms, please contact us at{" "}
          <a href="mailto:contact@kortai.info" className="terms__mail">contact@kortai.info</a>.
        </p>
      </section>
    </main>
  );
}
