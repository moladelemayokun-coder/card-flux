import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Crown,
  Film,
  Music2,
  Gamepad2,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";

const services = [
  {
    name: "Streaming",
    description: "Entertainment and video streaming subscriptions.",
    icon: Film,
    examples: "Netflix · Prime Video · Other platforms",
  },
  {
    name: "Music",
    description: "Music streaming and premium listening plans.",
    icon: Music2,
    examples: "Spotify · Apple Music · Other platforms",
  },
  {
    name: "Gaming",
    description: "Gaming memberships and online game subscriptions.",
    icon: Gamepad2,
    examples: "Game Pass · PlayStation · Other platforms",
  },
  {
    name: "Premium Software",
    description: "Productivity, creative and software subscriptions.",
    icon: Crown,
    examples: "Design · Productivity · Cloud tools",
  },
];

export default async function SubscriptionsPage() {
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
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-1/3 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
              <Sparkles size={14} />
              CARD FLUX SUBSCRIPTIONS
            </div>

            <h1 className="text-3xl font-bold leading-tight sm:text-5xl">
              Your favourite services.
              <span className="block text-emerald-400">
                All in one place.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Discover digital memberships, premium entertainment,
              gaming plans and productivity subscriptions from one
              convenient marketplace.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm">
                <ShieldCheck size={16} className="text-emerald-400" />
                Secure marketplace
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm">
                <Zap size={16} className="text-emerald-400" />
                Digital convenience
              </span>
            </div>
          </div>
        </section>

        <div className="mb-6">
          <h2 className="text-xl font-bold text-[var(--foreground)]">
            Explore subscriptions
          </h2>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Choose a category to explore available services.
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

        <section className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <CheckCircle2
              size={22}
              className="mt-0.5 shrink-0 text-emerald-500"
            />
            <div>
              <h3 className="font-bold text-[var(--foreground)]">
                Subscription marketplace
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                This section is being prepared. Live subscription listings,
                prices and purchases will become available after the product
                catalogue and payment systems are connected.
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
