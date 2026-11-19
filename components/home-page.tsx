
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Globe2,
  CreditCard,
  Gift,
  RefreshCw,
  Smartphone,
  Wallet,
  CheckCircle2,
  TrendingUp,
  Headphones,
} from "lucide-react";
import { SiteHeader } from "./site-header";

const services = [
  {
    icon: Gift,
    title: "Buy Gift Cards",
    description:
      "Get gift cards from popular global brands through a simple and secure marketplace.",
    tag: "SHOP CARDS",
  },
  {
    icon: CreditCard,
    title: "Sell Gift Cards",
    description:
      "Turn your unused gift cards into value with a transparent selling process.",
    tag: "GET PAID",
  },
  {
    icon: RefreshCw,
    title: "Exchange Gift Cards",
    description:
      "Exchange supported gift cards with clear rates and straightforward transactions.",
    tag: "SWAP VALUE",
  },
  {
    icon: Smartphone,
    title: "Virtual Numbers",
    description:
      "Access legitimate virtual number services from supported providers and regions.",
    tag: "GO DIGITAL",
  },
  {
    icon: Wallet,
    title: "Digital Wallet",
    description:
      "Manage your eligible balances, payments and transaction history in one place.",
    tag: "YOUR WALLET",
  },
  {
    icon: Globe2,
    title: "Global Marketplace",
    description:
      "Explore digital services designed for customers across supported countries.",
    tag: "GO GLOBAL",
  },
];

const benefits = [
  "Transparent rates and transaction details",
  "Secure accounts and protected transactions",
  "Convenient digital marketplace",
  "Dedicated customer support",
];

export function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-content animate-fade-up">
              <div className="hero-badge">
                <span className="live-dot" />
                YOUR DIGITAL VALUE MARKETPLACE
              </div>

              <h1>
                Where Gift Cards
                <br />
                <span className="gradient-text">Move Freely.</span>
              </h1>

              <p className="hero-description">
                Buy, sell and exchange gift cards with confidence.
                Discover a smarter way to move digital value with
                CARD FLUX.
              </p>

              <div className="hero-actions">
                <Link href="/register" className="primary-button">
                  Get Started <ArrowRight size={18} />
                </Link>
                <Link href="#services" className="secondary-button">
                  Explore Services
                </Link>
              </div>

              <div className="hero-trust">
                <span><ShieldCheck size={17} /> Security focused</span>
                <span><Zap size={17} /> Simple experience</span>
                <span><Globe2 size={17} /> Global vision</span>
              </div>
            </div>

            <div className="hero-visual animate-float">
              <div className="visual-glow" />

              <div className="flux-card">
                <div className="flux-card-top">
                  <span className="flux-logo">C</span>
                  <span className="flux-card-label">CARD FLUX</span>
                  <span className="flux-card-status">● ACTIVE</span>
                </div>

                <div className="flux-card-middle">
                  <span>YOUR DIGITAL VALUE</span>
                  <strong>Moves Without Limits.</strong>
                </div>

                <div className="flux-card-bottom">
                  <span>BUY. SELL. EXCHANGE.</span>
                  <ArrowUpRight size={25} />
                </div>
              </div>

              <div className="floating-chip chip-one">
                <Gift size={19} />
                <span>Gift Cards</span>
              </div>

              <div className="floating-chip chip-two">
                <RefreshCw size={19} />
                <span>Easy Exchange</span>
              </div>

              <div className="floating-chip chip-three">
                <ShieldCheck size={19} />
                <span>Secure Experience</span>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-strip-inner">
            <span>BUILT AROUND YOUR DIGITAL LIFE</span>
            <div><ShieldCheck size={18} /> Security focused</div>
            <div><Globe2 size={18} /> Global access</div>
            <div><Zap size={18} /> Simple transactions</div>
          </div>
        </section>

        <section className="section-padding services-section" id="services">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">THE CARD FLUX ECOSYSTEM</span>
              <h2>
                Everything digital.
                <br />
                <span className="gradient-text">One destination.</span>
              </h2>
              <p>
                Explore a connected marketplace for gift cards and
                useful digital services.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article className="service-card" key={service.title}>
                    <div className="service-card-top">
                      <div className="service-icon">
                        <Icon size={24} />
                      </div>
                      <span>{service.tag}</span>
                    </div>

                    <h3>{service.title}</h3>
                    <p>{service.description}</p>

                    <Link href="/register" className="service-link">
                      Explore service <ArrowUpRight size={17} />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-padding about-section" id="about">
          <div className="container about-grid">
            <div>
              <span className="eyebrow">WHY CARD FLUX</span>
              <h2>
                Digital value,
                <br />
                <span className="gradient-text">made simpler.</span>
              </h2>
              <p className="about-description">
                CARD FLUX is designed to make digital value easier
                to access, manage and exchange. Our goal is to
                connect customers with a clear, convenient and
                secure digital marketplace.
              </p>

              <Link href="/register" className="primary-button">
                Join CARD FLUX <ArrowRight size={18} />
              </Link>
            </div>

            <div className="benefits-panel">
              <div className="benefits-heading">
                <TrendingUp size={22} />
                <strong>A better digital experience</strong>
              </div>

              {benefits.map((benefit) => (
                <div className="benefit-item" key={benefit}>
                  <CheckCircle2 size={19} />
                  <span>{benefit}</span>
                </div>
              ))}

              <div className="benefits-footer">
                <ShieldCheck size={21} />
                <span>Built with security and transparency in mind.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding how-section" id="how-it-works">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">GET STARTED</span>
              <h2>Three steps. One smoother experience.</h2>
              <p>Getting started with CARD FLUX is designed to be simple.</p>
            </div>

            <div className="steps-grid">
              <div className="step-card">
                <span className="step-number">01</span>
                <h3>Create your account</h3>
                <p>Register and securely access your personal account.</p>
              </div>

              <div className="step-card">
                <span className="step-number">02</span>
                <h3>Choose a service</h3>
                <p>Explore available gift cards and digital services.</p>
              </div>

              <div className="step-card">
                <span className="step-number">03</span>
                <h3>Complete your transaction</h3>
                <p>Follow the guided process and track your transaction.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container final-cta-inner">
            <div>
              <span className="eyebrow">YOUR NEXT MOVE STARTS HERE</span>
              <h2>Ready to move your digital value?</h2>
              <p>Join CARD FLUX and discover a new way to exchange.</p>
            </div>

            <Link href="/register" className="primary-button">
              Create Account <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <Link href="/" className="brand">
            <span className="brand-mark">C</span>
            <span>CARD <strong>FLUX</strong></span>
          </Link>

          <p>© {new Date().getFullYear()} CARD FLUX. All rights reserved.</p>

          <div className="footer-support">
            <Headphones size={17} />
            <span>Support coming soon</span>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>BUY. SELL. EXCHANGE.</span>
          <span>Where Gift Cards Move.</span>
        </div>
      </footer>
    </>
  );
}
