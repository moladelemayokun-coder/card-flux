import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import {
  ArrowLeft,
  User,
  Mail,
  ShieldCheck,
  Settings,
  Lock,
  Bell,
  Globe,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { LogoutButton } from "@/components/logout-button";

export default async function ProfilePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const fullName =
    user.user_metadata?.full_name ||
    user.user_metadata?.name ||
    "CARD FLUX User";

  const initials = fullName
    .split(" ")
    .map((part: string) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <main className="min-h-screen bg-[var(--background)] px-4 py-6 sm:px-8">
      <div className="mx-auto max-w-5xl">
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
              ACCOUNT CENTRE
            </div>

            <h1 className="text-3xl font-bold sm:text-5xl">
              Profile & Settings
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
              Manage your CARD FLUX account information,
              security and personal preferences.
            </p>
          </div>
        </section>

        <section className="mb-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-7">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500 text-xl font-bold text-white">
              {initials}
            </div>

            <div className="min-w-0 flex-1">
              <h2 className="truncate text-xl font-bold text-[var(--foreground)]">
                {fullName}
              </h2>
              <p className="mt-1 break-all text-sm text-[var(--muted)]">
                {user.email}
              </p>
              <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600">
                <ShieldCheck size={13} />
                Registered account
              </span>
            </div>
          </div>
        </section>

        <div className="mb-4">
          <h2 className="text-lg font-bold text-[var(--foreground)]">
            Account information
          </h2>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Your current account details.
          </p>
        </div>

        <section className="mb-7 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
          <div className="flex items-center gap-4 border-b border-[var(--border)] p-5">
            <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-500">
              <User size={21} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs text-[var(--muted)]">Full name</p>
              <p className="mt-1 font-semibold text-[var(--foreground)]">
                {fullName}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5">
            <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-500">
              <Mail size={21} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs text-[var(--muted)]">Email address</p>
              <p className="mt-1 break-all font-semibold text-[var(--foreground)]">
                {user.email}
              </p>
            </div>
          </div>
        </section>

        <div className="mb-4">
          <h2 className="text-lg font-bold text-[var(--foreground)]">
            Preferences & security
          </h2>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Account settings and security options.
          </p>
        </div>

        <section className="mb-7 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
          <div className="flex items-center gap-4 border-b border-[var(--border)] p-5">
            <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-500">
              <Lock size={21} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-[var(--foreground)]">
                Password & authentication
              </p>
              <p className="mt-1 text-xs text-[var(--muted)]">
                Password recovery and account protection.
              </p>
            </div>
            <ChevronRight size={19} className="text-[var(--muted)]" />
          </div>

          <div className="flex items-center gap-4 border-b border-[var(--border)] p-5">
            <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-500">
              <Bell size={21} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-[var(--foreground)]">
                Notifications
              </p>
              <p className="mt-1 text-xs text-[var(--muted)]">
                Manage account and transaction alerts.
              </p>
            </div>
            <ChevronRight size={19} className="text-[var(--muted)]" />
          </div>

          <div className="flex items-center gap-4 border-b border-[var(--border)] p-5">
            <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-500">
              <Globe size={21} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-[var(--foreground)]">
                Language & region
              </p>
              <p className="mt-1 text-xs text-[var(--muted)]">
                Regional preferences and display settings.
              </p>
            </div>
            <ChevronRight size={19} className="text-[var(--muted)]" />
          </div>

          <div className="flex items-center gap-4 p-5">
            <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-500">
              <Settings size={21} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-[var(--foreground)]">
                Account preferences
              </p>
              <p className="mt-1 text-xs text-[var(--muted)]">
                Additional profile settings.
              </p>
            </div>
            <ChevronRight size={19} className="text-[var(--muted)]" />
          </div>
        </section>

        <section className="rounded-2xl border border-red-500/20 bg-[var(--surface)] p-5">
          <h3 className="font-bold text-[var(--foreground)]">
            Sign out
          </h3>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Securely sign out of your CARD FLUX account on this device.
          </p>
          <div className="mt-4">
            <LogoutButton />
          </div>
        </section>

        <p className="mt-8 text-center text-xs text-[var(--muted)]">
          CARD FLUX · Account settings
        </p>
      </div>
    </main>
  );
}
