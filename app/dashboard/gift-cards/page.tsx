
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Gift,
  ShoppingBag,
  ArrowLeftRight,
  ShieldCheck,
  Sparkles,
  Apple,
  Gamepad2,
  Music,
  Store,
} from "lucide-react";

import { createClient } from "@/lib/supabase/server";

const categories = [
  { name: "Apple Gift Cards", icon: Apple, color: "bg-gray-100 text-gray-800" },
  { name: "Gaming Cards", icon: Gamepad2, color: "bg-purple-100 text-purple-700" },
  { name: "Entertainment", icon: Music, color: "bg-pink-100 text-pink-700" },
  { name: "Shopping Cards", icon: Store, color: "bg-orange-100 text-orange-700" },
];

export default async function GiftCardsPage() {
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
            <p className="text-xs text-[var(--muted)]">CARD FLUX / SERVICES</p>
            <h1 className="text-lg font-extrabold">Gift Cards</h1>
          </div>
        </div>
        <span className="rounded-full bg-emerald-500/10 px-3 py-2 text-xs font-bold text-emerald-600">
          <span className="mr-1">●</span> Your account
        </span>
      </header>

      <div className="mx-auto max-w-6xl space-y-9 px-5 py-9 sm:px-8">
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#071b2d] via-[#075344] to-[#07966f] p-7 text-white sm:p-10">
          <div className="relative z-10 max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold">
              <Sparkles size={14} /> CARD FLUX MARKETPLACE
            </span>
            <h2 className="mt-6 text-3xl font-black leading-tight sm:text-5xl">
              Gift cards.
              <br />
              Without boundaries.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/75">
              Your destination for buying and selling eligible digital gift
              cards. Explore the marketplace as we prepare our live services.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-emerald-800">
                <ShoppingBag size={17} /> Buy gift cards
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold">
                <ArrowLeftRight size={17} /> Sell gift cards
              </span>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-4 -top-4 h-48 w-48 rounded-full border border-white/10" />
          <Gift className="pointer-events-none absolute bottom-8 right-10 h-28 w-28 rotate-12 text-white/10 sm:h-40 sm:w-40" />
        </section>

        <section>
          <div className="mb-5">
            <p className="text-xs font-extrabold tracking-[2px] text-emerald-600">
              EXPLORE CATEGORIES
            </p>
            <h2 className="mt-2 text-2xl font-black">Find your gift card</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Browse the types of gift cards planned for the marketplace.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.name}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className={`mb-5 grid h-12 w-12 place-items-center rounded-xl ${category.color}`}>
                    <Icon size={23} />
                  </div>
                  <h3 className="text-sm font-extrabold">{category.name}</h3>
                  <p className="mt-2 text-xs text-[var(--muted)]">
                    Marketplace category
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-600">
              <ShieldCheck size={25} />
            </div>
            <div>
              <h2 className="text-lg font-extrabold">A secure marketplace experience</h2>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                We are preparing the gift card listing, live exchange rates,
                order processing and payment verification systems. No purchases
                or sales are available until these services are connected.
              </p>
            </div>
          </div>
        </section>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-6">
          <p className="text-xs text-[var(--muted)]">
            © {new Date().getFullYear()} CARD FLUX · WHERE GIFT CARDS MOVE.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600"
          >
            Back to dashboard <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
      }
