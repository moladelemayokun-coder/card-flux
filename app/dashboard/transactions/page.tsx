import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import {
  ArrowLeft,
  ArrowDownLeft,
  ArrowUpRight,
  ArrowLeftRight,
  History,
  Wallet,
  Clock,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default async function TransactionsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const stats = [
    { label: "Total transactions", value: "0", icon: History },
    { label: "Money received", value: "₦0.00", icon: ArrowDownLeft },
    { label: "Money spent", value: "₦0.00", icon: ArrowUpRight },
    { label: "Pending", value: "0", icon: Clock },
  ];

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

          <div className="relative">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
              <Sparkles size={14} />
              FINANCIAL ACTIVITY
            </div>

            <h1 className="text-3xl font-bold sm:text-5xl">
              Transaction
              <span className="block text-emerald-400">history.</span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              View your deposits, payments, withdrawals and other
              wallet activity in one organized place.
            </p>
          </div>
        </section>

        <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5"
              >
                <div className="mb-4 flex items-center justify-between gap-2">
                  <span className="text-xs text-[var(--muted)] sm:text-sm">
                    {stat.label}
                  </span>
                  <Icon size={19} className="shrink-0 text-emerald-500" />
                </div>

                <p className="text-xl font-bold text-[var(--foreground)] sm:text-2xl">
                  {stat.value}
                </p>
              </div>
            );
          })}
        </div>

        <section className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] p-5">
            <div>
              <h2 className="text-lg font-bold text-[var(--foreground)]">
                All transactions
              </h2>
              <p className="mt-1 text-xs text-[var(--muted)]">
                Your financial activity and payment records.
              </p>
            </div>

            <span className="rounded-lg bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-600">
              All activity
            </span>
          </div>

          <div className="px-5 py-16 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500">
              <ArrowLeftRight size={30} />
            </div>

            <h3 className="text-lg font-bold text-[var(--foreground)]">
              No transactions yet
            </h3>

            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[var(--muted)]">
              Your verified deposits, purchases and withdrawals
              will appear here when transaction processing is connected.
            </p>

            <Link
              href="/dashboard/wallet"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              <Wallet size={16} />
              View wallet
            </Link>
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2 size={21} className="mt-0.5 text-emerald-500" />
            <div>
              <h3 className="font-bold text-[var(--foreground)]">
                Secure transaction records
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Verified payment records and wallet ledger history
                will be connected to the secure backend. This page
                currently displays placeholder figures only.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
