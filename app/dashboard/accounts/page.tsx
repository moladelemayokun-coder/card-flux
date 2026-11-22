
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Users,
  ShieldCheck,
  Sparkles,
  Gamepad2,
  BriefcaseBusiness,
  MessageCircle,
  Cloud,
  Search,
  CheckCircle2,
} from "lucide-react";

import { createClient } from "@/lib/supabase/server";

const accountTypes = [
  {
    title: "Social Media Accounts",
    description: "Explore eligible social media account listings.",
    icon: MessageCircle,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Gaming Accounts",
    description: "Discover gaming account categories.",
    icon: Gamepad2,
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "Professional Accounts",
    description: "Explore professional digital account categories.",
    icon: BriefcaseBusiness,
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    title: "Cloud & Software",
    description: "Discover software and cloud account categories.",
    icon: Cloud,
    color: "bg-cyan-500/10 text-cyan-500",
  },
];

export default async function AccountsPage() {
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
            <h1 className="text-lg font-extrabold">Digital Accounts</h1>
          </div>
        </div>

        <span className="rounded-full bg-emerald-500/10 px-3 py-2 text-xs font-bold text-emerald-600">
          ● Account
        </span>
      </header>

      <div className="mx-auto max-w-6xl space-y-9 px-5 py-9 sm:px-8">
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#071b2d] via-[#123b55] to-[#51408a] p-7 text-white sm:p-10">
          <div className="relative z-10 max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold">
              <Sparkles size={14} /> DIGITAL MARKETPLACE
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight sm:text-5xl">
              Digital accounts.
              <br />
              More possibilities.
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-white/75">
              Explore digital account categories for eligible services,
              platforms and software. Discover what CARD FLUX is preparing
              for its marketplace.
            </p>

            <div className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-slate-900">
              <Search size={17} /> Explore categories
            </div>
          </div>

          <Users className="pointer-events-none absolute -bottom-5 right-5 h-40 w-40 text-white/10 sm:h-52 sm:w-52" />
        </section>

        <section>
          <div className="mb-5">
            <p className="text-xs font-extrabold tracking-[2px] text-emerald-600">
              BROWSE CATEGORIES
            </p>
            <h2 className="mt-2 text-2xl font-black">
              Explore digital accounts
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Browse the account categories planned for CARD FLUX.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {accountTypes.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className={`mb-5 grid h-12 w-12 place-items-center rounded-xl ${item.color}`}>
                    <Icon size={24} />
                  </div>

                  <h3 className="font-extrabold">{item.title}</h3>

                  <p className="mt-2 min-h-12 text-xs leading-6 text-[var(--muted)]">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs font-bold text-emerald-600">
                    Explore category <ArrowUpRight size={15} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-emerald-500/10 text-emerald-600">
              <ShieldCheck size={25} />
            </div>

            <h2 className="text-lg font-extrabold">
              Responsible marketplace
            </h2>

            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
              Listings will be subject to verification, platform rules and
              applicable laws. Unauthorized, compromised or fraudulent
              accounts will not be supported.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-blue-500/10 text-blue-600">
              <CheckCircle2 size={25} />
            </div>

            <h2 className="text-lg font-extrabold">
              Marketplace preparation
            </h2>

            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
              Account listings, availability, pricing, secure checkout and
              order delivery will become available when the relevant services
              are connected.
            </p>
          </div>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted)]">
          <span>© {new Date().getFullYear()} CARD FLUX</span>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 font-bold text-emerald-600"
          >
            Back to dashboard <ArrowUpRight size={15} />
          </Link>
        </footer>
      </div>
    </main>
  );
          }
