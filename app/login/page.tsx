
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  ArrowRight,
  Eye,
  EyeOff,
  ShieldCheck,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const supabase = createClient();

      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password,
      });

      if (error) throw error;

      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to log in. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-5 py-12 bg-[var(--background)]">
      <div className="w-full max-w-md">

        <Link
          href="/"
          className="flex items-center justify-center gap-2 mb-8 font-extrabold text-xl"
        >
          <span className="grid place-items-center w-10 h-10 rounded-xl bg-emerald-600 text-white">
            C
          </span>
          CARD <span className="text-emerald-500">FLUX</span>
        </Link>

        <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-9 shadow-xl">

          <div className="text-center mb-8">
            <span className="text-xs font-bold tracking-widest text-emerald-500">
              WELCOME BACK
            </span>

            <h1 className="text-3xl font-extrabold mt-3">
              Log in to your account
            </h1>

            <p className="text-sm text-[var(--muted)] mt-3">
              Access your CARD FLUX marketplace.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
              >
                Email address
              </label>

              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold mb-2"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 pr-12 outline-none focus:border-emerald-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--muted)]"
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <p role="alert" className="text-sm text-red-500">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white font-bold py-3.5 transition"
            >
              {loading ? "Logging in..." : "Log In"}
              {!loading && <ArrowRight size={18} />}
            </button>

          </form>

          <div className="flex items-center justify-center gap-2 mt-6 text-xs text-[var(--muted)]">
            <ShieldCheck size={16} className="text-emerald-500" />
            Secure account authentication
          </div>

          <p className="text-center text-sm mt-7 text-[var(--muted)]">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-emerald-500 font-bold"
            >
              Create account
            </Link>
          </p>

        </section>

        <p className="text-center text-xs text-[var(--muted)] mt-6">
          © {new Date().getFullYear()} CARD FLUX. Where Gift Cards Move.
        </p>

      </div>
    </main>
  );
              }
