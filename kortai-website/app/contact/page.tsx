import type { Metadata } from "next";
import "./page.less";

export const metadata: Metadata = {
  title: "Contact Us - Kort AI",
  description: "Contact Kort AI for support, business inquiries, or feedback about our AI video and image generation app.",
};

export default function ContactPage() {
  return (
    <main className="contact">
      <h1 className="contact__title">Contact Us</h1>

      <p className="contact__intro">
        Have questions, feedback, or need support? We&apos;d love to hear from you.
      </p>

      <section className="contact__section">
        <h2 className="contact__subtitle">Email Support</h2>
        <div className="contact__card">
          <p className="contact__row">
            <strong>General Inquiries:</strong>{" "}
            <a href="mailto:contact@kortai.info" className="contact__mail">contact@kortai.info</a>
          </p>
          <p className="contact__row">
            <strong>Business Partnerships:</strong>{" "}
            <a href="mailto:business@kortai.info" className="contact__mail">business@kortai.info</a>
          </p>
          <p className="contact__row">
            <strong>Support:</strong>{" "}
            <a href="mailto:support@kortai.info" className="contact__mail">support@kortai.info</a>
          </p>
        </div>
      </section>

      <section className="contact__section">
        <h2 className="contact__subtitle">Response Time</h2>
        <p>
          We typically respond to all inquiries within 24-48 hours during business days.
          For urgent matters, please include &quot;URGENT&quot; in your email subject line.
        </p>
      </section>

      <section className="contact__section">
        <h2 className="contact__subtitle">Office Location</h2>
        <p>
          Kort AI<br />
          Singapore
        </p>
      </section>
    </main>
  );
}
