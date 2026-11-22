import Link from "next/link";
import { redirect } from "next/navigation";
import {
  ArrowLeft,
  Wallet,
  CreditCard,
  Building2,
  ShieldCheck,
  Clock,
  ArrowRight,
} from "lucide-react";
import { createClient } from "@/lib/supabase/server";

export default async function FundWalletPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const methods = [
    {
      name: "Debit / Credit Card",
      description: "Fund your wallet using a supported bank card.",
      icon: CreditCard,
      status: "Coming soon",
    },
    {
      name: "Bank Transfer",
      description: "Transfer funds directly from your bank account.",
      icon: Building2,
      status: "Coming soon",
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--background)] px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/dashboard/wallet"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] transition hover:text-[var(--primary)]"
        >
          <ArrowLeft size={17} />
          Back to Wallet
        </Link>

        <section className="relative overflow-hidden rounded-3xl bg-[#071426] p-7 text-white sm:p-10">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="relative">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400">
              <Wallet size={28} />
            </div>

            <p className="text-sm font-medium text-emerald-400">
              CARD FLUX WALLET
            </p>

            <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
              Fund your wallet
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Add funds to your Card Flux wallet and get ready to access
              digital products and services.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-[var(--foreground)]">
            Choose a payment method
          </h2>

          <p className="mt-2 text-sm text-[var(--muted)]">
            Select how you would like to add money to your wallet.
          </p>

          <div className="mt-6 grid gap-4">
            {methods.map((method) => {
              const Icon = method.icon;

              return (
                <div
                  key={method.name}
                  className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                    <Icon size={23} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-[var(--foreground)]">
                      {method.name}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {method.description}
                    </p>
                    <span className="mt-2 inline-block text-xs font-semibold text-amber-500">
                      {method.status}
                    </span>
                  </div>

                  <ArrowRight
                    size={19}
                    className="shrink-0 text-[var(--muted)]"
                  />
                </div>
              );
            })}
          </div>
        </section>

        <div className="mt-8 flex gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
          <ShieldCheck className="shrink-0 text-emerald-500" size={23} />
          <div>
            <h3 className="font-semibold text-[var(--foreground)]">
              Secure wallet funding
            </h3>
            <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
              Payment processing and wallet crediting will be enabled after
              the payment gateway and secure transaction verification are
              connected.
            </p>
          </div>
        </div>

        <p className="mt-6 flex items-center justify-center gap-2 text-xs text-[var(--muted)]">
          <Clock size={14} />
          Payment services are not active yet.
        </p>
      </div>
    </main>
  );
}
