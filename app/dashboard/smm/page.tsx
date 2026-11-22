import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Instagram,
  Youtube,
  Facebook,
  Music2,
  Users,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    name: "Instagram",
    description: "Explore social media growth services for Instagram.",
    icon: Instagram,
    examples: "Engagement · Content promotion",
  },
  {
    name: "YouTube",
    description: "Discover services for video and channel promotion.",
    icon: Youtube,
    examples: "Video promotion · Channel visibility",
  },
  {
    name: "Facebook",
    description: "Explore services for Facebook pages and content.",
    icon: Facebook,
    examples: "Page promotion · Content engagement",
  },
  {
    name: "TikTok",
    description: "Discover content promotion services for TikTok.",
    icon: Music2,
    examples: "Video promotion · Audience growth",
  },
];

export default async function SmmPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  return (
    <main className="min-h-screen bg-[var(--background)] px-4 py-6 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/dashboard"
          className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] transition hover:text-[var(--primary)]"
        >
          <ArrowLeft size={17} />
          Back to dashboard
        </Link>

        <section className="relative mb-8 overflow-hidden rounded-3xl bg-[#071426] p-6 text-white shadow-xl sm:p-10">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
              <Sparkles size={14} />
              CARD FLUX SOCIAL SERVICES
            </div>

            <h1 className="text-3xl font-bold leading-tight sm:text-5xl">
              Grow your digital
              <span className="block text-emerald-400">
                presence.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Explore social media marketing and content promotion
              services for creators, brands and businesses.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm">
                <TrendingUp size={16} className="text-emerald-400" />
                Growth tools
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm">
                <ShieldCheck size={16} className="text-emerald-400" />
                Responsible promotion
              </span>
            </div>
          </div>
        </section>

        <div className="mb-6">
          <h2 className="text-xl font-bold text-[var(--foreground)]">
            Explore platforms
          </h2>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Discover services for your preferred social platform.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.name}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-lg"
              >
                <div className="mb-5 flex items-start justify-between">
                  <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-500">
                    <Icon size={25} />
                  </div>
                  <ArrowUpRight
                    size={19}
                    className="text-[var(--muted)] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-500"
                  />
                </div>

                <h3 className="text-lg font-bold text-[var(--foreground)]">
                  {service.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {service.description}
                </p>

                <p className="mt-4 border-t border-[var(--border)] pt-4 text-xs leading-5 text-[var(--muted)]">
                  {service.examples}
                </p>
              </div>
            );
          })}
        </div>

        <section className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <Users size={25} className="mb-4 text-emerald-500" />
            <h3 className="font-bold text-[var(--foreground)]">
              Build your audience
            </h3>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Discover legitimate ways to reach new audiences and
              improve your content strategy.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <ShieldCheck size={25} className="mb-4 text-emerald-500" />
            <h3 className="font-bold text-[var(--foreground)]">
              Platform-safe promotion
            </h3>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Choose promotional methods that respect platform rules.
              Avoid fake engagement and misleading growth claims.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <CheckCircle2
              size={22}
              className="mt-0.5 shrink-0 text-emerald-500"
            />
            <div>
              <h3 className="font-bold text-[var(--foreground)]">
                SMM marketplace coming soon
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Live service listings, prices, order processing and
                delivery tracking will become available after our
                service providers and payment integrations are connected.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-8 text-center">
          <Link
            href="/dashboard"
            className="text-sm font-semibold text-emerald-600 transition hover:text-emerald-500"
          >
            Return to CARD FLUX dashboard →
          </Link>
        </div>
      </div>
    </main>
  );
}
