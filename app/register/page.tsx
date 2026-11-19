
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { ArrowRight, Eye, EyeOff, ShieldCheck } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password.length < 8) {
      setError("Your password must contain at least 8 characters.");
      return;
    }

    setLoading(true);

    try {
      const supabase = createClient();

      const { data, error } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password,
        options: {
          data: {
            full_name: fullName.trim(),
          },
        },
      });

      if (error) throw error;

      if (data.session) {
        router.push("/dashboard");
        router.refresh();
      } else {
        setSuccess(
          "Your account has been created. Please check your email for a confirmation link before logging in."
        );
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-5 py-12 bg-[var(--background)]">
      <div className="w-full max-w-md">
        <Link href="/" className="flex items-center justify-center gap-2 mb-8 font-extrabold text-xl">
          <span className="grid place-items-center w-10 h-10 rounded-xl bg-emerald-600 text-white">
            C
          </span>
          CARD <span className="text-emerald-500">FLUX</span>
        </Link>

        <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-9 shadow-xl">
          <div className="text-center mb-8">
            <span className="text-xs font-bold tracking-widest text-emerald-500">
              JOIN CARD FLUX
            </span>
            <h1 className="text-3xl font-extrabold mt-3">
              Create your account
            </h1>
            <p className="text-sm text-[var(--muted)] mt-3">
              Start your digital value journey today.
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold mb-2">
                Full name
              </label>
              <input
                id="fullName"
                type="text"
                required
                autoComplete="name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
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
              <label htmlFor="password" className="block text-sm font-semibold mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={8}
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 8 characters"
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 pr-12 outline-none focus:border-emerald-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--muted)]"
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </div>

            {error && (
              <p role="alert" className="text-sm text-red-500">
                {error}
              </p>
            )}

            {success && (
              <p role="status" className="text-sm text-emerald-500">
                {success}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white font-bold py-3.5 transition"
            >
              {loading ? "Creating account..." : "Create Account"}
              {!loading && <ArrowRight size={18} />}
            </button>
          </form>

          <div className="flex items-center justify-center gap-2 mt-6 text-xs text-[var(--muted)]">
            <ShieldCheck size={16} className="text-emerald-500" />
            Your account is protected by Supabase authentication.
          </div>

          <p className="text-center text-sm mt-7 text-[var(--muted)]">
            Already have an account?{" "}
            <Link href="/login" className="text-emerald-500 font-bold">
              Log in
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
