import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Users,
  Gift,
  Wallet,
  Copy,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default async function ReferralsPage() {
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
              CARD FLUX REWARDS
            </div>

            <h1 className="text-3xl font-bold leading-tight sm:text-5xl">
              Share the experience.
              <span className="block text-emerald-400">
                Earn together.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Invite friends to discover CARD FLUX. Our upcoming
              referral programme will reward eligible users for
              successful referrals.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm">
                <Users size={16} className="text-emerald-400" />
                Invite friends
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm">
                <Gift size={16} className="text-emerald-400" />
                Referral rewards
              </span>
            </div>
          </div>
        </section>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <Users size={23} className="mb-4 text-emerald-500" />
            <p className="text-sm text-[var(--muted)]">Total referrals</p>
            <p className="mt-2 text-3xl font-bold text-[var(--foreground)]">
              0
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <CheckCircle2 size={23} className="mb-4 text-emerald-500" />
            <p className="text-sm text-[var(--muted)]">Successful referrals</p>
            <p className="mt-2 text-3xl font-bold text-[var(--foreground)]">
              0
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <Wallet size={23} className="mb-4 text-emerald-500" />
            <p className="text-sm text-[var(--muted)]">Referral earnings</p>
            <p className="mt-2 text-3xl font-bold text-[var(--foreground)]">
              ₦0.00
            </p>
          </div>
        </div>

        <section className="mt-6 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
          <div className="border-b border-[var(--border)] p-5">
            <h2 className="text-lg font-bold text-[var(--foreground)]">
              Your referral link
            </h2>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Your personal invitation link will appear here.
            </p>
          </div>

          <div className="p-6 text-center sm:p-10">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500">
              <Gift size={30} />
            </div>

            <h3 className="text-lg font-bold text-[var(--foreground)]">
              Your referral programme is coming soon
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[var(--muted)]">
              We are preparing unique referral links, referral tracking
              and reward calculations. Your referral link will be
              generated when the programme is activated.
            </p>

            <div className="mx-auto mt-6 flex max-w-md items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--background)] p-3 text-left opacity-60">
              <Copy size={17} className="shrink-0 text-[var(--muted)]" />
              <span className="flex-1 truncate text-xs text-[var(--muted)]">
                Referral link not available yet
              </span>
              <ArrowUpRight size={16} className="text-[var(--muted)]" />
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck size={22} className="mt-0.5 shrink-0 text-emerald-500" />
            <div>
              <h3 className="font-bold text-[var(--foreground)]">
                Transparent rewards
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Referral eligibility, reward amounts and payout conditions
                will be clearly published before the programme launches.
                The figures on this page are placeholders.
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
