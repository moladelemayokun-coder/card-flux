import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import {
  ArrowLeft,
  Headphones,
  MessageCircle,
  Mail,
  ShieldCheck,
  Clock,
  HelpCircle,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const supportOptions = [
  {
    title: "General enquiries",
    description: "Questions about CARD FLUX and our services.",
    icon: MessageCircle,
  },
  {
    title: "Account assistance",
    description: "Help with registration, login and account access.",
    icon: ShieldCheck,
  },
  {
    title: "Payments & wallet",
    description: "Assistance with deposits and payment questions.",
    icon: Mail,
  },
  {
    title: "Orders & services",
    description: "Help with orders and digital products.",
    icon: HelpCircle,
  },
];

export default async function SupportPage() {
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
              CARD FLUX SUPPORT
            </div>

            <h1 className="text-3xl font-bold leading-tight sm:text-5xl">
              We're here to
              <span className="block text-emerald-400">
                help you.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Find assistance with your account, wallet, digital
              products and other CARD FLUX services.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm">
                <Headphones size={16} className="text-emerald-400" />
                Customer assistance
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm">
                <ShieldCheck size={16} className="text-emerald-400" />
                Account support
              </span>
            </div>
          </div>
        </section>

        <div className="mb-6">
          <h2 className="text-xl font-bold text-[var(--foreground)]">
            How can we help?
          </h2>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Choose the area you need assistance with.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {supportOptions.map((option) => {
            const Icon = option.icon;

            return (
              <div
                key={option.title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-500">
                    <Icon size={24} />
                  </div>
                  <ArrowUpRight
                    size={19}
                    className="text-[var(--muted)]"
                  />
                </div>

                <h3 className="font-bold text-[var(--foreground)]">
                  {option.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {option.description}
                </p>
              </div>
            );
          })}
        </div>

        <section className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <Mail size={25} className="mb-4 text-emerald-500" />
            <h3 className="font-bold text-[var(--foreground)]">
              Email support
            </h3>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Our official support email address will be published
              here once the support channel is configured.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <Clock size={25} className="mb-4 text-emerald-500" />
            <h3 className="font-bold text-[var(--foreground)]">
              Support availability
            </h3>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Support hours and response-time information will be
              announced when our customer support system launches.
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
                Support centre coming soon
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Live chat, support tickets, email assistance and
                ticket tracking will be activated when the customer
                support system is connected.
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
