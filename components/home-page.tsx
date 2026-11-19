
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowLeftRight,
  CreditCard,
  Gift,
  Globe2,
  Smartphone,
  Wallet,
  ShieldCheck,
  Zap,
  RefreshCw,
  ShoppingBag,
  Radio,
  Users,
  Headphones,
  CheckCircle2,
  Sparkles,
  Menu,
  Coins,
} from "lucide-react";
import { SiteHeader } from "./site-header";

const services = [
  {
    icon: Gift,
    title: "Gift Cards",
    description:
      "Buy, sell and exchange gift cards from popular brands around the world.",
    tag: "CARD FLUX EXCLUSIVE",
    href: "/register",
  },
  {
    icon: Wallet,
    title: "Digital Wallet",
    description:
      "Manage your funds, monitor transactions and enjoy a seamless wallet experience.",
    tag: "YOUR MONEY, YOUR CONTROL",
    href: "/register",
  },
  {
    icon: Globe2,
    title: "Global eSIM",
    description:
      "Explore international connectivity solutions for your travels and everyday life.",
    tag: "STAY CONNECTED",
    href: "/register",
  },
  {
    icon: Smartphone,
    title: "Virtual Numbers",
    description:
      "Access eligible virtual number and SMS verification services.",
    tag: "GLOBAL ACCESS",
    href: "/register",
  },
  {
    icon: ShoppingBag,
    title: "Digital Marketplace",
    description:
      "Discover digital products, subscriptions and other useful services.",
    tag: "MORE POSSIBILITIES",
    href: "/register",
  },
  {
    icon: Radio,
    title: "Social Media Services",
    description:
      "Explore social media marketing services from supported providers.",
    tag: "GROW YOUR PRESENCE",
    href: "/register",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Security comes first",
    description:
      "Account protection, secure authentication and carefully designed transaction controls.",
  },
  {
    icon: Zap,
    title: "Built for speed",
    description:
      "A streamlined experience designed to make digital transactions simple.",
  },
  {
    icon: Globe2,
    title: "A global experience",
    description:
      "Explore digital services and supported currencies from one platform.",
  },
];

const steps = [
  {
    number: "01",
    title: "Create your account",
    description:
      "Register for your CARD FLUX account and complete any required verification.",
  },
  {
    number: "02",
    title: "Explore the platform",
    description:
      "Choose gift cards, wallet services or another available digital product.",
  },
  {
    number: "03",
    title: "Make your move",
    description:
      "Follow the transaction steps and track your activity from your dashboard.",
  },
];

export function HomePage() {
  return (
    <main className="cf-home">
      <SiteHeader />

      <section className="cf-hero">
        <div className="cf-hero-glow cf-glow-one" />
        <div className="cf-hero-glow cf-glow-two" />

        <div className="cf-container cf-hero-grid">
          <div className="cf-hero-content">
            <div className="cf-eyebrow cf-reveal">
              <Sparkles size={15} />
              THE FUTURE OF DIGITAL EXCHANGE
            </div>

            <h1 className="cf-hero-title cf-reveal cf-delay-1">
              Your digital world.
              <br />
              <span>In constant motion.</span>
            </h1>

            <p className="cf-hero-description cf-reveal cf-delay-2">
              Buy, sell and exchange gift cards. Manage your digital
              transactions and discover global services, all in one
              beautifully connected platform.
            </p>

            <div className="cf-hero-actions cf-reveal cf-delay-3">
              <Link href="/register" className="cf-button cf-button-primary">
                Get started
                <ArrowUpRight size={19} />
              </Link>

              <Link href="/login" className="cf-button cf-button-secondary">
                Sign in
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="cf-hero-trust cf-reveal cf-delay-4">
              <span><ShieldCheck size={16} /> Security focused</span>
              <span><Globe2 size={16} /> Global vision</span>
              <span><Zap size={16} /> Digital convenience</span>
            </div>
          </div>

          <div className="cf-hero-visual cf-reveal cf-delay-2">
            <div className="cf-orbit cf-orbit-one" />
            <div className="cf-orbit cf-orbit-two" />

            <div className="cf-floating-card cf-card-main">
              <div className="cf-card-top">
                <div className="cf-brand-mark">CF</div>
                <span className="cf-card-label">CARD FLUX</span>
                <Sparkles size={19} />
              </div>

              <div className="cf-card-middle">
                <span>WHERE GIFT CARDS MOVE</span>
                <h2>One platform.<br />More possibilities.</h2>
              </div>

              <div className="cf-card-bottom">
                <span>GLOBAL DIGITAL EXPERIENCE</span>
                <ArrowUpRight size={22} />
              </div>
            </div>

            <div className="cf-floating-card cf-mini-card cf-mini-one">
              <div className="cf-mini-icon"><Gift size={20} /></div>
              <div>
                <strong>Gift cards</strong>
                <span>Buy · Sell · Exchange</span>
              </div>
            </div>

            <div className="cf-floating-card cf-mini-card cf-mini-two">
              <div className="cf-mini-icon"><Wallet size={20} /></div>
              <div>
                <strong>Digital wallet</strong>
                <span>Manage your funds</span>
              </div>
            </div>

            <div className="cf-floating-card cf-mini-card cf-mini-three">
              <div className="cf-mini-icon"><Globe2 size={20} /></div>
              <div>
                <strong>Global services</strong>
                <span>Explore more</span>
              </div>
            </div>
          </div>
        </div>

        <div className="cf-scroll-indicator">
          <span />
          SCROLL TO EXPLORE
        </div>
      </section>

      <section className="cf-marquee" aria-label="CARD FLUX services">
        <div className="cf-marquee-track">
          {Array.from({ length: 2 }).map((_, index) => (
            <div className="cf-marquee-group" key={index}>
              <span>GIFT CARDS</span><Sparkles size={16} />
              <span>DIGITAL WALLET</span><Sparkles size={16} />
              <span>GLOBAL SERVICES</span><Sparkles size={16} />
              <span>SMART EXCHANGE</span><Sparkles size={16} />
              <span>WHERE GIFT CARDS MOVE</span><Sparkles size={16} />
            </div>
          ))}
        </div>
      </section>

      <section className="cf-section cf-services" id="services">
        <div className="cf-container">
          <div className="cf-section-heading">
            <div>
              <div className="cf-eyebrow">
                <span className="cf-eyebrow-dot" />
                THE CARD FLUX ECOSYSTEM
              </div>
              <h2 className="cf-section-title">
                Everything digital.
                <br />
                <span>Connected in one place.</span>
              </h2>
            </div>

            <p className="cf-section-description">
              Discover a growing collection of digital products and services
              designed to make your everyday transactions easier.
            </p>
          </div>

          <div className="cf-service-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Link
                  href={service.href}
                  className="cf-service-card cf-reveal"
                  key={service.title}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="cf-service-card-top">
                    <div className="cf-service-icon">
                      <Icon size={25} />
                    </div>
                    <ArrowUpRight size={20} className="cf-service-arrow" />
                  </div>

                  <span className="cf-service-tag">{service.tag}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="cf-service-link">
                    Explore service <ArrowRight size={16} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cf-section cf-about" id="about">
        <div className="cf-container cf-about-grid">
          <div className="cf-about-visual">
            <div className="cf-about-circle cf-circle-one" />
            <div className="cf-about-circle cf-circle-two" />

            <div className="cf-about-panel">
              <div className="cf-about-panel-top">
                <span className="cf-brand-mark">CF</span>
                <span>THE CARD FLUX EXPERIENCE</span>
              </div>

              <div className="cf-about-symbol">
                <ArrowLeftRight size={65} strokeWidth={1.3} />
              </div>

              <h3>Where Gift Cards Move.</h3>
              <p>Move value. Discover possibilities.</p>

              <div className="cf-about-panel-bottom">
                <span>BUILT FOR A DIGITAL WORLD</span>
                <Sparkles size={18} />
              </div>
            </div>
          </div>

          <div className="cf-about-content">
            <div className="cf-eyebrow">
              <span className="cf-eyebrow-dot" />
              WHY CARD FLUX
            </div>

            <h2 className="cf-section-title">
              More than a marketplace.
              <br />
              <span>A smarter digital experience.</span>
            </h2>

            <p className="cf-section-description">
              CARD FLUX brings multiple digital services together through
              one simple experience. Our goal is to make accessing,
              exchanging and managing digital value feel effortless.
            </p>

            <div className="cf-benefit-list">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div className="cf-benefit" key={benefit.title}>
                    <div className="cf-benefit-icon">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3>{benefit.title}</h3>
                      <p>{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link href="/register" className="cf-text-link">
              Join CARD FLUX <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="cf-section cf-how" id="how-it-works">
        <div className="cf-container">
          <div className="cf-centered-heading">
            <div className="cf-eyebrow">
              <span className="cf-eyebrow-dot" />
              GET STARTED
            </div>
            <h2 className="cf-section-title">
              Simple steps.
              <br />
              <span>Seamless possibilities.</span>
            </h2>
            <p className="cf-section-description">
              Getting started with CARD FLUX is designed to be straightforward.
            </p>
          </div>

          <div className="cf-steps-grid">
            {steps.map((step, index) => (
              <div className="cf-step-card cf-reveal" key={step.number}>
                <span className="cf-step-number">{step.number}</span>
                <div className="cf-step-line">
                  <span />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {index !== 2 && (
                  <ArrowRight className="cf-step-arrow" size={22} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cf-section cf-security">
        <div className="cf-container cf-security-inner">
          <div className="cf-security-icon">
            <ShieldCheck size={38} />
          </div>
          <div>
            <div className="cf-eyebrow">BUILT WITH CARE</div>
            <h2>Your trust matters.</h2>
            <p>
              We are building CARD FLUX with security-conscious account
              controls, responsible transaction handling and a focus on
              protecting the customer experience.
            </p>
          </div>
          <CheckCircle2 className="cf-security-check" size={32} />
        </div>
      </section>

      <section className="cf-cta">
        <div className="cf-cta-glow" />
        <div className="cf-container cf-cta-content">
          <div className="cf-eyebrow">
            <Sparkles size={15} /> YOUR NEXT MOVE STARTS HERE
          </div>
          <h2>
            Ready to move
            <br />
            <span>with CARD FLUX?</span>
          </h2>
          <p>
            Create your account and discover a more connected digital
            experience.
          </p>
          <Link href="/register" className="cf-button cf-button-primary">
            Create your account <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>

      <footer className="cf-footer">
        <div className="cf-container">
          <div className="cf-footer-main">
            <div className="cf-footer-brand">
              <Link href="/" className="cf-logo">
                <span className="cf-brand-mark">CF</span>
                <span>CARD <strong>FLUX</strong></span>
              </Link>
              <p>Where Gift Cards Move.</p>
              <span className="cf-footer-note">
                A connected world of digital possibilities.
              </span>
            </div>

            <div className="cf-footer-column">
              <h3>Explore</h3>
              <Link href="#services">Services</Link>
              <Link href="#about">About us</Link>
              <Link href="#how-it-works">How it works</Link>
            </div>

            <div className="cf-footer-column">
              <h3>Account</h3>
              <Link href="/register">Create account</Link>
              <Link href="/login">Sign in</Link>
              <Link href="/dashboard">Dashboard</Link>
            </div>

            <div className="cf-footer-column">
              <h3>Platform</h3>
              <span>Gift cards</span>
              <span>Digital wallet</span>
              <span>Global services</span>
            </div>
          </div>

          <div className="cf-footer-bottom">
            <span>© {new Date().getFullYear()} CARD FLUX. All rights reserved.</span>
            <span>WHERE GIFT CARDS MOVE.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
