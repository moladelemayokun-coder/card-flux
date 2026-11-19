
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  ArrowUpRight,
  ArrowDownLeft,
  ArrowLeftRight,
  LayoutDashboard,
  Gift,
  Wallet,
  ShoppingBag,
  CreditCard,
  Globe,
  Smartphone,
  Radio,
  Users,
  History,
  Settings,
  Headphones,
  ShieldCheck,
  Bell,
  ChevronRight,
  Zap,
  Menu,
  CircleDollarSign,
  Package,
  Sparkles,
} from "lucide-react";

import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "@/components/logout-button";

const navigation = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Gift Cards", href: "/dashboard/gift-cards", icon: Gift },
  { label: "Wallet", href: "/dashboard/wallet", icon: Wallet },
  { label: "Buy Accounts", href: "/dashboard/accounts", icon: Users },
  { label: "Subscriptions", href: "/dashboard/subscriptions", icon: RefreshIcon },
  { label: "eSIM Services", href: "/dashboard/esim", icon: Globe },
  { label: "Virtual Numbers", href: "/dashboard/numbers", icon: Smartphone },
  { label: "SMM Services", href: "/dashboard/smm", icon: Radio },
  { label: "My Orders", href: "/dashboard/orders", icon: Package },
  { label: "Transactions", href: "/dashboard/transactions", icon: History },
  { label: "Referrals", href: "/dashboard/referrals", icon: Users },
  { label: "Profile & Settings", href: "/dashboard/profile", icon: Settings },
];

function RefreshIcon(props: React.ComponentProps<typeof ArrowLeftRight>) {
  return <ArrowLeftRight {...props} />;
}

const services = [
  {
    title: "Buy Gift Cards",
    description: "Explore available gift cards.",
    icon: Gift,
    href: "/dashboard/gift-cards",
    color: "green",
  },
  {
    title: "Sell Gift Cards",
    description: "Exchange eligible gift cards.",
    icon: ArrowLeftRight,
    href: "/dashboard/gift-cards",
    color: "blue",
  },
  {
    title: "Digital Accounts",
    description: "Explore digital accounts.",
    icon: Users,
    href: "/dashboard/accounts",
    color: "purple",
  },
  {
    title: "Subscriptions",
    description: "Discover digital subscriptions.",
    icon: ShoppingBag,
    href: "/dashboard/subscriptions",
    color: "orange",
  },
  {
    title: "Global eSIM",
    description: "Explore international connectivity.",
    icon: Globe,
    href: "/dashboard/esim",
    color: "cyan",
  },
  {
    title: "Virtual Numbers",
    description: "Explore eligible number services.",
    icon: Smartphone,
    href: "/dashboard/numbers",
    color: "pink",
  },
  {
    title: "SMM Services",
    description: "Discover social media services.",
    icon: Radio,
    href: "/dashboard/smm",
    color: "yellow",
  },
  {
    title: "Add Funds",
    description: "Explore wallet funding options.",
    icon: Wallet,
    href: "/dashboard/wallet",
    color: "green",
  },
];

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const displayName =
    user.user_metadata?.full_name ||
    user.user_metadata?.name ||
    user.email?.split("@")[0] ||
    "Customer";

  const initials = displayName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part: string) => part[0])
    .join("")
    .toUpperCase();

  return (
    <main className="cf-dashboard">
      <aside className="cf-sidebar">
        <Link href="/" className="cf-dash-logo">
          <span className="cf-dash-logo-mark">CF</span>
          <span>CARD <strong>FLUX</strong></span>
        </Link>

        <div className="cf-sidebar-profile">
          <div className="cf-avatar">{initials}</div>
          <div className="cf-profile-info">
            <strong>{displayName}</strong>
            <span>{user.email}</span>
          </div>
        </div>

        <div className="cf-sidebar-label">WORKSPACE</div>

        <nav className="cf-sidebar-nav">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = item.href === "/dashboard";

            return (
              <Link
                href={item.href}
                key={item.label}
                className={`cf-nav-link ${active ? "active" : ""}`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
                {active && <span className="cf-nav-active-dot" />}
              </Link>
            );
          })}
        </nav>

        <div className="cf-sidebar-help">
          <Headphones size={22} />
          <strong>Need assistance?</strong>
          <p>Our support team is here to help.</p>
          <Link href="/dashboard/support">
            Get support <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="cf-sidebar-logout">
          <LogoutButton />
        </div>
      </aside>

      <section className="cf-dash-main">
        <header className="cf-dash-topbar">
          <div className="cf-dash-mobile-brand">
            <span className="cf-dash-logo-mark">CF</span>
            CARD <strong>FLUX</strong>
          </div>

          <div className="cf-dash-topbar-left">
            <span className="cf-online-dot" />
            Your digital world, in constant motion.
          </div>

          <div className="cf-dash-topbar-actions">
            <span className="cf-currency-label">NGN ₦</span>
            <Link
              href="/dashboard/profile"
              className="cf-dash-icon-button"
              aria-label="Profile settings"
            >
              <Settings size={19} />
            </Link>
            <Link
              href="/dashboard/support"
              className="cf-dash-icon-button"
              aria-label="Get support"
            >
              <Bell size={19} />
            </Link>
            <div className="cf-topbar-avatar">{initials}</div>
          </div>
        </header>

        <div className="cf-dash-content">
          <div className="cf-dash-welcome">
            <div>
              <div className="cf-dash-eyebrow">
                <Sparkles size={14} /> YOUR CARD FLUX SPACE
              </div>
              <h1>Welcome back, {displayName.split(" ")[0]}.</h1>
              <p>Everything you need for your digital transactions.</p>
            </div>

            <Link
              href="/dashboard/wallet"
              className="cf-dash-primary-button"
            >
              <Wallet size={18} />
              Explore wallet
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <section className="cf-dash-wallet-card">
            <div className="cf-wallet-card-content">
              <div className="cf-wallet-heading">
                <div className="cf-wallet-icon">
                  <Wallet size={24} />
                </div>
                <span>ACCOUNT WALLET</span>
                <ShieldCheck size={18} />
              </div>

              <div className="cf-wallet-label">Available balance</div>
              <div className="cf-wallet-balance">₦0.00</div>
              <div className="cf-wallet-note">
                Your CARD FLUX wallet overview
              </div>

              <div className="cf-wallet-actions">
                <Link href="/dashboard/wallet">
                  <ArrowDownLeft size={17} />
                  Add funds
                </Link>
                <Link href="/dashboard/transactions">
                  <History size={17} />
                  Transactions
                </Link>
              </div>
            </div>

            <div className="cf-wallet-decoration">
              <div className="cf-wallet-ring cf-ring-one" />
              <div className="cf-wallet-ring cf-ring-two" />
              <div className="cf-wallet-decoration-mark">CF</div>
              <span>WHERE GIFT CARDS MOVE.</span>
            </div>
          </section>

          <section className="cf-dash-stat-grid">
            <div className="cf-dash-stat-card">
              <div className="cf-stat-top">
                <span>Total orders</span>
                <Package size={19} />
              </div>
              <strong>0</strong>
              <span className="cf-stat-caption">Your order activity</span>
            </div>

            <div className="cf-dash-stat-card">
              <div className="cf-stat-top">
                <span>Transactions</span>
                <ArrowLeftRight size={19} />
              </div>
              <strong>0</strong>
              <span className="cf-stat-caption">Wallet activity</span>
            </div>

            <div className="cf-dash-stat-card">
              <div className="cf-stat-top">
                <span>Referrals</span>
                <Users size={19} />
              </div>
              <strong>0</strong>
              <span className="cf-stat-caption">People you've invited</span>
            </div>

            <div className="cf-dash-stat-card">
              <div className="cf-stat-top">
                <span>Account status</span>
                <ShieldCheck size={19} />
              </div>
              <strong className="cf-status-text">Active</strong>
              <span className="cf-stat-caption">Authentication confirmed</span>
            </div>
          </section>

          <section className="cf-dash-section">
            <div className="cf-dash-section-heading">
              <div>
                <span className="cf-dash-eyebrow">EXPLORE THE ECOSYSTEM</span>
                <h2>Quick actions</h2>
              </div>
              <Link href="/dashboard/gift-cards">
                Explore services <ArrowRightIcon />
              </Link>
            </div>

            <div className="cf-dash-service-grid">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <Link
                    href={service.href}
                    key={service.title}
                    className="cf-dash-service-card"
                  >
                    <div className={`cf-dash-service-icon ${service.color}`}>
                      <Icon size={22} />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <ArrowUpRight
                      className="cf-dash-service-arrow"
                      size={18}
                    />
                  </Link>
                );
              })}
            </div>
          </section>

          <section className="cf-dash-bottom-grid">
            <div className="cf-dash-panel">
              <div className="cf-dash-section-heading">
                <div>
                  <span className="cf-dash-eyebrow">ACCOUNT ACTIVITY</span>
                  <h2>Recent transactions</h2>
                </div>
                <History size={20} />
              </div>

              <div className="cf-dash-empty">
                <div className="cf-empty-icon">
                  <CircleDollarSign size={29} />
                </div>
                <strong>No transactions yet</strong>
                <p>Your wallet activity will appear here.</p>
                <Link href="/dashboard/wallet">
                  Explore wallet <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>

            <div className="cf-dash-panel cf-referral-panel">
              <div className="cf-referral-icon">
                <Users size={27} />
              </div>
              <span className="cf-dash-eyebrow">GROW WITH CARD FLUX</span>
              <h2>Invite. Connect. Earn.</h2>
              <p>
                Explore the CARD FLUX referral programme and invite others
                to join the platform.
              </p>
              <Link href="/dashboard/referrals">
                Explore referrals <ArrowUpRight size={17} />
              </Link>
            </div>
          </section>

          <footer className="cf-dash-footer">
            <span>© {new Date().getFullYear()} CARD FLUX</span>
            <span>WHERE GIFT CARDS MOVE.</span>
            <Link href="/dashboard/support">
              Help & support <ChevronRight size={14} />
            </Link>
          </footer>
        </div>
      </section>
    </main>
  );
}

function ArrowRightIcon() {
  return <ArrowUpRight size={16} />;
    }
              
