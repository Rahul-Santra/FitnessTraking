"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

export default function ForgotPasswordForm() {
  return (
    <form className="space-y-6">
      <div>
        <label className="mb-2 block text-sm text-gray-300">
          Email Address
        </label>

        <div className="flex items-center rounded-xl border border-red-500/20 bg-zinc-900 px-4">
          <Mail size={18} className="text-red-500" />

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-transparent px-3 py-4 text-sm text-white outline-none"
          />
        </div>
      </div>

      <button className="w-full rounded-xl bg-red-600 py-4 font-semibold text-white transition hover:bg-red-700">
        Send Reset Link
      </button>

      <p className="text-center text-sm text-gray-400">
        Back to{" "}
        <Link
          href="/auth/login"
          className="text-red-500 hover:text-red-400"
        >
          Login
        </Link>
      </p>
    </form>
  );
}