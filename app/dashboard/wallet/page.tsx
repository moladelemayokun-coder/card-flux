
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  ArrowLeft,
  ArrowDownLeft,
  ArrowUpRight,
  Wallet,
  History,
  ShieldCheck,
  Plus,
  CreditCard,
  CircleDollarSign,
  Clock,
  LockKeyhole,
} from "lucide-react";

import { createClient } from "@/lib/supabase/server";

export default async function WalletPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="flex items-center justify-between gap-4 border-b border-[var(--border)] bg-[var(--surface)] px-5 py-5 sm:px-8">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="rounded-xl border border-[var(--border)] p-2"
          >
            <ArrowLeft size={19} />
          </Link>
          <div>
            <p className="text-xs text-[var(--muted)]">CARD FLUX / ACCOUNT</p>
            <h1 className="text-lg font-extrabold">My Wallet</h1>
          </div>
        </div>

        <span className="rounded-full bg-emerald-500/10 px-3 py-2 text-xs font-bold text-emerald-600">
          <span className="mr-1">●</span> Active
        </span>
      </header>

      <div className="mx-auto max-w-6xl space-y-8 px-5 py-9 sm:px-8">
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#071b2d] via-[#075344] to-[#07966f] p-7 text-white sm:p-10">
          <div className="relative z-10">
            <div className="flex items-center gap-3 text-sm font-bold text-white/75">
              <Wallet size={20} />
              CARD FLUX WALLET
              <ShieldCheck size={18} className="text-emerald-300" />
            </div>

            <p className="mt-8 text-sm text-white/70">Available balance</p>
            <h2 className="mt-2 text-4xl font-black sm:text-5xl">₦0.00</h2>
            <p className="mt-3 text-xs text-white/60">
              Your wallet balance will appear here.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/dashboard/wallet/fund"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-emerald-800"
              >
                <Plus size={17} /> Add funds
              </Link>

              <Link
                href="/dashboard/transactions"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white"
              >
                <History size={17} /> Transactions
              </Link>
            </div>
          </div>

          <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-2 -top-2 h-48 w-48 rounded-full border border-white/10" />
          <Wallet className="pointer-events-none absolute bottom-5 right-8 h-36 w-36 text-white/10" />
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-emerald-500/10 text-emerald-600">
              <ArrowDownLeft size={22} />
            </div>
            <p className="text-sm text-[var(--muted)]">Total deposits</p>
            <h3 className="mt-2 text-2xl font-black">₦0.00</h3>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-blue-500/10 text-blue-600">
              <ArrowUpRight size={22} />
            </div>
            <p className="text-sm text-[var(--muted)]">Total spending</p>
            <h3 className="mt-2 text-2xl font-black">₦0.00</h3>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-purple-500/10 text-purple-600">
              <CircleDollarSign size={22} />
            </div>
            <p className="text-sm text-[var(--muted)]">Wallet currency</p>
            <h3 className="mt-2 text-2xl font-black">NGN ₦</h3>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-600">
                <CreditCard size={23} />
              </div>
              <div>
                <h2 className="font-extrabold">Fund your wallet</h2>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  Explore available payment methods.
                </p>
              </div>
            </div>

            <Link
              href="/dashboard/wallet/fund"
              className="mt-6 flex items-center justify-between rounded-xl bg-emerald-500/10 p-4 text-sm font-bold text-emerald-600"
            >
              Explore funding options
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-500/10 p-3 text-blue-600">
                <LockKeyhole size={23} />
              </div>
              <div>
                <h2 className="font-extrabold">Wallet security</h2>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  Your wallet needs verified payment processing.
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 rounded-xl border border-[var(--border)] p-4 text-xs text-[var(--muted)]">
              <ShieldCheck size={17} className="text-emerald-600" />
              Secure payment integration is being prepared.
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-extrabold tracking-widest text-emerald-600">
                WALLET ACTIVITY
              </p>
              <h2 className="mt-2 text-xl font-black">Recent transactions</h2>
            </div>
            <History className="text-emerald-600" size={23} />
          </div>

          <div className="flex min-h-48 flex-col items-center justify-center text-center">
            <div className="mb-4 rounded-2xl bg-[var(--background)] p-4 text-[var(--muted)]">
              <Clock size={27} />
            </div>
            <h3 className="font-extrabold">No transactions yet</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Your wallet transactions will appear here.
            </p>
          </div>
        </section>

        <footer className="border-t border-[var(--border)] pt-6 text-center text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} CARD FLUX · WHERE GIFT CARDS MOVE.
        </footer>
      </div>
    </main>
  );
}
