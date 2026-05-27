"use client";

import Link from "next/link";
import { Mail, Lock, User } from "lucide-react";

export default function SignupForm() {
  return (
    <form className="space-y-6">
      <div>
        <label className="mb-2 block text-sm text-gray-300">
          Full Name
        </label>

        <div className="flex items-center rounded-xl border border-red-500/20 bg-zinc-900 px-4">
          <User size={18} className="text-red-500" />

          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full bg-transparent px-3 py-4 text-sm text-white outline-none"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm text-gray-300">
          Email
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

      <div>
        <label className="mb-2 block text-sm text-gray-300">
          Password
        </label>

        <div className="flex items-center rounded-xl border border-red-500/20 bg-zinc-900 px-4">
          <Lock size={18} className="text-red-500" />

          <input
            type="password"
            placeholder="Create password"
            className="w-full bg-transparent px-3 py-4 text-sm text-white outline-none"
          />
        </div>
      </div>

      <button className="w-full rounded-xl bg-red-600 py-4 font-semibold text-white transition hover:bg-red-700">
        Create Account
      </button>

      <p className="text-center text-sm text-gray-400">
        Already have an account?{" "}
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